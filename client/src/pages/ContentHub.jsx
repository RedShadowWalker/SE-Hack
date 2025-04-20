import React, { useState } from 'react';
import '../styles/ContentHub.css';
import { Search, ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';

const ContentHub = ({ isDarkMode }) => { // Receive isDarkMode as a prop
  const [activeTab, setActiveTab] = useState('recommended');
  const [typeFilter, setTypeFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]); // State to manage cart items
  const [isCartVisible, setIsCartVisible] = useState(false); // State to manage cart visibility
  const [couponCode, setCouponCode] = useState(''); // State for coupon code
  const [appliedCoupon, setAppliedCoupon] = useState(null); // State for applied coupon

  const courseData = [
    {
      id: 1,
      title: "Artificial Intelligence",
      type: "TEST",
      badge: "POPULAR",
      Price: 2500,
      originalPrice: 5678,
      discount: "56% OFF",
      image: "ai.jpg",
      rating: 4.9,
      ratingCount: 123,
      features: [
        "One Subscription to unlock all Test Series in Package",
        "16+ Test Series - DPPs, Mock Tests, 100DQ, Gap Filling and Quick Tests",
        "10000+ Questions with Proper Answer Keys"
      ],
      highlights: [
        "Understand exam-cracking with All India Ranks",
        "Comprehensive curriculum-aligned syllabus coverage",
        "Real-Time Simulation - Offline & CT-PAT & CBT",
        "Complete Test Analysis for Full Topic Mastery and Improve",
        "The Feel of the Competitive Exam Simulatable"
      ]
    },
    {
      id: 2,
      title: "App Development",
      type: "AITS",
      badge: "NEW",
      Price: 999,
      image:"appdev.png",
      highlights: [
        "Understand exam-cracking with All India Ranks",
        "Comprehensive curriculum-aligned syllabus coverage",
        "Real-Time Simulation - Offline & CT-PAT & CBT",
        "Complete Test Analysis for Full Topic Mastery and Improve",
        "The Feel of the Competitive Exam Simulatable"
      ]
      
    },
    {
      id: 3,
      title: "Blockchain Technology",
      type: "MOCK",
      badge: "NEW",
      Price: 499,
      image:"blockchain.png",
      highlights: [
        "Adaptive PCBM FYQs",
        "Most Important AIIMS & Deemed Qs and Answers",
        "Video Solutions and detailed analysis for improvement",
        "Best Value Package for PG AIIMS Practice and improve"
      ]
    },
    {
      id: 4,
      title: "Competitive Programming",
      type: "TEST",
      badge: "HOT",
      Price: 299,
      image:"cp.jpg",
      highlights: [
        "Affordable Quality Test Series",
        "Daily Subject and section analysis for improvement",
        "Free Subject Wise Micro Tests for skill-building",
        "Perfect for beginners"
      ]
    },
    {
      id: 5,
      title: "CyberSecurity",
      type: "TEST",
      badge: "NEW",
      Price: 999,
      image:"cyber.jpg",
      highlights: [
        "Chapter Test, Part Test, Full Test",
        "All Institutes Combined with proper Rank structure for students",
        "Video solutions"
      ]
    },
    {
      id: 6,
      title: "Data Science & Analytics",
      type: "MOCK",
      badge: "HOT",
      Price: 999,
      image:"dsc.jpg",
      highlights: [
        "All Major Tests, Part Test, Day Tests",
        "Our Students Used These Practice Tests for rank improvement",
        "Complete answer evaluations",
        "Specifically Tuned for JEE Online server",
        "Time-Bound Systematic Instruction"
      ]
    }
  ];

  const filters = {
    type: ['TEST', 'AITS', 'MOCK', 'ALL'],
    mode: ['ONLINE', 'OFFLINE', 'HYBRID', 'ALL']
  };

  const tabs = [
    { id: 'recommended', label: 'Recommended', count: 18 },
    { id: 'trending', label: 'Trending', count: 8 },
    { id: 'popular', label: 'Popular', count: 12 },
  ];

  // Available coupons
  const availableCoupons = [
    { code: 'FIRST10', discount: 10, type: 'percentage' },
    { code: 'FLAT500', discount: 500, type: 'fixed' },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBuyNow = (course) => {
    const existingItem = cartItems.find(item => item.id === course.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...course, quantity: 1 }]);
    }
    setIsCartVisible(true); // Show cart
  };

  const handleQuantityChange = (courseId, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === courseId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const incrementQuantity = (courseId) => {
    handleQuantityChange(courseId, cartItems.find(item => item.id === courseId).quantity + 1);
  };

  const decrementQuantity = (courseId) => {
    const item = cartItems.find(item => item.id === courseId);
    if (item.quantity > 1) {
      handleQuantityChange(courseId, item.quantity - 1);
    }
  };

  const removeFromCart = (courseId) => {
    setCartItems(cartItems.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const applyCoupon = () => {
    const coupon = availableCoupons.find(c => c.code === couponCode);
    if (coupon) {
      setAppliedCoupon(coupon);
      // Show success message (in a real app, you'd use a toast/notification)
      alert(`Coupon "${couponCode}" applied successfully!`);

    } else {
      // Show error message
      alert('Invalid coupon code.');
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    
    const subtotal = calculateSubtotal();
    if (appliedCoupon.type === 'percentage') {
      return (subtotal * appliedCoupon.discount) / 100;
    } else {
      return appliedCoupon.discount;
    }
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  const highlightText = (text) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const filteredCourses = courseData.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.highlights?.some(highlight => highlight.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`content-hub ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`main-content ${isCartVisible ? 'shifted' : ''}`}>
        <div className="search-container">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search (Tests, AITS, Simulators required)"
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
            />
            <Search className="search-icon" size={20} />
          </div>
          <div className="action-buttons">
            <button 
              className="cart-btn enlarged-cart-btn"
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </button>
          </div>
        </div>

        {/* Course Cards */}
        <div className="course-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="card-image">
                <img src={`src/assets/${course.image}`} alt={course.title} className="course-image" />
                <div className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</div>
              </div>
              <div className="card-details">
                <h3 className="card-title">{course.title}</h3>
                <ul className="highlight-list">
                  {course.highlights?.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <span className="highlight-icon">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <div className="Price-container">
                    <span className="Price">₹ {course.Price}</span>
                    <span className="Price-label">Price</span>
                  </div>
                  <div className="button-group">
                    <button className="btn-explore">EXPLORE</button>
                    <button className="btn-buy-now" onClick={() => handleBuyNow(course)}>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="course-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="card-image">
                <img src={`src/assets/${course.image}`} alt={course.title} className="course-image" />
                <div className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</div>
              </div>
              <div className="card-details">
                <h3 className="card-title">{course.title}</h3>
                <ul className="highlight-list">
                  {course.highlights?.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <span className="highlight-icon">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <div className="price-container">
                    <span className="current-price">₹ {course.Price}</span>
                    {course.originalPrice && (
                      <span className="original-price">₹ {course.originalPrice}</span>
                    )}
                    {course.discount && (
                      <span className="discount">{course.discount}</span>
                    )}
                  </div>
                  <div className="button-group">
                    <button className="btn-explore">EXPLORE</button>
                    <button className="btn-buy-now" onClick={() => handleBuyNow(course)}>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Improved Cart Sidebar */}
      {isCartVisible && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="close-cart-btn" onClick={() => setIsCartVisible(false)}>
              <X size={20} />
            </button>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingCart size={64} />
              <p>Your cart is empty</p>
              <button className="continue-shopping-btn" onClick={() => setIsCartVisible(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items-container">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <div className="cart-item-price">₹{item.Price}</div>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button onClick={() => decrementQuantity(item.id)} className="quantity-btn">
                          <Minus size={16} />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="quantity-input"
                        />
                        <button onClick={() => incrementQuantity(item.id)} className="quantity-btn">
                          <Plus size={16} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="coupon-section">
                <div className="coupon-input-group">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="coupon-input"
                  />
                  <button onClick={applyCoupon} className="apply-coupon-btn">Apply</button>
                </div>
                {appliedCoupon && (
                  <div className="applied-coupon">
                    <span>Applied: {appliedCoupon.code}</span>
                    <button onClick={() => setAppliedCoupon(null)} className="remove-coupon-btn">
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{calculateSubtotal()}</span>
                </div>
                {appliedCoupon && (
                  <div className="summary-row discount">
                    <span>Discount ({appliedCoupon.type === 'percentage' ? `${appliedCoupon.discount}%` : 'Flat'})</span>
                    <span>-₹{calculateDiscount()}</span>
                  </div>
                )}
                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹{calculateTotal()}</span>
                </div>
              </div>
              
              <div className="cart-actions">
                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
              </div>
            </>
          )}
          
          <div className="cart-footer">
            <div className="cart-help">
              <p>Need help? <a href="#">Contact support</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentHub;
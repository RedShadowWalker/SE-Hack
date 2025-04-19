import React, { useState } from 'react';
import '../styles/ContentHub.css';
import { Search } from 'lucide-react';

const ContentHub = () => {
  const [activeTab, setActiveTab] = useState('recommended');
  const [typeFilter, setTypeFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const courseData = [
    {
      id: 1,
      title: "Prayas JEE Test Series",
      type: "TEST",
      badge: "POPULAR",
      credits: 2500,
      originalCredits: 5678,
      discount: "56% OFF",
      image: "/jee-test-series.jpg",
      rating: 4.9,
      ratingCount: 123,
      features: [
        "One Subscription to unlock all Test Series in Package",
        "16+ Test Series - DPPs, Mock Tests, 100DQ, Gap Filling and Quick Tests",
        "10000+ Questions with Proper Answer Keys"
      ]
    },
    {
      id: 2,
      title: "Prayas JEE 2025 AITS",
      type: "AITS",
      badge: "NEW",
      credits: 999,
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
      title: "NEET-G FYQs and MOCK Test Series 2025",
      type: "MOCK",
      badge: "NEW",
      credits: 499,
      highlights: [
        "Adaptive PCBM FYQs",
        "Most Important AIIMS & Deemed Qs and Answers",
        "Video Solutions and detailed analysis for improvement",
        "Best Value Package for PG AIIMS Practice and improve"
      ]
    },
    {
      id: 4,
      title: "Prayas JEE/NEET 2025 Test Series",
      type: "TEST",
      badge: "HOT",
      credits: 299,
      highlights: [
        "Affordable Quality Test Series",
        "Daily Subject and section analysis for improvement",
        "Free Subject Wise Micro Tests for skill-building",
        "Perfect for beginners"
      ]
    },
    {
      id: 5,
      title: "Prayas JEE 2025 Test Series",
      type: "TEST",
      badge: "NEW",
      credits: 999,
      highlights: [
        "Chapter Test, Part Test, Full Test",
        "All Institutes Combined with proper Rank structure for students",
        "Video solutions"
      ]
    },
    {
      id: 6,
      title: "JEE Mains 2025 Full-Length Mock Test Series",
      type: "MOCK",
      badge: "HOT",
      credits: 999,
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
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
      <div className="theme-toggle-container">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle-btn">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

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
        <button className="my-tests-btn">My Tests</button>
      </div>

      {searchQuery && (
        <div className="search-results">
          <h2>Search Results</h2>
          <div className="course-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="card-image">
                  <div className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</div>
                  <img src={course.image || `https://via.placeholder.com/250x150?text=${course.title}`} alt={course.title} />
                </div>
                <div className="card-details">
                  <h3 className="card-title">{highlightText(course.title)}</h3>
                  <ul className="highlight-list">
                    {course.highlights?.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="highlight-item">
                        <span className="highlight-icon">•</span>
                        <span>{highlightText(highlight)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-footer">
                    <div className="credits-container">
                      <span className="credits">₹ {course.credits}</span>
                      <span className="credits-label">credits</span>
                    </div>
                    <div className="button-group">
                      <button className="btn-explore">EXPLORE</button>
                      <button className="btn-buy-now">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="tabs-container">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.label}</span>
            {tab.count > 0 && <span className="count">({tab.count})</span>}
          </div>
        ))}
      </div>

      <div className="filters-container">
        <div className="filter-dropdown">
          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Type</option>
            {filters.type.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="filter-dropdown">
          <select 
            value={modeFilter} 
            onChange={(e) => setModeFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Mode</option>
            {filters.mode.map(mode => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
        </div>

        <button className="filter-button">
          <span>Filters</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 4.5H2M12 8H4M10 11.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Featured Item */}
      <div className="featured-card">
        <div className="featured-content">
          <div className="card-badges">
            <span className="badge popular">POPULAR</span>
          </div>
          <h3 className="card-title">Prayas JEE Test Series</h3>
          <div className="card-credits">
            <span className="current-credits">₹ 2500</span>
            <span className="original-credits">5678</span>
            <span className="discount">56% OFF</span>
          </div>
          <ul className="feature-list">
            {courseData[0].features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="card-button test-pass-btn">Test Pass</button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="course-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="card-image">
              <div className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</div>
              <img src={course.image || `https://via.placeholder.com/250x150?text=${course.title}`} alt={course.title} />
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
                <div className="credits-container">
                  <span className="credits">₹ {course.credits}</span>
                  <span className="credits-label">credits</span>
                </div>
                <div className="button-group">
                  <button className="btn-explore">EXPLORE</button>
                  <button className="btn-buy-now">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="test-series-section">
        <div className="section-header">
          <h2>Prayas JEE/NEET 2025 Test Series</h2>
          <div className="badge hot">HOT</div>
        </div>
        
        <div className="test-series-grid">
          {courseData.slice(3, 6).map(course => (
            <div key={course.id} className="test-series-card">
              <div className="card-image">
                <div className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</div>
                <img src={course.image || `https://via.placeholder.com/250x150?text=${course.title}`} alt={course.title} />
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
                  <div className="credits-container">
                    <span className="credits">₹ {course.credits}</span>
                    <span className="credits-label">credits</span>
                  </div>
                  <div className="button-group">
                    <button className="btn-explore">EXPLORE</button>
                    <button className="btn-buy-now">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentHub;
import React, { useEffect, useState, useRef } from 'react';
import '../styles/Assignments.css';
import { ChevronLeft, ChevronRight, User, BookOpen, FileText, Bell, Calendar, Settings, Star, Clock, Info, Bookmark } from 'lucide-react';

const Assignments = () => {
  // Refs for the slider elements
  const lectureSliderRef = useRef(null);
  const notesSliderRef = useRef(null);
  const answerKeySliderRef = useRef(null);
  const pastPapersSliderRef = useRef(null);
  
  // State to handle active subject
  const [activeSubject, setActiveSubject] = useState('physics');
  
  // State for announcements
  const [announcements, setAnnouncements] = useState([
    "New AI course starting next week!",
    "Register for upcoming Data Science workshop",
    "Cybersecurity webinar on Friday at 6 PM",
    "Last date for Blockchain certification is May 15"
  ]);

  // Marquee/auto-sliding functionality with enhanced control
  useEffect(() => {
    const sliderRefs = [
      { ref: lectureSliderRef, interval: 3000, direction: 'left' },
      { ref: notesSliderRef, interval: 3500, direction: 'left' },
      { ref: answerKeySliderRef, interval: 4000, direction: 'left' },
      { ref: pastPapersSliderRef, interval: 4500, direction: 'left' }
    ];
    
    const intervals = [];
    
    sliderRefs.forEach(({ ref, interval, direction }) => {
      const slider = ref.current;
      
      // No animation when mouse is over the slider
      const pauseAnimation = () => {
        intervals.forEach(clearInterval);
      };
      
      const resumeAnimation = () => {
        intervals.forEach((id, index) => {
          clearInterval(id);
          setupInterval(sliderRefs[index], index);
        });
      };
      
      if (slider) {
        slider.addEventListener('mouseenter', pauseAnimation);
        slider.addEventListener('mouseleave', resumeAnimation);
      }
      
      const setupInterval = ({ ref, interval, direction }, index) => {
        const slider = ref.current;
        if (!slider) return;
        
        intervals[index] = setInterval(() => {
          const scrollAmount = direction === 'right' ? 1 : -1;
          
          // Handle scroll wrap-around
          if (direction === 'left') {
            if (slider.scrollLeft <= 0) {
              // If at the start, jump to end for continuous effect
              slider.scrollLeft = slider.scrollWidth;
            } else {
              slider.scrollLeft += scrollAmount;
            }
          } else {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
              // If at the end, jump to start for continuous effect
              slider.scrollLeft = 0;
            } else {
              slider.scrollLeft += scrollAmount;
            }
          }
        }, 20); // Smoother animation with smaller, more frequent updates
      };
      
      setupInterval({ ref, interval, direction }, intervals.length);
    });
    
    return () => {
      intervals.forEach(clearInterval);
      
      // Clean up event listeners
      sliderRefs.forEach(({ ref }) => {
        const slider = ref.current;
        if (slider) {
          slider.removeEventListener('mouseenter', () => {});
          slider.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);
  
  // Handle manual scrolling
  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const handleSubjectClick = (subject) => {
    setActiveSubject(subject);
  };
  
  // Rotate announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncements(prev => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, first];
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="assignments-container">
      <div className="jee-header">
        <div className="header-left">
          <h1 className="site-title">Live Lectures</h1>
          <div className="announcement-ticker">
            <Bell size={16} className="announcement-icon" />
            <div className="marquee-container">
              <div className="marquee-content">
                {announcements.map((text, index) => (
                  <span key={index} className="announcement-text">{text}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="user-actions">
          <button className="action-button">
            <Calendar size={20} />
          </button>
          <button className="action-button">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <div className="user-profile">
            <User size={24} />
          </div>
        </div>
      </div>
      
      {/* Main Subjects Section */}
      <div className="zone-section main-subjects">
        <h2 className="section-title">Main Subjects</h2>
        <div className="subject-container">
          <div 
            className={`subject-card ${activeSubject === 'physics' ? 'active' : ''}`}
            onClick={() => handleSubjectClick('physics')}
          >
            <div className="subject-icon physics-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="3" fill="#64B5F6" />
                <path d="M12 2L12 22" stroke="#4CAF50" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#FF9800" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Physics</h3>
              <p>Live Lectures</p>
              <div className="subject-stats">
                <span><Clock size={14} /> 32 hours</span>
                <span><Star size={14} /> 4.9</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`subject-card ${activeSubject === 'chemistry' ? 'active' : ''}`}
            onClick={() => handleSubjectClick('chemistry')}
          >
            <div className="subject-icon chemistry-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="8" y="4" width="8" height="16" rx="2" fill="#64B5F6" />
                <circle cx="12" cy="8" r="2" fill="#EF5350" />
                <circle cx="12" cy="16" r="2" fill="#EF5350" />
                <path d="M7 10L17 10" stroke="#4CAF50" strokeWidth="1" />
                <path d="M7 14L17 14" stroke="#4CAF50" strokeWidth="1" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Chemistry</h3>
              <p>JEE ZONE</p>
              <div className="subject-stats">
                <span><Clock size={14} /> 28 hours</span>
                <span><Star size={14} /> 4.7</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`subject-card ${activeSubject === 'mathematics' ? 'active' : ''}`}
            onClick={() => handleSubjectClick('mathematics')}
          >
            <div className="subject-icon math-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M5 12H19" stroke="#EF5350" strokeWidth="2" />
                <path d="M12 5L12 19" stroke="#EF5350" strokeWidth="2" />
                <path d="M6 6L18 18" stroke="#FF9800" strokeWidth="1" />
                <path d="M18 6L6 18" stroke="#FF9800" strokeWidth="1" />
                <path d="M5 16L9 16" stroke="#4CAF50" strokeWidth="1" />
                <path d="M15 16L19 16" stroke="#4CAF50" strokeWidth="1" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Mathematics</h3>
              <p>JEE ZONE</p>
              <div className="subject-stats">
                <span><Clock size={14} /> 36 hours</span>
                <span><Star size={14} /> 4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Domains Section with Marquee */}
      <div className="zone-section domains-section">
        <div className="section-header">
          <h2 className="section-title">Domains</h2>
          <div className="section-actions">
            <button className="view-all-btn">View All</button>
            <div className="slider-controls">
              <button className="slider-button left" onClick={() => scroll(lectureSliderRef, 'left')}>
                <ChevronLeft size={20} />
              </button>
              <button className="slider-button right" onClick={() => scroll(lectureSliderRef, 'right')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
              
        <div className="slider-content marquee-slider" ref={lectureSliderRef}>
          <div className="subject-card enhanced-card">
            <div className="card-badge">Popular</div>
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="5" fill="#E0E0E0" />
                <circle cx="8" cy="8" r="2" fill="#9C27B0" />
                <circle cx="16" cy="8" r="2" fill="#2196F3" />
                <circle cx="16" cy="16" r="2" fill="#FF5722" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Artificial Intelligence</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span className="duration"><Clock size={14} /> 24 hrs</span>
                <span><User size={14} /> 1.2k</span>
              </div>
            </div>
            <button className="card-action-btn enroll-btn">Enroll Now</button>
          </div>
          
          <div className="subject-card enhanced-card">
            <div className="card-badge">New</div>
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="8" y="4" width="8" height="12" rx="2" fill="#64B5F6" />
                <circle cx="12" cy="8" r="2" fill="#EF5350" />
                <circle cx="12" cy="14" r="1" fill="#8BC34A" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Data Science</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 18 hrs</span>
                <span><User size={14} /> 950</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
          
          <div className="subject-card enhanced-card">
            <div className="card-badge">Hot</div>
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M6 10L18 10" stroke="#9C27B0" strokeWidth="2" />
                <path d="M12 4L12 16" stroke="#9C27B0" strokeWidth="2" />
                <circle cx="12" cy="10" r="6" stroke="#FF9800" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Cybersecurity</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 20 hrs</span>
                <span><User size={14} /> 780</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
          
          <div className="subject-card enhanced-card">
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="6" fill="#E0E0E0" />
                <path d="M9 12L15 12" stroke="#4CAF50" strokeWidth="2" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Machine Learning</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 22 hrs</span>
                <span><User size={14} /> 1.5k</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
          
          <div className="subject-card enhanced-card">
            <div className="card-badge">New</div>
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFEB3B" />
                <text x="9" y="15" fontSize="6" fill="#333">1</text>
                <text x="13" y="12" fontSize="6" fill="#333">2</text>
                <text x="11" y="18" fontSize="6" fill="#333">3</text>
              </svg>
            </div>
            <div className="subject-info">
              <h3>Blockchain</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 16 hrs</span>
                <span><User size={14} /> 650</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
          
          <div className="subject-card enhanced-card">
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="6" fill="#E0E0E0" />
                <path d="M9 12L15 12" stroke="#4CAF50" strokeWidth="2" />
                <path d="M12 9L12 15" stroke="#4CAF50" strokeWidth="2" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Cloud Computing</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 14 hrs</span>
                <span><User size={14} /> 820</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
          
          {/* Duplicate cards to create continuous scroll effect */}
          <div className="subject-card enhanced-card">
            <div className="card-badge">Popular</div>
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="5" fill="#E0E0E0" />
                <circle cx="8" cy="8" r="2" fill="#9C27B0" />
                <circle cx="16" cy="8" r="2" fill="#2196F3" />
                <circle cx="16" cy="16" r="2" fill="#FF5722" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Artificial Intelligence</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 24 hrs</span>
                <span><User size={14} /> 1.2k</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
          
          <div className="subject-card enhanced-card">
            <div className="card-badge">New</div>
            <div className="subject-icon domain-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="8" y="4" width="8" height="12" rx="2" fill="#64B5F6" />
                <circle cx="12" cy="8" r="2" fill="#EF5350" />
                <circle cx="12" cy="14" r="1" fill="#8BC34A" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Data Science</h3>
              <p>Free Lectures</p>
              <div className="card-stats">
                <span><Clock size={14} /> 18 hrs</span>
                <span><User size={14} /> 950</span>
              </div>
            </div>
            <button className="card-action-btn">Enroll Now</button>
          </div>
        </div>
      </div>
      
      {/* Notes Section with Marquee */}
      <div className="zone-section notes-section">
        <div className="section-header">
          <h2 className="section-title">Notes</h2>
          <div className="section-actions">
            <button className="view-all-btn">View All</button>
            <div className="slider-controls">
              <button className="slider-button left" onClick={() => scroll(notesSliderRef, 'left')}>
                <ChevronLeft size={20} />
              </button>
              <button className="slider-button right" onClick={() => scroll(notesSliderRef, 'right')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="slider-content marquee-slider" ref={notesSliderRef}>
          <div className="subject-card notes-card enhanced-card">
            <div className="subject-icon">
              <FileText size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Artificial Intelligence</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 45 pages</span>
                <span><User size={14} /> 854 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card notes-card enhanced-card">
            <div className="subject-icon">
              <FileText size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Data Science</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 38 pages</span>
                <span><User size={14} /> 732 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card notes-card enhanced-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                <text x="8" y="14" fontSize="8" fill="#FFFFFF">9</text>
              </svg>
            </div>
            <div className="subject-info">
              <h3>Cybersecurity</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 52 pages</span>
                <span><User size={14} /> 621 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card notes-card enhanced-card">
            <div className="card-badge">New</div>
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                <text x="8" y="14" fontSize="8" fill="#FFFFFF">10</text>
              </svg>
            </div>
            <div className="subject-info">
              <h3>Machine Learning</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 64 pages</span>
                <span><User size={14} /> 945 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card notes-card enhanced-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                <text x="8" y="14" fontSize="8" fill="#FFFFFF">11</text>
              </svg>
            </div>
            <div className="subject-info">
              <h3>Blockchain</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 41 pages</span>
                <span><User size={14} /> 538 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card notes-card enhanced-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                <text x="8" y="14" fontSize="8" fill="#FFFFFF">12</text>
              </svg>
            </div>
            <div className="subject-info">
              <h3>Cloud Computing</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 37 pages</span>
                <span><User size={14} /> 412 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          {/* Duplicate for continuous scroll */}
          <div className="subject-card notes-card enhanced-card">
            <div className="subject-icon">
              <FileText size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Artificial Intelligence</h3>
              <p>Notes</p>
              <div className="download-info">
                <span><Info size={14} /> 45 pages</span>
                <span><User size={14} /> 854 downloads</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
        </div>
      </div>
      
      {/* Answer Key Zone with Marquee */}
      <div className="zone-section answer-key-section">
        <div className="section-header">
          <h2 className="section-title">Answer Key Zone</h2>
          <div className="section-actions">
            <button className="view-all-btn">View All</button>
            <div className="slider-controls">
              <button className="slider-button left" onClick={() => scroll(answerKeySliderRef, 'left')}>
                <ChevronLeft size={20} />
              </button>
              <button className="slider-button right" onClick={() => scroll(answerKeySliderRef, 'right')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="slider-content marquee-slider" ref={answerKeySliderRef}>
          <div className="subject-card answer-key-card enhanced-card">
            <div className="card-badge">Latest</div>
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>JEE MAINS</h3>
              <p>Answer Keys</p>
              <div className="key-info">
                <span><Calendar size={14} /> Apr 12, 2025</span>
                <span><Bookmark size={14} /> Official</span>
              </div>
            </div>
            <button className="view-key-btn">View Key</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>NEET</h3>
              <p>Answer Keys</p>
              <div className="key-info">
                <span><Calendar size={14} /> Apr 5, 2025</span>
                <span><Bookmark size={14} /> Official</span>
              </div>
            </div>
            <button className="view-key-btn">View Key</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>JEE Advance</h3>
              <p>Answer Keys</p>
              <div className="key-info">
                <span><Calendar size={14} /> Mar 28, 2025</span>
                <span><Bookmark size={14} /> Official</span>
              </div>
            </div>
            <button className="view-key-btn">View Key</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Anjaam Test</h3>
              <p>Answer Keys</p>
              <div className="key-info">
                <span><Calendar size={14} /> Mar 15, 2025</span>
                <span><Bookmark size={14} /> Practice</span>
              </div>
            </div>
            <button className="view-key-btn">View Key</button>
          </div>
          
          {/* Duplicate for continuous scroll */}
          <div className="subject-card answer-key-card enhanced-card">
            <div className="card-badge">Latest</div>
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>JEE MAINS</h3>
              <p>Answer Keys</p>
              <div className="key-info">
                <span><Calendar size={14} /> Apr 12, 2025</span>
                <span><Bookmark size={14} /> Official</span>
              </div>
            </div>
            <button className="view-key-btn">View Key</button>
          </div>
        </div>
      </div>
      
      {/* Past Papers Section with Marquee */}
      <div className="zone-section past-papers-section">
        <div className="section-header">
          <h2 className="section-title">Past Papers</h2>
          <div className="section-actions">
            <button className="view-all-btn">View All</button>
            <div className="slider-controls">
              <button className="slider-button left" onClick={() => scroll(pastPapersSliderRef, 'left')}>
                <ChevronLeft size={20} />
              </button>
              <button className="slider-button right" onClick={() => scroll(pastPapersSliderRef, 'right')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="slider-content marquee-slider" ref={pastPapersSliderRef}>
          <div className="subject-card answer-key-card enhanced-card">
            <div className="card-badge">Popular</div>
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Computer Networks</h3>
              <p>Past Papers</p>
              <div className="paper-info">
                <span><Calendar size={14} /> 2024</span>
                <span><User size={14} /> 1.1k views</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Operating Systems</h3>
              <p>Past Papers</p>
              <div className="paper-info">
                <span><Calendar size={14} /> 2024</span>
                <span><User size={14} /> 926 views</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Database Systems</h3>
              <p>Past Papers</p>
              <div className="paper-info">
                <span><Calendar size={14} /> 2024</span>
                <span><User size={14} /> 872 views</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Software Engineering</h3>
              <p>Past Papers</p>
              <div className="paper-info">
                <span><Calendar size={14} /> 2024</span>
                <span><User size={14} /> 758 views</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="subject-card answer-key-card enhanced-card">
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Artificial Intelligence</h3>
              <p>Past Papers</p>
              <div className="paper-info">
                <span><Calendar size={14} /> 2024</span>
                <span><User size={14} /> 1.3k views</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          {/* Duplicate for continuous scroll */}
          <div className="subject-card answer-key-card enhanced-card">
            <div className="card-badge">Popular</div>
            <div className="subject-icon">
              <BookOpen size={30} className="card-icon" />
            </div>
            <div className="subject-info">
              <h3>Computer Networks</h3>
              <p>Past Papers</p>
              <div className="paper-info">
                <span><Calendar size={14} /> 2024</span>
                <span><User size={14} /> 1.1k views</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
        </div>
      </div>
      
      <footer className="footer-container">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Test Series</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Notes</a></li>
            <li><a href="#">Past Papers</a></li>
            <li><a href="#">Answer Keys</a></li>
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Video Tutorials</a></li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@jeeportal.edu">support@jeeportal.edu</a></p>
          <p>Phone: +91 1234567890</p>
          <p>Address: 123 Education Street, Learning City, India</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest courses and resources.</p>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="footer-bottom">
          <p>© 2025 JEE Portal. All rights reserved.</p>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Assignments;

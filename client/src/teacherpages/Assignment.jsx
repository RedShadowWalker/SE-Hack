import React, { useEffect, useState, useRef } from "react";
import "../styles/Assignments.css"; // Ensure this path is correct
import { ChevronLeft, ChevronRight, User, BookOpen, FileText } from "lucide-react";

const Assignments = () => {
  // Refs for the slider elements
  const lectureSliderRef = useRef(null);
  const notesSliderRef = useRef(null);
  const answerKeySliderRef = useRef(null);
  
  // State to handle active subject
  const [activeSubject, setActiveSubject] = useState('physics');
  
  // Auto-sliding functionality
  useEffect(() => {
    const lectureSlider = lectureSliderRef.current;
    const notesSlider = notesSliderRef.current;
    
    let lectureInterval = setInterval(() => {
      if (lectureSlider) {
        if (lectureSlider.scrollLeft + lectureSlider.clientWidth >= lectureSlider.scrollWidth - 20) {
          lectureSlider.scrollLeft = 0;
        } else {
          lectureSlider.scrollLeft += 200;
        }
      }
    }, 3000);
    
    let notesInterval = setInterval(() => {
      if (notesSlider) {
        if (notesSlider.scrollLeft + notesSlider.clientWidth >= notesSlider.scrollWidth - 20) {
          notesSlider.scrollLeft = 0;
        } else {
          notesSlider.scrollLeft += 200;
        }
      }
    }, 3500);
    
    return () => {
      clearInterval(lectureInterval);
      clearInterval(notesInterval);
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
  
  return (
    <div className="assignments-container">
      <div className="jee-header">
        <h1 className="site-title">JEE ZONE</h1>
        <div className="user-profile">
          <User size={24} />
        </div>
      </div>
      
      {/* Main Subjects Section */}
      <div className="zone-section main-subjects">
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
              <p>JEE ZONE</p>
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Free Lectures Section */}
      <div className="zone-section">
        <h2 className="section-title">Free Lectures by Star faculties</h2>
        <div className="slider-container">
          <button className="slider-button left" onClick={() => scroll(lectureSliderRef, 'left')}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="slider-content" ref={lectureSliderRef}>
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <circle cx="12" cy="12" r="5" fill="#E0E0E0" />
                  <circle cx="8" cy="8" r="2" fill="#9C27B0" />
                  <circle cx="16" cy="8" r="2" fill="#2196F3" />
                  <circle cx="16" cy="16" r="2" fill="#FF5722" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>Best of Raman</h3>
                <p>Free Lectures</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="8" y="4" width="8" height="12" rx="2" fill="#64B5F6" />
                  <circle cx="12" cy="8" r="2" fill="#EF5350" />
                  <circle cx="12" cy="14" r="1" fill="#8BC34A" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>Best of Alka</h3>
                <p>Free Lectures</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M6 10L18 10" stroke="#9C27B0" strokeWidth="2" />
                  <path d="M12 4L12 16" stroke="#9C27B0" strokeWidth="2" />
                  <circle cx="12" cy="10" r="6" stroke="#FF9800" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>Best of Pankaj</h3>
                <p>Free Lectures</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <circle cx="12" cy="12" r="6" fill="#E0E0E0" />
                  <path d="M9 12L15 12" stroke="#4CAF50" strokeWidth="2" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>Best of Tanvi</h3>
                <p>Free Lectures</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFEB3B" />
                  <text x="9" y="15" fontSize="6" fill="#333">1</text>
                  <text x="13" y="12" fontSize="6" fill="#333">2</text>
                  <text x="11" y="18" fontSize="6" fill="#333">3</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Best of Arjun</h3>
                <p>Free Lectures</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <circle cx="12" cy="12" r="6" fill="#E0E0E0" />
                  <path d="M9 12L15 12" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M12 9L12 15" stroke="#4CAF50" strokeWidth="2" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>Best of Bhavna</h3>
                <p>Free Lectures</p>
              </div>
            </div>
          </div>
          
          <button className="slider-button right" onClick={() => scroll(lectureSliderRef, 'right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Notes Section */}
      <div className="zone-section">
        <h2 className="section-title">Notes</h2>
        <div className="slider-container">
          <button className="slider-button left" onClick={() => scroll(notesSliderRef, 'left')}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="slider-content" ref={notesSliderRef}>
            <div className="subject-card notes-card">
              <div className="subject-icon">
                <FileText size={30} className="card-icon" />
              </div>
              <div className="subject-info">
                <h3>JEE Toppers</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card notes-card">
              <div className="subject-icon">
                <FileText size={30} className="card-icon" />
              </div>
              <div className="subject-info">
                <h3>NEET Toppers</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card notes-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">9</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 9</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card notes-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">10</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 10</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card notes-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">11</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 11</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card notes-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#1565C0" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">12</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 12</h3>
                <p>Notes</p>
              </div>
            </div>
          </div>
          
          <button className="slider-button right" onClick={() => scroll(notesSliderRef, 'right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Answer Key Zone */}
      <div className="zone-section">
        <h2 className="section-title">Answer Key Zone</h2>
        <div className="slider-container">
          <button className="slider-button left" onClick={() => scroll(answerKeySliderRef, 'left')}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="answer-key-container" ref={answerKeySliderRef}>
            <div className="subject-card answer-key-card">
              <div className="subject-icon">
                <BookOpen size={30} className="card-icon" />
              </div>
              <div className="subject-info">
                <h3>JEE MAINS</h3>
                <p>Answer Keys</p>
              </div>
            </div>
            
            <div className="subject-card answer-key-card">
              <div className="subject-icon">
                <BookOpen size={30} className="card-icon" />
              </div>
              <div className="subject-info">
                <h3>NEET</h3>
                <p>Answer Keys</p>
              </div>
            </div>
            
            <div className="subject-card answer-key-card">
              <div className="subject-icon">
                <BookOpen size={30} className="card-icon" />
              </div>
              <div className="subject-info">
                <h3>JEE Advance</h3>
                <p>Answer Keys</p>
              </div>
            </div>
            
            <div className="subject-card answer-key-card">
              <div className="subject-icon">
                <BookOpen size={30} className="card-icon" />
              </div>
              <div className="subject-info">
                <h3>Anjaam Test</h3>
                <p>Answer Keys</p>
              </div>
            </div>
          </div>
          
          <button className="slider-button right" onClick={() => scroll(answerKeySliderRef, 'right')}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* User avatar at the bottom right */}
      <div className="user-avatar">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#C5CAE9" />
          <circle cx="20" cy="16" r="6" fill="#1565C0" />
          <path d="M10 32C10 26 14 22 20 22C26 22 30 26 30 32" fill="#1565C0" />
          <rect x="14" y="13" width="12" height="2" rx="1" fill="#C5CAE9" />
        </svg>
      </div>
    </div>
  );
};

export default Assignments;
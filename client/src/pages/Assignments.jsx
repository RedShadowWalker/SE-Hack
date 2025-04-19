import React, { useEffect, useState, useRef } from 'react';
import '../styles/Assignments.css';

// Import or define icons (using placeholders for now)
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Assignments = () => {
  // Refs for the slider elements
  const lectureSliderRef = useRef(null);
  const notesSliderRef = useRef(null);
  
  // Auto-sliding functionality
  useEffect(() => {
    const lectureSlider = lectureSliderRef.current;
    const notesSlider = notesSliderRef.current;
    
    let lectureInterval = setInterval(() => {
      if (lectureSlider) {
        if (lectureSlider.scrollLeft + lectureSlider.clientWidth >= lectureSlider.scrollWidth) {
          lectureSlider.scrollLeft = 0;
        } else {
          lectureSlider.scrollLeft += 300;
        }
      }
    }, 3000);
    
    let notesInterval = setInterval(() => {
      if (notesSlider) {
        if (notesSlider.scrollLeft + notesSlider.clientWidth >= notesSlider.scrollWidth) {
          notesSlider.scrollLeft = 0;
        } else {
          notesSlider.scrollLeft += 300;
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
  
  return (
    <div className="assignments-container">
      {/* Main Subjects Section */}
      <div className="zone-section">
        <h2 className="section-title">JEE ZONE</h2>
        <div className="subject-container">
          <div className="subject-card">
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
          
          <div className="subject-card">
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
          
          <div className="subject-card">
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
                <h3>Best of R...</h3>
                <p>Free Lect...</p>
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
                <h3>Best of A...</h3>
                <p>Free Lect...</p>
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
                <h3>Best of P...</h3>
                <p>Free Lect...</p>
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
                <h3>Best of T...</h3>
                <p>Free Lect...</p>
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
                <h3>Best of A...</h3>
                <p>Free Lect...</p>
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
                <h3>Best of B...</h3>
                <p>Free Lect...</p>
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
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="5" y="4" width="14" height="16" rx="1" fill="#FFECB3" />
                  <path d="M8 8L16 8" stroke="#FF9800" strokeWidth="1" />
                  <path d="M8 12L16 12" stroke="#FF9800" strokeWidth="1" />
                  <path d="M8 16L16 16" stroke="#FF9800" strokeWidth="1" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>JEE Toppe...</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="5" y="4" width="14" height="16" rx="1" fill="#FFECB3" />
                  <path d="M8 8L16 8" stroke="#FF9800" strokeWidth="1" />
                  <path d="M8 12L16 12" stroke="#FF9800" strokeWidth="1" />
                  <path d="M8 16L16 16" stroke="#FF9800" strokeWidth="1" />
                </svg>
              </div>
              <div className="subject-info">
                <h3>NEET Topp...</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#2E7D32" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">9</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 9</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#2E7D32" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">10</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 10</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#2E7D32" />
                  <text x="8" y="14" fontSize="8" fill="#FFFFFF">11</text>
                </svg>
              </div>
              <div className="subject-info">
                <h3>Class 11</h3>
                <p>Notes</p>
              </div>
            </div>
            
            <div className="subject-card">
              <div className="subject-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#2E7D32" />
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
        <div className="answer-key-container">
          <div className="subject-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" fill="#2E7D32" stroke="#388E3C" strokeWidth="0.5" />
                <rect x="10" y="9" width="4" height="6" fill="#FFFFFF" />
                <path d="M9 12H15" stroke="#FFFFFF" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>JEE MAINS</h3>
              <p>Answer Ke...</p>
            </div>
          </div>
          
          <div className="subject-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" fill="#FF9800" stroke="#F57C00" strokeWidth="0.5" />
                <rect x="10" y="10" width="4" height="4" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>NEET</h3>
              <p>Answer Ke...</p>
            </div>
          </div>
          
          <div className="subject-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" fill="#64B5F6" stroke="#1E88E5" strokeWidth="0.5" />
                <text x="9" y="14" fontSize="6" fill="#FFFFFF">JEE</text>
              </svg>
            </div>
            <div className="subject-info">
              <h3>JEE Advance</h3>
              <p>Answer Ke...</p>
            </div>
          </div>
          
          <div className="subject-card">
            <div className="subject-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="6" fill="#E0E0E0" />
                <circle cx="9" cy="9" r="2" fill="#9C27B0" />
                <circle cx="15" cy="9" r="2" fill="#2196F3" />
                <circle cx="15" cy="15" r="2" fill="#FF5722" />
              </svg>
            </div>
            <div className="subject-info">
              <h3>Anjaam Te...</h3>
              <p>Answer Ke...</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* User avatar at the bottom right */}
      <div className="user-avatar">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#C5CAE9" />
          <circle cx="20" cy="16" r="6" fill="#3F51B5" />
          <path d="M10 32C10 26 14 22 20 22C26 22 30 26 30 32" fill="#3F51B5" />
          <rect x="14" y="13" width="12" height="2" rx="1" fill="#C5CAE9" />
        </svg>
      </div>
    </div>
  );
};

export default assignments;
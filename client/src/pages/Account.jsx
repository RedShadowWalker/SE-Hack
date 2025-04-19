// src/pages/Account.jsx
import React, { useState } from 'react';
import '../styles/Account.css';
import { Edit, LogOut, ChevronDown, ChevronUp, User, Shield, BookOpen, Settings, FileText, LinkIcon, LifeBuoy, Clock, Moon, Sun } from 'lucide-react';
import { Switch } from '@headlessui/react'; // Ensure to import Switch from the correct library

const Account = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('academic');
  const [openSections, setOpenSections] = useState({
    student: true,
    faculty: true,
    security: true,
    session: true,
    documents: true,
    learning: true,
    settings: true,
    support: true
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode'); // Apply dark-mode class to the root element
  };

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  return (
    <div className={`account-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="account-header">
        <h1 className="section-title">Account Dashboard</h1>
      </div>

      <div className="account-content">
        {/* User Profile Section */}
        <section className="profile-card">
          <div className="card-header">
            <User className="card-icon" />
            <h2>User Profile</h2>
          </div>
          <div className="profile-content">
            <div className="profile-pic-container">
              <img src="/profile-placeholder.png" alt="Profile" className="profile-pic" />
              <div className="edit-overlay">
                <Edit />
              </div>
            </div>
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">John Doe</span>
              </div>
              <div className="info-item">
                <span className="info-label">ID:</span>
                <span className="info-value">123456</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">john@college.edu</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">123-456-7890</span>
              </div>
              <div className="info-item">
                <span className="info-label">Course:</span>
                <span className="info-value">B.Tech CSE</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year/Semester:</span>
                <span className="info-value">2nd Year / 4th Sem</span>
              </div>
            </div>
            <button className="edit-profile-btn">
              <Edit className="btn-icon" />
              Edit Profile
            </button>
          </div>
        </section>

        {/* Main Content Tabs */}
        <div className="tabs-container">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              Academic
            </button>
            <button 
              className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
            <button 
              className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Documents
            </button>
            <button 
              className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>

          <div className="tabs-content">
            {/* Academic Tab */}
            {activeTab === 'academic' && (
              <div className="tab-pane">
                {/* Student Academic Info */}
                <section className="card">
                  <div className="card-header" onClick={() => toggleSection('student')}>
                    <div className="header-left">
                      <BookOpen className="card-icon" />
                      <h2>Academic Info (Student)</h2>
                    </div>
                    <button className="toggle-btn">
                      {openSections.student ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                  {openSections.student && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Enrolled Courses</li>
                        <li className="feature-item">Grades/Transcripts</li>
                        <li className="feature-item">Attendance Records</li>
                        <li className="feature-item">Assignment Submissions</li>
                        <li className="feature-item">Exam Schedule</li>
                        <li className="feature-item">Timetable</li>
                      </ul>
                    </div>
                  )}
                </section>

                {/* Faculty Academic Info */}
                <section className="card">
                  <div className="card-header" onClick={() => toggleSection('faculty')}>
                    <div className="header-left">
                      <BookOpen className="card-icon" />
                      <h2>Academic Info (Faculty)</h2>
                    </div>
                    <button className="toggle-btn">
                      {openSections.faculty ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                  {openSections.faculty && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Courses Taught</li>
                        <li className="feature-item">Class Rosters</li>
                        <li className="feature-item">Assignment/Exam Uploads</li>
                        <li className="feature-item">Grade Submissions</li>
                        <li className="feature-item">Course Material Management</li>
                      </ul>
                    </div>
                  )}
                </section>

                {/* Learning Tools */}
                <section className="card">
                  <div className="card-header" onClick={() => toggleSection('learning')}>
                    <div className="header-left">
                      <LinkIcon className="card-icon" />
                      <h2>Learning Tools Access</h2>
                    </div>
                    <button className="toggle-btn">
                      {openSections.learning ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                  {openSections.learning && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Linked Accounts (GitHub, Classroom)</li>
                        <li className="feature-item">Library Access</li>
                        <li className="feature-item">E-books / Notes</li>
                        <li className="feature-item">Recorded Lectures</li>
                      </ul>
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="tab-pane">
                {/* Account & Security */}
                <section className="card">
                  <div className="card-header" onClick={() => toggleSection('security')}>
                    <div className="header-left">
                      <Shield className="card-icon" />
                      <h2>Account & Security</h2>
                    </div>
                    <button className="toggle-btn">
                      {openSections.security ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                  {openSections.security && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Change Password</li>
                        <li className="feature-item">Connected Devices</li>
                        <li className="feature-item">Linked Accounts</li>
                      </ul>
                    </div>
                  )}
                </section>

                {/* Session & Logout */}
                <section className="card">
                  <div className="header-left">
                    <Clock className="card-icon" />
                    <h2>Session & Logout</h2>
                  </div>
                  {openSections.session && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Active Sessions</li>
                        <li className="feature-item">Logout from All Devices</li>
                      </ul>
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="tab-pane">
                {/* Documents & Certificates */}
                <section className="card">
                  <div className="header-left">
                    <FileText className="card-icon" />
                    <h2>Documents & Certificates</h2>
                  </div>
                  {openSections.documents && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Upload/Download Documents</li>
                        <li className="feature-item">ID Cards, Bonafide Certificates</li>
                        <li className="feature-item">Internship/Placement Letters</li>
                      </ul>
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="tab-pane">
                {/* Settings & Preferences */}
                <section className="card">
                  <div className="header-left">
                    <Settings className="card-icon" />
                    <h2>Settings & Preferences</h2>
                  </div>
                  {openSections.settings && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Notification Preferences</li>
                        <li className="feature-item">Theme (Dark/Light)</li>
                        <li className="feature-item">Language Settings</li>
                      </ul>
                    </div>
                  )}
                </section>

                {/* Support & Feedback */}
                <section className="card">
                  <div className="account-header">
                    <div className="icon-text-group">
                      <User className="h-5 w-5" />
                      <span>User Profile</span>
                    </div>
                    <div className="icon-text-group">
                      <Sun className="h-5 w-5 text-yellow-500" />
                      <span>Light Mode</span>
                      <Switch checked={isDarkMode} onCheckedChange={toggleTheme} className="theme-switch" />
                      <Moon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                      <span>Dark Mode</span>
                    </div>
                  </div>
                  {openSections.support && (
                    <div className="card-content">
                      <ul className="feature-list">
                        <li className="feature-item">Raise a Ticket</li>
                        <li className="feature-item">Contact Support</li>
                        <li className="feature-item">FAQs</li>
                        <li className="feature-item">Feedback Form</li>
                      </ul>
                    </div>
                  )}
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Logout Button */}
      <button className="logout-btn">
        <LogOut className="btn-icon" />
        Logout
      </button>
    </div>
  );
};

export default Account;
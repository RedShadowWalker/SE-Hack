// // src/pages/Account.jsx
// import React, { useState } from 'react';
// import '../styles/Account.css';
// import { Edit, LogOut, ChevronDown, ChevronUp, User, Shield, BookOpen, Settings, FileText, LinkIcon, LifeBuoy, Clock, Moon, Sun } from 'lucide-react';
// import { Switch } from '@headlessui/react'; // Ensure to import Switch from the correct library

// const Account = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeTab, setActiveTab] = useState('academic');
//   const [openSections, setOpenSections] = useState({
//     student: true,
//     faculty: true,
//     security: true,
//     session: true,
//     documents: true,
//     learning: true,
//     settings: true,
//     support: true
//   });

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark-mode'); // Apply dark-mode class to the root element
//   };

//   const toggleSection = (section) => {
//     setOpenSections({
//       ...openSections,
//       [section]: !openSections[section]
//     });
//   };

//   return (
//     <div className={`account-container ${isDarkMode ? 'dark-mode' : ''}`}>
//       <div className="account-header">
//         <h1 className="section-title">Account Dashboard</h1>
//       </div>

//       <div className="account-content">
//         {/* User Profile Section */}
//         <section className="profile-card">
//           <div className="card-header">
//             <User className="card-icon" />
//             <h2>User Profile</h2>
//           </div>
//           <div className="profile-content">
//             <div className="profile-pic-container">
//               <img src="/profile-placeholder.png" alt="Profile" className="profile-pic" />
//               <div className="edit-overlay">
//                 <Edit />
//               </div>
//             </div>
//             <div className="profile-info">
//               <div className="info-item">
//                 <span className="info-label">Name:</span>
//                 <span className="info-value">John Doe</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">ID:</span>
//                 <span className="info-value">123456</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Email:</span>
//                 <span className="info-value">john@college.edu</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Phone:</span>
//                 <span className="info-value">123-456-7890</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Course:</span>
//                 <span className="info-value">B.Tech CSE</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Year/Semester:</span>
//                 <span className="info-value">2nd Year / 4th Sem</span>
//               </div>
//             </div>
//             <button className="edit-profile-btn">
//               <Edit className="btn-icon" />
//               Edit Profile
//             </button>
//           </div>
//         </section>

//         {/* Main Content Tabs */}
//         <div className="tabs-container">
//           <div className="tabs-header">
//             <button 
//               className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
//               onClick={() => setActiveTab('academic')}
//             >
//               Academic
//             </button>
//             <button 
//               className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
//               onClick={() => setActiveTab('security')}
//             >
//               Security
//             </button>
//             <button 
//               className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
//               onClick={() => setActiveTab('documents')}
//             >
//               Documents
//             </button>
//             <button 
//               className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
//               onClick={() => setActiveTab('settings')}
//             >
//               Settings
//             </button>
//           </div>

//           <div className="tabs-content">
//             {/* Academic Tab */}
//             {activeTab === 'academic' && (
//               <div className="tab-pane">
//                 {/* Student Academic Info */}
//                 <section className="card">
//                   <div className="card-header" onClick={() => toggleSection('student')}>
//                     <div className="header-left">
//                       <BookOpen className="card-icon" />
//                       <h2>Academic Info (Student)</h2>
//                     </div>
//                     <button className="toggle-btn">
//                       {openSections.student ? <ChevronUp /> : <ChevronDown />}
//                     </button>
//                   </div>
//                   {openSections.student && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Enrolled Courses</li>
//                         <li className="feature-item">Grades/Transcripts</li>
//                         <li className="feature-item">Attendance Records</li>
//                         <li className="feature-item">Assignment Submissions</li>
//                         <li className="feature-item">Exam Schedule</li>
//                         <li className="feature-item">Timetable</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>

//                 {/* Faculty Academic Info */}
//                 <section className="card">
//                   <div className="card-header" onClick={() => toggleSection('faculty')}>
//                     <div className="header-left">
//                       <BookOpen className="card-icon" />
//                       <h2>Academic Info (Faculty)</h2>
//                     </div>
//                     <button className="toggle-btn">
//                       {openSections.faculty ? <ChevronUp /> : <ChevronDown />}
//                     </button>
//                   </div>
//                   {openSections.faculty && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Courses Taught</li>
//                         <li className="feature-item">Class Rosters</li>
//                         <li className="feature-item">Assignment/Exam Uploads</li>
//                         <li className="feature-item">Grade Submissions</li>
//                         <li className="feature-item">Course Material Management</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>

//                 {/* Learning Tools */}
//                 <section className="card">
//                   <div className="card-header" onClick={() => toggleSection('learning')}>
//                     <div className="header-left">
//                       <LinkIcon className="card-icon" />
//                       <h2>Learning Tools Access</h2>
//                     </div>
//                     <button className="toggle-btn">
//                       {openSections.learning ? <ChevronUp /> : <ChevronDown />}
//                     </button>
//                   </div>
//                   {openSections.learning && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Linked Accounts (GitHub, Classroom)</li>
//                         <li className="feature-item">Library Access</li>
//                         <li className="feature-item">E-books / Notes</li>
//                         <li className="feature-item">Recorded Lectures</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>
//               </div>
//             )}

//             {/* Security Tab */}
//             {activeTab === 'security' && (
//               <div className="tab-pane">
//                 {/* Account & Security */}
//                 <section className="card">
//                   <div className="card-header" onClick={() => toggleSection('security')}>
//                     <div className="header-left">
//                       <Shield className="card-icon" />
//                       <h2>Account & Security</h2>
//                     </div>
//                     <button className="toggle-btn">
//                       {openSections.security ? <ChevronUp /> : <ChevronDown />}
//                     </button>
//                   </div>
//                   {openSections.security && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Change Password</li>
//                         <li className="feature-item">Connected Devices</li>
//                         <li className="feature-item">Linked Accounts</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>

//                 {/* Session & Logout */}
//                 <section className="card">
//                   <div className="header-left">
//                     <Clock className="card-icon" />
//                     <h2>Session & Logout</h2>
//                   </div>
//                   {openSections.session && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Active Sessions</li>
//                         <li className="feature-item">Logout from All Devices</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>
//               </div>
//             )}

//             {/* Documents Tab */}
//             {activeTab === 'documents' && (
//               <div className="tab-pane">
//                 {/* Documents & Certificates */}
//                 <section className="card">
//                   <div className="header-left">
//                     <FileText className="card-icon" />
//                     <h2>Documents & Certificates</h2>
//                   </div>
//                   {openSections.documents && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Upload/Download Documents</li>
//                         <li className="feature-item">ID Cards, Bonafide Certificates</li>
//                         <li className="feature-item">Internship/Placement Letters</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>
//               </div>
//             )}

//             {/* Settings Tab */}
//             {activeTab === 'settings' && (
//               <div className="tab-pane">
//                 {/* Settings & Preferences */}
//                 <section className="card">
//                   <div className="header-left">
//                     <Settings className="card-icon" />
//                     <h2>Settings & Preferences</h2>
//                   </div>
//                   {openSections.settings && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Notification Preferences</li>
//                         <li className="feature-item">Theme (Dark/Light)</li>
//                         <li className="feature-item">Language Settings</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>

//                 {/* Support & Feedback */}
//                 <section className="card">
//                   <div className="account-header">
//                     <div className="icon-text-group">
//                       <User className="h-5 w-5" />
//                       <span>User Profile</span>
//                     </div>
//                     <div className="icon-text-group">
//                       <Sun className="h-5 w-5 text-yellow-500" />
//                       <span>Light Mode</span>
//                       <Switch checked={isDarkMode} onCheckedChange={toggleTheme} className="theme-switch" />
//                       <Moon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
//                       <span>Dark Mode</span>
//                     </div>
//                   </div>
//                   {openSections.support && (
//                     <div className="card-content">
//                       <ul className="feature-list">
//                         <li className="feature-item">Raise a Ticket</li>
//                         <li className="feature-item">Contact Support</li>
//                         <li className="feature-item">FAQs</li>
//                         <li className="feature-item">Feedback Form</li>
//                       </ul>
//                     </div>
//                   )}
//                 </section>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Logout Button */}
//       <button className="logout-btn">
//         <LogOut className="btn-icon" />
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Account;

// src/pages/Account.jsx
import React, { useState, useEffect } from 'react';
import { 
  Edit, LogOut, ChevronDown, ChevronUp, User, Shield, 
  BookOpen, Settings, FileText, LinkIcon, LifeBuoy, 
  Clock, Moon, Sun, Bell, Menu, X, Home, Calendar
} from 'lucide-react';
import '../styles/Account.css';

const Account = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('academic');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    student: true,
    faculty: false,
    security: true,
    session: true,
    documents: true,
    learning: false,
    settings: false,
    support: false
  });

  useEffect(() => {
    // Check for user's preferred theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-left">
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="site-title">EduPortal</h1>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <div className="user-avatar">
            <img src="/profile-placeholder.png" alt="Profile" />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="dashboard-layout">
        {/* Sidebar Navigation */}
        <aside className={`sidebar ${mobileMenuOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-user">
            <img src="/profile-placeholder.png" alt="Profile" className="sidebar-avatar" />
            <div className="sidebar-user-info">
              <h3>John Doe</h3>
              <span className="user-role">Student</span>
            </div>
          </div>
          
          <div className="sidebar-menu">
            <a href="#" className="sidebar-link active">
              <Home size={18} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="sidebar-link">
              <BookOpen size={18} />
              <span>Courses</span>
            </a>
            <a href="#" className="sidebar-link">
              <Calendar size={18} />
              <span>Schedule</span>
            </a>
            <a href="#" className="sidebar-link">
              <FileText size={18} />
              <span>Documents</span>
            </a>
            <a href="#" className="sidebar-link">
              <Settings size={18} />
              <span>Settings</span>
            </a>
            <a href="#" className="sidebar-link logout">
              <LogOut size={18} />
              <span>Logout</span>
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="page-header">
            <h1>Account Dashboard</h1>
            <div className="breadcrumb">
              <span>Home</span> / <span>Account</span>
            </div>
          </div>

          {/* User Profile Card */}
          <section className="profile-card">
            <div className="profile-card-header">
              <h2>User Profile</h2>
              <button className="edit-profile-btn">
                <Edit size={16} />
                <span>Edit</span>
              </button>
            </div>

            <div className="profile-card-content">
              <div className="profile-photo-container">
                <img src="/profile-placeholder.png" alt="Profile" className="profile-photo" />
                <button className="change-photo-btn">
                  <Edit size={16} />
                </button>
              </div>
              
              <div className="profile-details">
                <div className="profile-detail-row">
                  <div className="detail-item">
                    <label>Full Name</label>
                    <p>John Doe</p>
                  </div>
                  <div className="detail-item">
                    <label>Student ID</label>
                    <p>123456</p>
                  </div>
                </div>
                
                <div className="profile-detail-row">
                  <div className="detail-item">
                    <label>Email Address</label>
                    <p>john@college.edu</p>
                  </div>
                  <div className="detail-item">
                    <label>Phone Number</label>
                    <p>123-456-7890</p>
                  </div>
                </div>
                
                <div className="profile-detail-row">
                  <div className="detail-item">
                    <label>Program</label>
                    <p>B.Tech Computer Science</p>
                  </div>
                  <div className="detail-item">
                    <label>Year/Semester</label>
                    <p>2nd Year / 4th Semester</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
                onClick={() => setActiveTab('academic')}
              >
                <BookOpen size={18} />
                <span>Academic</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <Shield size={18} />
                <span>Security</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
                onClick={() => setActiveTab('documents')}
              >
                <FileText size={18} />
                <span>Documents</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings size={18} />
                <span>Settings</span>
              </button>
            </div>

            <div className="tab-content">
              {/* Academic Tab Content */}
              {activeTab === 'academic' && (
                <div className="tab-pane">
                  {/* Quick Stats */}
                  <div className="stats-cards">
                    <div className="stat-card">
                      <h3>Current GPA</h3>
                      <p className="stat-value">3.8</p>
                    </div>
                    <div className="stat-card">
                      <h3>Courses</h3>
                      <p className="stat-value">6</p>
                    </div>
                    <div className="stat-card">
                      <h3>Attendance</h3>
                      <p className="stat-value">92%</p>
                    </div>
                    <div className="stat-card">
                      <h3>Assignments</h3>
                      <p className="stat-value">4 Due</p>
                    </div>
                  </div>

                  {/* Student Academic Info */}
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('student')}>
                      <div className="header-left">
                        <BookOpen size={18} />
                        <h3>Academic Info (Student)</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.student ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.student && (
                      <div className="expandable-content">
                        <div className="grid-menu">
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <BookOpen size={24} />
                            </div>
                            <span>Enrolled Courses</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <FileText size={24} />
                            </div>
                            <span>Grades/Transcripts</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <Calendar size={24} />
                            </div>
                            <span>Attendance Records</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <FileText size={24} />
                            </div>
                            <span>Assignment Submissions</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <Calendar size={24} />
                            </div>
                            <span>Exam Schedule</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <Clock size={24} />
                            </div>
                            <span>Timetable</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Faculty Academic Info */}
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('faculty')}>
                      <div className="header-left">
                        <User size={18} />
                        <h3>Academic Info (Faculty)</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.faculty ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.faculty && (
                      <div className="expandable-content">
                        <div className="grid-menu">
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <BookOpen size={24} />
                            </div>
                            <span>Courses Taught</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <User size={24} />
                            </div>
                            <span>Class Rosters</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <FileText size={24} />
                            </div>
                            <span>Assignment/Exam Uploads</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <FileText size={24} />
                            </div>
                            <span>Grade Submissions</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <BookOpen size={24} />
                            </div>
                            <span>Course Material Management</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Learning Tools */}
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('learning')}>
                      <div className="header-left">
                        <LinkIcon size={18} />
                        <h3>Learning Tools Access</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.learning ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.learning && (
                      <div className="expandable-content">
                        <div className="grid-menu">
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <LinkIcon size={24} />
                            </div>
                            <span>Linked Accounts</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <BookOpen size={24} />
                            </div>
                            <span>Library Access</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <FileText size={24} />
                            </div>
                            <span>E-books / Notes</span>
                          </div>
                          <div className="grid-menu-item">
                            <div className="menu-item-icon">
                              <Video size={24} />
                            </div>
                            <span>Recorded Lectures</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Security Tab Content */}
              {activeTab === 'security' && (
                <div className="tab-pane">
                  {/* Security Stats */}
                  <div className="stats-cards">
                    <div className="stat-card">
                      <h3>Password Last Changed</h3>
                      <p className="stat-value">45 days ago</p>
                    </div>
                    <div className="stat-card">
                      <h3>Active Sessions</h3>
                      <p className="stat-value">2</p>
                    </div>
                    <div className="stat-card">
                      <h3>Connected Apps</h3>
                      <p className="stat-value">3</p>
                    </div>
                    <div className="stat-card">
                      <h3>Security Status</h3>
                      <p className="stat-value secure">Good</p>
                    </div>
                  </div>

                  {/* Account & Security */}
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('security')}>
                      <div className="header-left">
                        <Shield size={18} />
                        <h3>Account & Security</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.security ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.security && (
                      <div className="expandable-content">
                        <div className="security-options">
                          <div className="security-option">
                            <div className="option-details">
                              <h4>Password</h4>
                              <p>Change your account password</p>
                            </div>
                            <button className="action-btn">Change</button>
                          </div>
                          
                          <div className="security-option">
                            <div className="option-details">
                              <h4>Two-Factor Authentication</h4>
                              <p>Add an extra layer of security</p>
                            </div>
                            <div className="toggle-switch">
                              <input type="checkbox" id="twoFactor" />
                              <label htmlFor="twoFactor"></label>
                            </div>
                          </div>
                          
                          <div className="security-option">
                            <div className="option-details">
                              <h4>Connected Devices</h4>
                              <p>Manage devices logged into your account</p>
                            </div>
                            <button className="action-btn">View</button>
                          </div>
                          
                          <div className="security-option">
                            <div className="option-details">
                              <h4>Linked Accounts</h4>
                              <p>Manage linked external accounts</p>
                            </div>
                            <button className="action-btn">Manage</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Session Management */}
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('session')}>
                      <div className="header-left">
                        <Clock size={18} />
                        <h3>Session Management</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.session ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.session && (
                      <div className="expandable-content">
                        <div className="active-sessions">
                          <div className="session-item">
                            <div className="session-info">
                              <h4>Current Session</h4>
                              <p>Windows 10 · Chrome · New York</p>
                              <span className="active-badge">Active Now</span>
                            </div>
                          </div>
                          
                          <div className="session-item">
                            <div className="session-info">
                              <h4>Mobile App</h4>
                              <p>iOS 16 · iPhone · Last active 2 hours ago</p>
                            </div>
                            <button className="terminate-btn">Terminate</button>
                          </div>
                          
                          <button className="danger-btn">Logout from All Devices</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Documents Tab Content */}
              {activeTab === 'documents' && (
                <div className="tab-pane">
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('documents')}>
                      <div className="header-left">
                        <FileText size={18} />
                        <h3>Documents & Certificates</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.documents ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.documents && (
                      <div className="expandable-content">
                        <div className="documents-area">
                          <div className="upload-area">
                            <div className="upload-box">
                              <FileText size={36} />
                              <p>Drag & drop files here or</p>
                              <button className="upload-btn">Browse Files</button>
                            </div>
                          </div>
                          
                          <div className="document-list">
                            <h4>Recent Documents</h4>
                            
                            <div className="document-item">
                              <div className="document-icon">
                                <FileText size={24} />
                              </div>
                              <div className="document-info">
                                <h5>Student ID Card</h5>
                                <p>Uploaded 3 months ago</p>
                              </div>
                              <div className="document-actions">
                                <button className="icon-btn download">
                                  <Download size={18} />
                                </button>
                                <button className="icon-btn view">
                                  <Eye size={18} />
                                </button>
                              </div>
                            </div>
                            
                            <div className="document-item">
                              <div className="document-icon">
                                <FileText size={24} />
                              </div>
                              <div className="document-info">
                                <h5>Bonafide Certificate</h5>
                                <p>Uploaded 2 weeks ago</p>
                              </div>
                              <div className="document-actions">
                                <button className="icon-btn download">
                                  <Download size={18} />
                                </button>
                                <button className="icon-btn view">
                                  <Eye size={18} />
                                </button>
                              </div>
                            </div>
                            
                            <div className="document-item">
                              <div className="document-icon">
                                <FileText size={24} />
                              </div>
                              <div className="document-info">
                                <h5>Internship Certificate</h5>
                                <p>Uploaded 1 month ago</p>
                              </div>
                              <div className="document-actions">
                                <button className="icon-btn download">
                                  <Download size={18} />
                                </button>
                                <button className="icon-btn view">
                                  <Eye size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Settings Tab Content */}
              {activeTab === 'settings' && (
                <div className="tab-pane">
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('settings')}>
                      <div className="header-left">
                        <Settings size={18} />
                        <h3>Preferences</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.settings ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.settings && (
                      <div className="expandable-content">
                        <div className="settings-grid">
                          <div className="setting-item">
                            <div className="setting-label">
                              <h4>Theme</h4>
                              <p>Choose your preferred theme</p>
                            </div>
                            <div className="theme-selector">
                              <button className={`theme-option light ${!isDarkMode ? 'active' : ''}`} onClick={() => setIsDarkMode(false)}>
                                <Sun size={18} />
                                <span>Light</span>
                              </button>
                              <button className={`theme-option dark ${isDarkMode ? 'active' : ''}`} onClick={() => setIsDarkMode(true)}>
                                <Moon size={18} />
                                <span>Dark</span>
                              </button>
                            </div>
                          </div>
                          
                          <div className="setting-item">
                            <div className="setting-label">
                              <h4>Notifications</h4>
                              <p>Manage your notification preferences</p>
                            </div>
                            <div className="notification-options">
                              <div className="notification-option">
                                <label>Email Notifications</label>
                                <div className="toggle-switch">
                                  <input type="checkbox" id="emailNotif" defaultChecked />
                                  <label htmlFor="emailNotif"></label>
                                </div>
                              </div>
                              <div className="notification-option">
                                <label>SMS Notifications</label>
                                <div className="toggle-switch">
                                  <input type="checkbox" id="smsNotif" />
                                  <label htmlFor="smsNotif"></label>
                                </div>
                              </div>
                              <div className="notification-option">
                                <label>System Notifications</label>
                                <div className="toggle-switch">
                                  <input type="checkbox" id="sysNotif" defaultChecked />
                                  <label htmlFor="sysNotif"></label>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="setting-item">
                            <div className="setting-label">
                              <h4>Language</h4>
                              <p>Choose your preferred language</p>
                            </div>
                            <div className="language-selector">
                              <select defaultValue="en">
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                                <option value="hi">हिन्दी</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Support & Help */}
                  <div className="expandable-card">
                    <div className="expandable-header" onClick={() => toggleSection('support')}>
                      <div className="header-left">
                        <LifeBuoy size={18} />
                        <h3>Support & Help</h3>
                      </div>
                      <button className="toggle-btn">
                        {openSections.support ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    
                    {openSections.support && (
                      <div className="expandable-content">
                        <div className="support-options">
                          <div className="support-option">
                            <LifeBuoy size={24} />
                            <div className="option-text">
                              <h4>Help Center</h4>
                              <p>Find answers to common questions</p>
                            </div>
                            <button className="option-btn">Visit</button>
                          </div>
                          
                          <div className="support-option">
                            <MessageCircle size={24} />
                            <div className="option-text">
                              <h4>Contact Support</h4>
                              <p>Get in touch with our support team</p>
                            </div>
                            <button className="option-btn">Contact</button>
                          </div>
                          
                          <div className="support-option">
                            <PenTool size={24} />
                            <div className="option-text">
                              <h4>Feedback</h4>
                              <p>Share your thoughts and suggestions</p>
                            </div>
                            <button className="option-btn">Feedback</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;
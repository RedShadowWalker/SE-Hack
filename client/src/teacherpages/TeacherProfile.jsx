import React, { useState } from 'react';
import '../teacherstyles/TeacherProfile.css';

const TeacherProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    department: 'Computer Science',
    designation: 'Associate Professor',
    phone: '+1 234-567-8900',
    bio: 'Experienced educator specializing in web technologies and database systems.',
    avatar: '/default-avatar.png'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(profileData);

  const handleSave = (e) => {
    e.preventDefault();
    setProfileData(editedData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Settings</h1>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="avatar-section">
            <img src={profileData.avatar} alt="Profile" className="profile-avatar" />
            {isEditing && (
              <button className="change-avatar-btn">Change Photo</button>
            )}
          </div>
          <div className="quick-stats">
            <div className="stat-item">
              <h4>Courses</h4>
              <p>8 Active</p>
            </div>
            <div className="stat-item">
              <h4>Students</h4>
              <p>156 Total</p>
            </div>
            <div className="stat-item">
              <h4>Experience</h4>
              <p>8 Years</p>
            </div>
          </div>
        </div>

        <div className="profile-main">
          {!isEditing ? (
            <div className="profile-details">
              <div className="detail-group">
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> {profileData.name}</p>
                <p><strong>Email:</strong> {profileData.email}</p>
                <p><strong>Phone:</strong> {profileData.phone}</p>
              </div>
              <div className="detail-group">
                <h3>Professional Information</h3>
                <p><strong>Department:</strong> {profileData.department}</p>
                <p><strong>Designation:</strong> {profileData.designation}</p>
              </div>
              <div className="detail-group">
                <h3>Bio</h3>
                <p>{profileData.bio}</p>
              </div>
              <button 
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form className="edit-profile-form" onSubmit={handleSave}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={editedData.name}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    name: e.target.value
                  })}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editedData.email}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    email: e.target.value
                  })}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={editedData.phone}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    phone: e.target.value
                  })}
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  value={editedData.department}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    department: e.target.value
                  })}
                />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  value={editedData.designation}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    designation: e.target.value
                  })}
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  value={editedData.bio}
                  onChange={(e) => setEditedData({
                    ...editedData,
                    bio: e.target.value
                  })}
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Save Changes</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => {
                    setEditedData(profileData);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
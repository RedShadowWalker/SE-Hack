import React, { useState } from "react";
import "../teacherstyles/StudyMaterial.css";

const StudyMaterial = () => {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Introduction to Web Development",
      type: "PDF",
      course: "Web Development",
      uploadDate: "2024-01-15",
      downloads: 25,
    },
    {
      id: 2,
      title: "Database Design Fundamentals",
      type: "Video",
      course: "Database Management",
      uploadDate: "2024-01-16",
      downloads: 18,
    },
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    title: "",
    course: "",
    type: "PDF",
    file: null,
  });

  const handleUpload = (e) => {
    e.preventDefault();
    // Upload logic here
    setShowUploadForm(false);
  };

  return (
    <div className="study-material-container">
      <div className="material-header">
        <h1>Study Materials</h1>
        <button className="upload-btn" onClick={() => setShowUploadForm(true)}>
          Upload Material
        </button>
      </div>

      <div className="material-filters">
        <select defaultValue="">
          <option value="">All Courses</option>
          <option value="web">Web Development</option>
          <option value="db">Database Management</option>
        </select>
        <select defaultValue="">
          <option value="">All Types</option>
          <option value="pdf">PDF</option>
          <option value="video">Video</option>
          <option value="doc">Document</option>
        </select>
      </div>

      <div className="materials-list">
        {materials.map((material) => (
          <div key={material.id} className="material-card">
            <div className="material-icon">
              {material.type === "PDF" ? "📄" : "🎥"}
            </div>
            <div className="material-info">
              <h3>{material.title}</h3>
              <p>Course: {material.course}</p>
              <p>Uploaded: {material.uploadDate}</p>
              <p>Downloads: {material.downloads}</p>
            </div>
            <div className="material-actions">
              <button className="preview-btn">Preview</button>
              <button className="download-btn">Download</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showUploadForm && (
        <div className="modal-overlay">
          <div className="upload-modal">
            <h2>Upload Study Material</h2>
            <form onSubmit={handleUpload}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newMaterial.title}
                  onChange={(e) =>
                    setNewMaterial({
                      ...newMaterial,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Course</label>
                <select
                  value={newMaterial.course}
                  onChange={(e) =>
                    setNewMaterial({
                      ...newMaterial,
                      course: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select Course</option>
                  <option value="web">Web Development</option>
                  <option value="db">Database Management</option>
                </select>
              </div>
              <div className="form-group">
                <label>Material Type</label>
                <select
                  value={newMaterial.type}
                  onChange={(e) =>
                    setNewMaterial({
                      ...newMaterial,
                      type: e.target.value,
                    })
                  }
                >
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="Document">Document</option>
                </select>
              </div>
              <div className="form-group">
                <label>File</label>
                <input
                  type="file"
                  onChange={(e) =>
                    setNewMaterial({
                      ...newMaterial,
                      file: e.target.files[0],
                    })
                  }
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Upload
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyMaterial;

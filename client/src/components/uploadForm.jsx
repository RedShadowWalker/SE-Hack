// src/components/UploadForm.jsx
import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");

  const handleSelect = e => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleUpload = async () => {
    if (!file) return;
    setStatus("Uploading...");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });
      const { url } = await res.json();
      setPreview(url);
      setStatus("Upload successful!");
    } catch (err) {
      console.error(err);
      setStatus("Upload failed");
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleSelect} />
      {file && <button onClick={handleUpload}>Upload</button>}
      {status && <p>{status}</p>}
      {preview && <img src={preview} alt="preview" style={{maxWidth: 200}} />}
    </div>
  );
}

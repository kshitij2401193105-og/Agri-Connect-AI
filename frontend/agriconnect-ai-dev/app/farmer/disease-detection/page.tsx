"use client";

import { useState } from "react";

export default function DiseaseDetection() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const uploadImage = async () => {
    if (!file) {
      alert("Select image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (e) {
      alert("Backend not running");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        🦠 Disease Detection
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const f = e.target.files?.[0] || null;
          setFile(f);
          if (f) setPreview(URL.createObjectURL(f));
        }}
        className="w-full p-3 rounded bg-black text-white"
      />

      {preview && (
        <img
          src={preview}
          className="mt-4 rounded-lg shadow max-h-64 object-cover"
        />
      )}

      <button
        onClick={uploadImage}
        className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Analyze Crop Image
      </button>

      {result && (
        <div className="mt-4 bg-green-100 p-4 rounded-lg">
          <p>🌿 Disease: {result.disease}</p>
          <p>📊 Confidence: {result.confidence}</p>
          {result.guidance && (
            <p className="mt-2 text-sm text-green-900">
              🧠 Guidance: {result.guidance}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
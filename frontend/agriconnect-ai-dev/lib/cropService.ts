export const saveCrop = async (cropData: any) => {
  console.log("Saving crop:", cropData);
  // Later → Firestore addDoc()
};
const API = "http://127.0.0.1:8000";

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API}/upload-image`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};
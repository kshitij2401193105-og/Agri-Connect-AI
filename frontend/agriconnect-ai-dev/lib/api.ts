const BASE_URL = "http://127.0.0.1:8000";

export const uploadCropImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};
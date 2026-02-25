export const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://agri-connect-ai.onrender.com";

export const uploadCropImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/upload-image`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};
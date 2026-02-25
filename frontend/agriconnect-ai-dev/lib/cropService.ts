import { BASE_URL } from "@/lib/api";

export const saveCrop = async (cropData: any) => {
  console.log("Saving crop:", cropData);
  // Later → Firestore addDoc()
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/upload-image`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};
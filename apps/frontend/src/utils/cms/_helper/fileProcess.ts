import { sanityClient } from "./sanity";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fileProcess = async (fileReference: any) => {
  try {
    const fileAsset = await sanityClient.getDocument(fileReference);
    return fileAsset?.url || "";
  } catch (error) {
    console.error("Error opening PDF:", error);
    return "";
  }
};

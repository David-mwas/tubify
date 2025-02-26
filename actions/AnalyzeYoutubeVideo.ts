"use server";

import { redirect } from "next/navigation";

export async function analyzeYoutubeVieo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = "abc"; //TODO
  if (!videoId) return;

  redirect(`/video/${videoId}/analysis`);
}

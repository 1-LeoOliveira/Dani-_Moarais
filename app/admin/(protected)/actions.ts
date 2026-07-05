"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { addShow, updateShow, deleteShow } from "@/lib/agenda-store";
import { saveStats } from "@/lib/stats-store";
import { COOKIE_NAME } from "@/lib/admin-auth";
import { WHATSAPP_LINK } from "@/lib/constants";

function readNumber(formData: FormData, key: string): number {
  const value = Number(formData.get(key));
  return Number.isFinite(value) ? value : 0;
}

function readShowFields(formData: FormData) {
  return {
    day: String(formData.get("day") ?? "").trim(),
    month: String(formData.get("month") ?? "").trim(),
    tour: String(formData.get("tour") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    detailsUrl: String(formData.get("detailsUrl") ?? "").trim() || WHATSAPP_LINK,
  };
}

export async function addShowAction(formData: FormData) {
  await addShow(readShowFields(formData));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateShowAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  await updateShow(id, readShowFields(formData));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteShowAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  await deleteShow(id);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateStatsAction(formData: FormData) {
  await saveStats({
    instagramFollowers: readNumber(formData, "instagramFollowers"),
    facebookFollowers: readNumber(formData, "facebookFollowers"),
    youtubeVideos: readNumber(formData, "youtubeVideos"),
    yearsOfCareer: readNumber(formData, "yearsOfCareer"),
  });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin/login");
}

"use server";

import { cookies } from "next/headers";

export async function getGaCookies() {
  return cookies().get("ga_approved");
};
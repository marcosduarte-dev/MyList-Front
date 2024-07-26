"use server";

import { StatusModel } from "@/types";

export async function getStatus() {
  try {
    const response = await fetch(`${process.env.API_URL}/status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return [];
  }
}

export async function createStatus(data: StatusModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return {};
  }
}

export async function editStatus(data: StatusModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/status/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return {};
  }
}

export async function deleteStatus(id: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/status/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return {};
  }
}

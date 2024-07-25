"use server";

import { TiposModel } from "@/types";

export async function getTipos() {
  try {
    const response = await fetch(`${process.env.API_URL}/tipos`, {
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

export async function createTipos(data: TiposModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/tipos`, {
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

export async function editTipos(data: TiposModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/tipos/${data.id}`, {
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

export async function deleteTipos(id: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/tipos/${id}`, {
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

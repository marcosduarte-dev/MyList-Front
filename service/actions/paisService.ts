"use server";

import { PaisModel } from "@/types";

export async function getPais() {
  try {
    const response = await fetch(`${process.env.API_URL}/pais`, {
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

export async function createPais(data: PaisModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/pais`, {
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

export async function editPais(data: PaisModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/pais/${data.id}`, {
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

export async function deletePais(id: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/pais/${id}`, {
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

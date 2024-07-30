"use server";

import { RegistroModel } from "@/types";

export async function getRegistros() {
  try {
    const response = await fetch(`${process.env.API_URL}/registros`, {
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

export async function createRegistros(data: RegistroModel) {
  try {
    const response = await fetch(`${process.env.API_URL}/registros`, {
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

export async function editRegistros(data: RegistroModel) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/registros/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    return {};
  }
}

export async function deleteRegistros(id: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/registros/${id}`, {
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

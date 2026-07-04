"use server"

import { z } from "zod"

const SubscribeSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address. Please try again."),
})

const API_URL = "https://6a48a3daa033dcb98d64ba5e.mockapi.io/nova/subcribe"

export async function subscribeEmail(prevState: { success: boolean; message: string } | null, formData: FormData) {
  const email = formData.get("email")

  const parsed = SubscribeSchema.safeParse({ email })

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0].message,
    }
  }

  try {
    // Check if email already exists
    const checkRes = await fetch(`${API_URL}?email=${parsed.data.email}`)
    if (checkRes.ok) {
      const existingUsers = await checkRes.json()
      if (Array.isArray(existingUsers) && existingUsers.length > 0) {
        // Also check exact match to be safe against partial search
        const exactMatch = existingUsers.some(
          (u) => u.email.toLowerCase() === parsed.data.email.toLowerCase()
        )
        if (exactMatch) {
          return {
            success: false,
            message: "This email is already subscribed!",
          }
        }
      }
    }

    // Add new subscriber
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: parsed.data.email,
        createdAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      throw new Error("Failed to subscribe")
    }

    return {
      success: true,
      message: "🎉 Thank you! We will notify you as soon as Nova launches.",
    }
  } catch (error) {
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}

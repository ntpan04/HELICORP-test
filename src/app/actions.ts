"use server"

import { z } from "zod"
import { promises as fs } from "fs"
import path from "path"

const SubscribeSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống.")
    .email("Địa chỉ email không hợp lệ. Vui lòng kiểm tra lại."),
})

const DB_PATH = path.join(process.cwd(), "data", "subscribers.json")

async function readSubscribers(): Promise<{ subscribers: { email: string; createdAt: string }[] }> {
  try {
    const content = await fs.readFile(DB_PATH, "utf-8")
    return JSON.parse(content)
  } catch {
    return { subscribers: [] }
  }
}

async function writeSubscribers(data: { subscribers: { email: string; createdAt: string }[] }) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8")
}

export async function subscribeEmail(prevState: { success: boolean; message: string } | null, formData: FormData) {
  const email = formData.get("email")

  const parsed = SubscribeSchema.safeParse({ email })

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0].message,
    }
  }

  const db = await readSubscribers()

  const alreadyExists = db.subscribers.some(
    (s) => s.email.toLowerCase() === parsed.data.email.toLowerCase()
  )

  if (alreadyExists) {
    return {
      success: false,
      message: "Email này đã được đăng ký trước đó rồi!",
    }
  }

  db.subscribers.push({
    email: parsed.data.email,
    createdAt: new Date().toISOString(),
  })

  await writeSubscribers(db)

  // Optional: Forward to a real webhook
  // await fetch("https://your-webhook-url.com", {
  //   method: "POST",
  //   body: JSON.stringify({ email: parsed.data.email }),
  //   headers: { "Content-Type": "application/json" },
  // })

  return {
    success: true,
    message: "🎉 Cảm ơn bạn! Chúng tôi sẽ thông báo sớm nhất khi Nova ra mắt.",
  }
}

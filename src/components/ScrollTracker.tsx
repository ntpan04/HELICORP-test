"use client"

import { useEffect, useRef } from "react"
import { toast } from "sonner"

const MILESTONES: Record<number, { shown: boolean; message: string; description: string }> = {
  30: { shown: false, message: "🔊 Nghe hay không?", description: "Nova xử lý âm thanh với AI thực thụ — không phải chỉ là loa thông thường." },
  60: { shown: false, message: "💡 Bạn đang khám phá Nova...", description: "Đừng quên đăng ký để nhận ưu đãi ra mắt sớm nhất nhé!" },
  90: { shown: false, message: "🎉 Bạn đã xem gần hết trang!", description: "Đăng ký ngay để trở thành người đầu tiên sở hữu Nova." },
}

export function ScrollTracker() {
  const milestonesRef = useRef({ ...MILESTONES })

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = Math.round((scrollTop / docHeight) * 100)

          const milestones = milestonesRef.current
          for (const key of Object.keys(milestones) as unknown as number[]) {
            const milestone = milestones[key]
            if (scrollPercent >= key && !milestone.shown) {
              milestone.shown = true
              toast(milestone.message, {
                description: milestone.description,
                duration: 4000,
              })
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}

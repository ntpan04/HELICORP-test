import { Metadata } from "next"
import { Mail, Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Subscribers",
}

const API_URL = "https://6a48a3daa033dcb98d64ba5e.mockapi.io/nova/subcribe"

interface Subscriber {
  id: string
  email: string
  createdAt: string
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const res = await fetch(API_URL, { cache: "no-store" })
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

export default async function SubscribersPage() {
  const subscribers = await getSubscribers()

  // Sort by created at, descending
  const sortedSubscribers = Array.isArray(subscribers) 
    ? [...subscribers].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    : []

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Subscribers</h1>
          <p className="text-muted-foreground mt-2">
            List of users subscribed to notifications. Total: {sortedSubscribers.length} users.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          {sortedSubscribers.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No one has subscribed yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border text-sm">
                    <th className="p-4 font-medium text-muted-foreground">ID</th>
                    <th className="p-4 font-medium text-muted-foreground">Email</th>
                    <th className="p-4 font-medium text-muted-foreground">Subscription Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sortedSubscribers.map((sub) => {
                    const date = new Date(sub.createdAt)
                    return (
                      <tr key={sub.id} className="hover:bg-muted/20 transition-colors">
                        <td className="p-4 text-sm font-mono text-muted-foreground">
                          {sub.id}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">{sub.email}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {date.toLocaleDateString("en-US")}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

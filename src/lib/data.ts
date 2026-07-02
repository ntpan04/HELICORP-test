import { Mic, Home, VolumeX, Sparkles } from "lucide-react"

export const productData = {
  name: "Nova AI Speaker",
  tagline: "The Future of Sound and Intelligence",
  description: "Experience unparalleled audio quality combined with next-generation AI. Nova adapts to your lifestyle, understands your needs, and controls your entire home with just your voice.",
  features: [
    {
      title: "Voice Assistant",
      description: "Advanced natural language processing for seamless conversations and task management.",
      iconName: "Mic"
    },
    {
      title: "Smart Home Control",
      description: "Instantly connect and command all your IoT devices from a central, intelligent hub.",
      iconName: "Home"
    },
    {
      title: "Noise Cancellation",
      description: "Active ambient noise reduction ensures your commands are heard from anywhere in the room.",
      iconName: "VolumeX"
    },
    {
      title: "AI Recommendations",
      description: "Proactive music, schedule, and lifestyle suggestions based on your habits.",
      iconName: "Sparkles"
    }
  ],
  specs: [
    { label: "Battery Life", value: "24h" },
    { label: "Connectivity", value: "Bluetooth 5.3" },
    { label: "Wireless", value: "WiFi 6" },
    { label: "Charging", value: "USB-C" }
  ]
};

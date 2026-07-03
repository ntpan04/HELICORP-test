export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  features: {
    title: string;
    description: string;
    iconName: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
};

export const products: Product[] = [
  {
    id: "nova-ai-speaker",
    name: "Nova AI Speaker",
    tagline: "The Future of Sound and Intelligence",
    description: "Experience unparalleled audio quality combined with next-generation AI. Nova adapts to your lifestyle, understands your needs, and controls your entire home with just your voice.",
    price: 299,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop",
    features: [
      { title: "Voice Assistant", description: "Advanced natural language processing for seamless conversations.", iconName: "Mic" },
      { title: "Smart Home Control", description: "Instantly connect and command all your IoT devices.", iconName: "Home" },
      { title: "Noise Cancellation", description: "Active ambient noise reduction.", iconName: "VolumeX" },
      { title: "AI Recommendations", description: "Proactive music and lifestyle suggestions.", iconName: "Sparkles" }
    ],
    specs: [
      { label: "Battery Life", value: "24h" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Wireless", value: "WiFi 6" },
      { label: "Charging", value: "USB-C" }
    ]
  },
  {
    id: "nova-mini",
    name: "Nova Mini",
    tagline: "Compact Powerhouse",
    description: "All the intelligence of the Nova AI Speaker in a compact, portable design. Perfect for smaller rooms or on-the-go adventures.",
    price: 149,
    image: "https://images.unsplash.com/photo-1589003071536-83815341a674?q=80&w=600&auto=format&fit=crop",
    features: [
      { title: "Portable", description: "Lightweight and easy to carry.", iconName: "Mic" },
      { title: "Water Resistant", description: "IP67 rated for outdoor use.", iconName: "Home" }
    ],
    specs: [
      { label: "Battery Life", value: "12h" },
      { label: "Connectivity", value: "Bluetooth 5.3" }
    ]
  },
  {
    id: "nova-pro",
    name: "Nova Pro",
    tagline: "Studio Grade Fidelity",
    description: "Designed for audiophiles. The Nova Pro delivers uncompromised high-resolution audio with spatial sound mapping.",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
    features: [
      { title: "Spatial Audio", description: "Immersive 3D sound experience.", iconName: "Mic" },
      { title: "Studio Grade", description: "High-resolution audio support.", iconName: "VolumeX" }
    ],
    specs: [
      { label: "Battery Life", value: "30h" },
      { label: "Connectivity", value: "Bluetooth 5.3 & WiFi 6E" }
    ]
  },
  {
    id: "nova-headphones",
    name: "Nova Over-Ear Headphones",
    tagline: "Immersive Silence",
    description: "Industry-leading noise cancellation paired with our proprietary AI sound optimization.",
    price: 349,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
    features: [
      { title: "ANC", description: "Active noise cancellation.", iconName: "VolumeX" },
      { title: "Comfort Fit", description: "Memory foam ear cushions.", iconName: "Sparkles" }
    ],
    specs: [
      { label: "Battery Life", value: "40h" },
      { label: "Weight", value: "250g" }
    ]
  }
];

// For backward compatibility on the landing page
export const productData = products[0];

export interface PortfolioImage {
  url: string;
  category: string;
  title: string;
  location: string;
  description: string;
}

export const portfolioImages: PortfolioImage[] = [
  {
    url: "/PapiImages/Weddings/9T4A0998.jpeg",
    category: "Weddings",
    title: "Sunset Ceremony",
    location: "Tuscany, Italy",
    description:
      "A magical moment captured during golden hour as the couple exchanged vows under the Tuscan sun.",
  },
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    category: "Lifestyle & Portraits",
    title: "Natural Light Portrait",
    location: "Central Park, NYC",
    description:
      "Embracing the soft morning light to create timeless portraits that capture genuine emotions.",
  },
  {
    url: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80",
    category: "Events",
    title: "Corporate Gathering",
    location: "Downtown Manhattan",
    description:
      "Documenting meaningful connections during an evening of celebration and networking.",
  },
  {
    url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80",
    category: "Travel & Landscapes",
    title: "Mountain Majesty",
    location: "Swiss Alps",
    description:
      "Capturing the raw beauty of nature in its most pristine form.",
  },
  {
    url: "https://images.unsplash.com/photo-1512288094938-363287817c25?auto=format&fit=crop&q=80",
    category: "Studio Sessions",
    title: "Studio Portrait",
    location: "NYC Studio",
    description:
      "Creating controlled lighting environments to achieve the perfect mood and tone.",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
    category: "Weddings",
    title: "First Dance",
    location: "The Plaza, NYC",
    description:
      "A tender moment between newlyweds as they share their first dance.",
  },
];

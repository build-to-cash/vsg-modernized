export const homePage = {
  hero: {
    title: "Where Sound Meets Soul",
    subtitle: "The Curated Lounge Experience",
    description: "An intimate space where Hip Hop, Afrobeat, and Caribbean rhythms converge. Discover premium cocktails, live performances, and an atmosphere that whispers exclusivity.",
  },
  featured: [
    {
      title: "Live Sessions",
      description: "Curated performances from rising artists and established legends.",
      icon: "music",
    },
    {
      title: "Premium cocktails",
      description: "Crafted libations that elevate your evening.",
      icon: "cocktail",
    },
    {
      title: "Private booth",
      description: "Intimate spaces for groups seeking seclusion.",
      icon: "vip",
    },
  ],
  events: [
    {
      title: "Afrobeat Fridays",
      description: "Weekly celebration of African rhythms with resident DJs.",
      date: "Every Friday",
      time: "10PM - 3AM",
      image: "/images/events/afrobeat.jpg",
    },
    {
      title: "Saturday Soul",
      description: "Hip Hop classics and new school vibes.",
      date: "Every Saturday",
      time: "10PM - 3AM",
      image: "/images/events/saturday.jpg",
    },
  ],
};

export const aboutPage = {
  hero: {
    title: "Our Story",
    subtitle: "A Modern Speakeasy",
    description: "Born from a vision to create a space that bridges generations and genres. VSG Bliss is more than a lounge—it's a cultural sanctuary.",
  },
  values: [
    {
      title: "Curated, Not Crowded",
      description: "We maintain an intimate atmosphere where every guest feels like a VIP.",
    },
    {
      title: "Sound First",
      description: "State-of-the-art acoustics deliver an unparalleled audio experience.",
    },
    {
      title: "Inclusive Excellence",
      description: "A space where all are welcome to enjoy premium hospitality.",
    },
  ],
};

export const eventsPage = {
  hero: {
    title: "Events",
    subtitle: "Upcoming Nights",
  },
  events: [
    {
      title: "Afrobeat Fridays",
      description: "Weekly celebration of African rhythms with resident DJs spinning the best in Afrobeats, Amapiano, and African hip hop.",
      date: "Fridays",
      time: "10PM - 3AM",
      image: "/images/events/afrobeat.jpg",
      cta: "RSVP",
    },
    {
      title: "Saturday Soul Sessions",
      description: "Hip Hop and R&B all night. From the golden era to current hits.",
      date: "Saturdays",
      time: "10PM - 3AM",
      image: "/images/events/saturday.jpg",
      cta: "RSVP",
    },
    {
      title: "Live Performances",
      description: "Special guest artists every month.",
      date: "Monthly",
      time: "9PM - 3AM",
      image: "/images/events/live.jpg",
      cta: "RSVP",
    },
  ],
};

export const artistsPage = {
  hero: {
    title: "Artists",
    subtitle: "The Talent",
  },
  artists: [
    {
      name: "DJ Kwesi",
      role: "Resident DJ - Afrobeat",
      bio: "Bringing the heat from Lagos to your speakers.",
      image: "/images/artists/dj-kwesi.jpg",
    },
    {
      name: "Maya Vance",
      role: "Live Performances",
      bio: "Voice that moves mountains.",
      image: "/images/artists/maya.jpg",
    },
  ],
};

export const contactPage = {
  hero: {
    title: "Contact Us",
    subtitle: "Get In Touch",
  },
  info: {
    address: "123 Bliss Street, Downtown",
    phone: "(555) 123-4567",
    email: "hello@vsgbliss.com",
    hours: "Tue-Sun: 6PM - 3AM",
  },
};

export type PageData = typeof homePage;
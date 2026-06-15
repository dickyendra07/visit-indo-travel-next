export type TravelPackage = {
  slug: string;
  title: string;
  region: string;
  duration: string;
  idealFor: string;
  image: string;
  shortDescription: string;
  highlights: string[];
  itineraryPreview: {
    day: string;
    title: string;
    description: string;
  }[];
};

export const travelPackages: TravelPackage[] = [
  {
    slug: "java-discovery-journey",
    title: "Java Discovery Journey",
    region: "Yogyakarta, Bromo & Ijen",
    duration: "7 Days / 6 Nights",
    idealFor: "Culture, volcano & heritage travelers",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "A private journey through Java’s cultural heart, sunrise volcano landscapes, and timeless heritage routes.",
    highlights: [
      "Borobudur sunrise experience",
      "Private Yogyakarta heritage tour",
      "Mount Bromo sunrise viewpoint",
      "Optional Ijen crater extension",
    ],
    itineraryPreview: [
      {
        day: "Day 01",
        title: "Arrival in Yogyakarta",
        description:
          "Private airport pickup, hotel check-in, and relaxed introduction to the cultural heart of Java.",
      },
      {
        day: "Day 02",
        title: "Borobudur & Heritage Route",
        description:
          "Visit Borobudur, royal heritage areas, local villages, and curated cultural stops around Central Java.",
      },
      {
        day: "Day 03",
        title: "Yogyakarta Cultural Day",
        description:
          "Explore palace heritage, local craft areas, traditional dining, and a flexible evening at your own pace.",
      },
      {
        day: "Day 04",
        title: "Journey to East Java",
        description:
          "Comfortable private transfer or train route toward the volcanic landscapes of East Java.",
      },
      {
        day: "Day 05",
        title: "Bromo Sunrise",
        description:
          "Early morning private jeep experience to witness Mount Bromo at sunrise with a relaxed recovery schedule.",
      },
      {
        day: "Day 06",
        title: "Ijen or Scenic Extension",
        description:
          "Continue toward Ijen, coastal areas, or a softer nature route depending on your preferred travel pace.",
      },
      {
        day: "Day 07",
        title: "Departure or Bali Connection",
        description:
          "Final transfer arrangement for airport departure or onward private connection toward Bali.",
      },
    ],
  },
  {
    slug: "bali-luxury-escape",
    title: "Bali Luxury Escape",
    region: "Ubud, Uluwatu & Seminyak",
    duration: "6 Days / 5 Nights",
    idealFor: "Couples, families & first-time visitors",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "A refined Bali escape combining curated stays, private transfers, cultural moments, and coastal leisure.",
    highlights: [
      "Private airport pickup",
      "Ubud cultural and nature route",
      "Uluwatu sunset experience",
      "Luxury beach club or wellness day",
    ],
    itineraryPreview: [
      {
        day: "Day 01",
        title: "Arrival in Bali",
        description:
          "Private airport pickup and smooth transfer to your selected hotel or villa.",
      },
      {
        day: "Day 02",
        title: "Ubud Cultural Route",
        description:
          "Explore rice terraces, temples, local craft stops, and relaxed dining recommendations.",
      },
      {
        day: "Day 03",
        title: "Wellness & Leisure",
        description:
          "Enjoy spa, villa time, curated café stops, or optional nature experiences.",
      },
      {
        day: "Day 04",
        title: "Uluwatu Sunset",
        description:
          "Private coastal route ending with sunset views and optional dinner arrangement.",
      },
    ],
  },
  {
    slug: "komodo-eastern-islands",
    title: "Komodo & Eastern Islands",
    region: "Labuan Bajo, Komodo & Flores",
    duration: "5 Days / 4 Nights",
    idealFor: "Island, nature & adventure travelers",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "A cinematic island journey through Komodo National Park, turquoise waters, viewpoints, and private boat experiences.",
    highlights: [
      "Private Labuan Bajo arrangement",
      "Komodo island-hopping route",
      "Padar Island viewpoint",
      "Snorkeling and beach stops",
    ],
    itineraryPreview: [
      {
        day: "Day 01",
        title: "Arrival in Labuan Bajo",
        description:
          "Private pickup, hotel check-in, and relaxed sunset introduction to Flores.",
      },
      {
        day: "Day 02",
        title: "Komodo Island Route",
        description:
          "Private or selected boat route to Komodo National Park highlights.",
      },
      {
        day: "Day 03",
        title: "Padar Island & Beaches",
        description:
          "Scenic viewpoint, pink beach possibility, snorkeling, and island leisure.",
      },
      {
        day: "Day 04",
        title: "Flores Slow Day",
        description:
          "Optional cave, village, culinary, or relaxed hotel day before departure.",
      },
    ],
  },
  {
    slug: "romantic-indonesia-honeymoon",
    title: "Romantic Indonesia Honeymoon",
    region: "Bali, Java or Island Combination",
    duration: "8 Days / 7 Nights",
    idealFor: "Honeymooners & anniversary trips",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "A private romantic journey designed around beautiful stays, soft pacing, scenic moments, and effortless transfers.",
    highlights: [
      "Private romantic itinerary",
      "Villa or boutique stay direction",
      "Sunset dining recommendation",
      "Flexible island or culture route",
    ],
    itineraryPreview: [
      {
        day: "Day 01",
        title: "Private Arrival",
        description:
          "Smooth airport pickup, hotel check-in, and quiet evening arranged around your pace.",
      },
      {
        day: "Day 02",
        title: "Scenic Couple Experience",
        description:
          "Choose between cultural route, nature view, spa, or soft adventure experience.",
      },
      {
        day: "Day 03",
        title: "Signature Sunset Moment",
        description:
          "Curated sunset route with dinner, photography stop, or private dining option.",
      },
      {
        day: "Day 04",
        title: "Slow Luxury Day",
        description:
          "A relaxed day for villa time, spa, beach club, or local discovery.",
      },
    ],
  },
];

export const featuredItinerary = travelPackages[0];

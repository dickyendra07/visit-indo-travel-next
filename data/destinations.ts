export type Destination = {
  slug: string;
  title: string;
  regionLabel: string;
  image: string;
  shortDescription: string;
  bestFor: string[];
  experiences: string[];
  sampleRoutes: string[];
};

export const destinations: Destination[] = [
  {
    slug: "bali-eastern-islands",
    title: "Bali & Eastern Islands",
    regionLabel: "Island Living",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Bali and the eastern islands offer a refined mix of culture, private villas, wellness, beaches, and island escapes.",
    bestFor: ["Couples", "Families", "First-time Indonesia visitors", "Wellness travelers"],
    experiences: ["Ubud culture", "Uluwatu sunset", "Private villa stays", "Komodo extension"],
    sampleRoutes: ["Bali 6 days", "Bali + Lombok 8 days", "Bali + Komodo 9 days"],
  },
  {
    slug: "java",
    title: "Java",
    regionLabel: "Culture & Volcanoes",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Java is ideal for travelers seeking temples, royal heritage, volcano sunrise experiences, and deep cultural routes.",
    bestFor: ["Culture travelers", "Volcano lovers", "Heritage routes", "Photography"],
    experiences: ["Borobudur", "Yogyakarta heritage", "Bromo sunrise", "Ijen crater"],
    sampleRoutes: ["Yogyakarta 3 days", "Java Discovery 7 days", "Java + Bali 10 days"],
  },
  {
    slug: "sumatra",
    title: "Sumatra",
    regionLabel: "Wild Nature",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Sumatra offers rainforest, highlands, wildlife, lakes, and less-traveled landscapes for adventurous private journeys.",
    bestFor: ["Nature lovers", "Adventure", "Wildlife", "Offbeat travelers"],
    experiences: ["Rainforest route", "Lake Toba", "Highland culture", "Wildlife experiences"],
    sampleRoutes: ["North Sumatra 5 days", "Lake Toba 4 days", "Sumatra soft adventure 7 days"],
  },
  {
    slug: "kalimantan",
    title: "Kalimantan",
    regionLabel: "Rainforest Routes",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Kalimantan is known for river journeys, tropical rainforest, wildlife routes, and slow travel through Borneo landscapes.",
    bestFor: ["Wildlife", "River journeys", "Nature travelers", "Slow travel"],
    experiences: ["Rainforest cruise", "Orangutan route", "River villages", "Nature immersion"],
    sampleRoutes: ["Borneo river 4 days", "Wildlife route 5 days", "Kalimantan nature 7 days"],
  },
  {
    slug: "sulawesi",
    title: "Sulawesi",
    regionLabel: "Marine & Culture",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Sulawesi combines marine beauty, highland culture, dramatic coastlines, and distinctive travel experiences.",
    bestFor: ["Diving", "Culture", "Coastal routes", "Remote travel"],
    experiences: ["Marine life", "Toraja culture", "Island routes", "Highland scenery"],
    sampleRoutes: ["Toraja 5 days", "North Sulawesi 6 days", "Culture + marine 9 days"],
  },
  {
    slug: "maluku",
    title: "Maluku",
    regionLabel: "Spice Islands",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Maluku offers quiet beaches, historic spice routes, remote island beauty, and a slower rhythm of travel.",
    bestFor: ["Remote islands", "Beach escape", "History", "Slow travel"],
    experiences: ["Spice routes", "Quiet beaches", "Island hopping", "Historic coastal towns"],
    sampleRoutes: ["Ambon 4 days", "Maluku island escape 7 days", "Spice route 8 days"],
  },
  {
    slug: "papua",
    title: "Papua",
    regionLabel: "Eastern Paradise",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1800&q=90",
    shortDescription:
      "Papua is home to breathtaking marine landscapes, remote island experiences, and some of Indonesia’s most iconic natural scenery.",
    bestFor: ["Raja Ampat", "Marine travel", "Photography", "Remote luxury"],
    experiences: ["Raja Ampat", "Private boat route", "Snorkeling", "Island viewpoints"],
    sampleRoutes: ["Raja Ampat 5 days", "Papua marine escape 7 days", "Private island route 8 days"],
  },
];

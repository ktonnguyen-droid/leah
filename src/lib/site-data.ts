export const BOOKSY_URL =
  "https://booksy.com/en-us/1232086_leah-the-barber-at-faded-blue-lounge_barber-shop_134610_fort-worth";

export const SHOP_URL = "https://fadedbluelounge.com/";
export const SHOP_TEAM_URL = "https://fadedbluelounge.com/barbers/leah";

export const PHONE_DISPLAY = "(682) 233-0606";
export const PHONE_HREF = "tel:+16822330606";

export const ADDRESS = {
  street: "3951 Sycamore School Rd",
  suite: "Suite 121",
  city: "Fort Worth",
  state: "TX",
  zip: "76133",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=3951+Sycamore+School+Rd+Ste+121+Fort+Worth+TX+76133";

export type ServiceCategory = "cuts" | "beard" | "shaves" | "skin";

export interface Service {
  name: string;
  price: number;
  duration: string;
  category: ServiceCategory;
  badge?: string;
  note?: string;
}

export const SERVICES: Service[] = [
  // The Cuts
  { name: "Haircut", price: 35, duration: "40 MIN", category: "cuts" },
  {
    name: "Haircut & Beard Trim",
    price: 45,
    duration: "1 HR",
    category: "cuts",
    badge: "MOST BOOKED",
  },
  { name: "Kids Cut", price: 30, duration: "40 MIN", category: "cuts" },

  // Beard & Line-ups
  { name: "Beard Shaping", price: 30, duration: "30 MIN", category: "beard" },
  {
    name: "Edge Up & Beard Line Up with Razor",
    price: 30,
    duration: "30 MIN",
    category: "beard",
  },
  { name: "Edge Up with Razor", price: 25, duration: "25 MIN", category: "beard" },
  {
    name: "Bald Head with Foil Shaver",
    price: 25,
    duration: "40 MIN",
    category: "beard",
  },

  // Hot Lather Shaves
  {
    name: "Hot Lather Head Shave",
    price: 55,
    duration: "40 MIN",
    category: "shaves",
  },
  { name: "Head Shave & Beard", price: 65, duration: "1 HR", category: "shaves" },
  { name: "Head Shave & Shave", price: 75, duration: "1 HR", category: "shaves" },

  // Skin & Extras
  {
    name: "6-Step Dermalogica Facial",
    price: 95,
    duration: "1 HR 20 MIN",
    category: "skin",
  },
  {
    name: "Hair Wash with Scalp Massage",
    price: 20,
    duration: "20 MIN",
    category: "skin",
    note: "10-minute scalp massage, double wash",
  },
  { name: "Eyebrow Wax", price: 10, duration: "10 MIN", category: "skin" },
];

export const FILTER_TABS: { id: "all" | ServiceCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cuts", label: "Cuts" },
  { id: "beard", label: "Beard & Line-ups" },
  { id: "shaves", label: "Hot Lather Shaves" },
  { id: "skin", label: "Skin & Extras" },
];

export const PORTFOLIO = [
  {
    label: "Styled Cut",
    src: "https://vibe.filesafe.space/1794001815039021537/assets/1947f2ea-9e15-4c3c-9620-3cb4a386e7c0.png",
    alt: "Styled haircut by Leah Bernal in Fort Worth",
  },
  {
    label: "Kids Cut",
    src: "https://vibe.filesafe.space/1794001815039021537/assets/5381b7ce-fdaa-4168-b71c-c1896ffeced8.png",
    alt: "Kids haircut by Leah Bernal in Fort Worth",
  },
  {
    label: "Beard Work",
    src: "https://vibe.filesafe.space/1794001815039021537/assets/006c8b6d-4fff-449d-9ab8-e77e4bd71fbd.png",
    alt: "Beard shaping by Leah Bernal in Fort Worth",
  },
  {
    label: "Hot Lather Head Shave",
    src: "https://vibe.filesafe.space/1794001815039021537/assets/be47a534-d7dd-4591-8925-de4efe2e1b1f.png",
    alt: "Hot lather head shave by Leah Bernal in Fort Worth",
  },
  {
    label: "Fade",
    src: "https://vibe.filesafe.space/1794001815039021537/assets/a4d00063-4ee2-450f-a7c3-bdb5fbf68fae.png",
    alt: "Skin fade haircut by Leah Bernal in Fort Worth",
  },
  {
    label: "Dermalogica Facial",
    src: "https://vibe.filesafe.space/1794001815039021537/assets/6d48312a-3ca3-44e6-8f65-73fbcd4ce287.png",
    alt: "Dermalogica facial by Leah Bernal in Fort Worth",
  },
];

export const HERO_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/assets/5ae2a677-0d74-4bf0-a4ea-6663b8f09572.png";
export const ABOUT_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/assets/f6832bae-e122-4505-bd7d-0f4ebfa1ae00.png";
export const HEAD_SHAVE_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/assets/0571cb0c-8522-4a16-b628-dd25ae28d9c6.png";
export const FACIAL_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/assets/04202fd1-a9aa-4588-a40f-4dbc376a71f2.png";

export const REVIEWS = [
  {
    quote: "I think I found me my barber for a long time.",
    name: "Almir",
    service: "Haircut & Beard Trim",
  },
  {
    quote: "Professional, personable, and takes pride in her craft.",
    name: "Narada",
    service: "Beard Shaping",
  },
  {
    quote: "As long as I'm in the area, Leah will always be my go-to.",
    name: "Jesse",
    service: "Verified Client",
  },
];

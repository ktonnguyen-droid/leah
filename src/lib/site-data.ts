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
    src: "/leah-08-styled-cut.jpg",
    alt: "Styled haircut by Leah Bernal in Fort Worth",
    pos: "50% 30%",
  },
  {
    label: "Kids Cut",
    src: "/leah-05-kids-cut.jpg",
    alt: "Kids haircut by Leah Bernal in Fort Worth",
    pos: "50% 20%",
  },
  {
    label: "Beard Work",
    src: "/leah-04-beard.jpg",
    alt: "Beard shaping by Leah Bernal in Fort Worth",
    pos: "65% 35%",
  },
  {
    label: "Hot Lather Head Shave",
    src: "https://vibe.filesafe.space/1794001815039021537/attachments/c547ebbb-a6a0-4d4c-8de8-2b1036b6c700.png",
    alt: "Hot lather head shave by Leah the Barber in Fort Worth, TX",
    pos: "50% 35%",
  },
  {
    label: "Fade",
    src: "/leah-06-fade.jpg",
    alt: "Skin fade haircut by Leah Bernal in Fort Worth",
    pos: "50% 50%",
  },
  {
    label: "Dermalogica Facial",
    src: "/leah-07-facial.jpg",
    alt: "Dermalogica facial by Leah Bernal in Fort Worth",
    pos: "60% 30%",
  },
];

export const HERO_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/attachments/391343f2-4216-4a16-bf60-9c9cf9ef9cf8.png";
export const ABOUT_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/attachments/d68eca9b-37bd-4a56-a5e0-1c02c29e544e.png";
export const HEAD_SHAVE_IMAGE =
  "https://vibe.filesafe.space/1794001815039021537/attachments/c547ebbb-a6a0-4d4c-8de8-2b1036b6c700.png";
export const FACIAL_IMAGE = "/leah-07-facial.jpg";

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

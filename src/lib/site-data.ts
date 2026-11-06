export const BOOKSY_URL =
  "https://booksy.com/en-us/1232086_leah-the-barber-at-faded-blue-lounge_barber-shop_134610_fort-worth";

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

export type ServiceCategory =
  | "cuts"
  | "beard"
  | "shaves"
  | "skin";

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
  "Kids Cut",
  "Razor Edge Up",
  "Fade + Beard Line-up",
  "Hot Lather Head Shave",
  "Beard Shaping",
  "Classic Taper",
  "Leah at Work",
  "Shop Interior",
];

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

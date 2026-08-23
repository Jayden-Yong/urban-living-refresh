const IMG = "https://mahsaavenue.com.my/urban_living/assets/Images";

export const BOOKING_URL = "https://www.swiftbook.io/inst/#home?propertyId=24218";

export const slides = [
  {
    image: `${IMG}/The-Vacation-Haven-min.png`,
    lead: "The",
    title: "Vacation Haven",
    sub: "Kick back and recharge in style",
  },
  {
    image: `${IMG}/A-Place-to-Remember-min.png`,
    lead: "A Place to",
    title: "Remember",
    sub: "Get a peace of mind in a minimalistic suite",
  },
  {
    image: `${IMG}/Minimalist-Bliss-min.png`,
    lead: "Unmistakably",
    title: "Minimalist Bliss",
    sub: "Designs that speak your mind",
  },
  {
    image: `${IMG}/pokok_22022022.png`,
    lead: "The acclaimed",
    title: "Pokok KL",
    sub: "Your local delicacies with an added twist",
  },
  {
    image: `${IMG}/pool.jpg`,
    lead: "Have a splash at",
    title: "The Pool",
    sub: "Unwind in serenity",
  },
  {
    image: `${IMG}/wedding_22022022.png`,
    lead: "Intimate weddings with",
    title: "Brick House Group",
    sub: "Create dazzling memories for precious moments",
  },
];

export const amenities = [
  { icon: "pool", label: "Outdoor pool" },
  { icon: "smoke_free", label: "No smoking rooms" },
  { icon: "spa", label: "Spa and wellness" },
  { icon: "fitness_center", label: "Fitness center" },
  { icon: "wifi", label: "Free WiFi" },
  { icon: "local_parking", label: "Parking on site" },
  { icon: "restaurant", label: "Restaurant" },
  { icon: "family_restroom", label: "Family rooms" },
  { icon: "concierge", label: "24-hour front desk" },
  { icon: "local_cafe", label: "Breakfast" },
];

export const gallery = [
  { src: `${IMG}/reception.jpg`, alt: "Urban Living reception" },
  { src: `${IMG}/dining.jpg`, alt: "Urban Living dining area" },
  { src: `${IMG}/lobby.png`, alt: "Urban Living lobby" },
  { src: `${IMG}/lobby2.jpg`, alt: "Urban Living lobby lounge" },
];

const baseAmenities = [
  { icon: "health_and_beauty", label: "Shampoo and body wash" },
  { icon: "dry_cleaning", label: "Bath and hand towels" },
  { icon: "crop_7_5", label: "Floor mat" },
];

const onRequest = [
  { icon: "iron", label: "Iron and ironing board" },
  { icon: "bed", label: "Extra bed" },
  { icon: "prayer_times", label: "Praying mat" },
];

const baseAppliances = [
  { icon: "ac_unit", label: "Air conditioner" },
  { icon: "dresser", label: "Wardrobe" },
  { icon: "tv", label: "Smart TV" },
  { icon: "desk", label: "Desk and chair" },
  { icon: "floor_lamp", label: "Bedside lamp" },
  { icon: "water_heater", label: "Water heater" },
];

const withMiniBar = [
  { icon: "ac_unit", label: "Air conditioner" },
  { icon: "local_cafe", label: "Mini bar" },
  ...baseAppliances.slice(1),
];

export type Room = {
  name: string;
  image: string;
  size: string;
  guests: string;
  appliances: { icon: string; label: string }[];
  amenities: { icon: string; label: string }[];
  onRequest: { icon: string; label: string }[];
  gallery: string[];
  description: string;
};

export const rooms: Room[] = [
  {
    name: "Standard Queen",
    image: `${IMG}/Standard-Room.png`,
    size: "16.5 m2",
    guests: "2 persons",
    appliances: baseAppliances,
    amenities: [...baseAmenities, { icon: "kettle", label: "Flask with mugs" }],
    onRequest,
    gallery: [
      `${IMG}/standard/standard1.png`,
      `${IMG}/standard/standard2.png`,
      `${IMG}/standard/standard3.png`,
      `${IMG}/standard/standard4.png`,
    ],
    description:
      "Urban Living Standard Queen Rooms are decorated with the comfort of our guests in mind. Accommodating up to 2 persons and equipped with high tech comforts such as high speed internet access, USB ports, and smart TV.",
  },
  {
    name: "Superior Twin",
    image: `${IMG}/sup-twin.jpg`,
    size: "16.5 m2",
    guests: "2 persons",
    appliances: baseAppliances,
    amenities: [...baseAmenities, { icon: "kettle", label: "Flask with mugs" }],
    onRequest,
    gallery: [
      `${IMG}/twin/twin1.jpg`,
      `${IMG}/twin/twin2.jpg`,
      `${IMG}/twin/twin3.jpg`,
      `${IMG}/twin/twin4.jpg`,
    ],
    description:
      "Urban Living Superior Twin Rooms are decorated to give our guests an extra pop of colour to sprinkle more joy to their stay. Accommodating up to 2 persons and equipped with high tech comforts such as high speed internet access, USB ports, and smart TV.",
  },
  {
    name: "Suite",
    image: `${IMG}/suite.png`,
    size: "33.0 m2",
    guests: "2 persons",
    appliances: withMiniBar,
    amenities: [...baseAmenities, { icon: "kettle", label: "Water kettle with mugs" }],
    onRequest,
    gallery: [
      `${IMG}/suite/suite1.png`,
      `${IMG}/suite/suite2.png`,
      `${IMG}/suite/suite3.png`,
      `${IMG}/suite/suite4.png`,
    ],
    description:
      "Urban Living Suites are decorated with the comfort of our guests in mind. Accommodating up to 2 persons and equipped with a lounging area and high tech comforts such as high speed internet access, USB ports, and smart TV.",
  },
  {
    name: "Deluxe Triple",
    image: `${IMG}/deluxe-triple.jpg`,
    size: "33.0 m2",
    guests: "3 persons",
    appliances: baseAppliances,
    amenities: [...baseAmenities, { icon: "kettle", label: "Water kettle with mugs" }],
    onRequest,
    gallery: [
      `${IMG}/triple/triple1.jpg`,
      `${IMG}/triple/triple2.jpg`,
      `${IMG}/triple/triple3.jpg`,
      `${IMG}/standard/standard4.png`,
    ],
    description:
      "Urban Living Deluxe Triple Rooms are decorated with the comfort of our guests in mind. Accommodating up to 3 persons and equipped with 1 queen size bed, 1 single bed, high tech comforts such as high speed internet access, USB ports, and smart TV.",
  },
  {
    name: "Junior Suite",
    image: `${IMG}/suitejr.png`,
    size: "33.0 m2",
    guests: "3 persons",
    appliances: withMiniBar,
    amenities: [...baseAmenities, { icon: "kettle", label: "Water kettle with mugs" }],
    onRequest,
    gallery: [
      `${IMG}/junior/junior1.png`,
      `${IMG}/junior/junior2.png`,
      `${IMG}/junior/junior3.png`,
      `${IMG}/junior/junior4.png`,
    ],
    description:
      "Urban Living Junior Suite Rooms are decorated to give our guests an extra pop of colour to sprinkle more joy to their stay. Accommodating up to 3 persons and equipped with high tech comforts such as high speed internet access, USB ports, and smart TV.",
  },
  {
    name: "Penthouse",
    image: `${IMG}/penthouse.png`,
    size: "49.5 m2",
    guests: "4 persons",
    appliances: withMiniBar,
    amenities: [...baseAmenities, { icon: "kettle", label: "Water kettle with mugs" }],
    onRequest,
    gallery: [
      `${IMG}/penthouse/penthouse1.png`,
      `${IMG}/penthouse/penthouse2.png`,
      `${IMG}/penthouse/penthouse3.png`,
      `${IMG}/penthouse/penthouse4.png`,
    ],
    description:
      "Urban Living Penthouses are decorated with the comfort of our guests in mind. Accommodating up to 2 adults and 2 children, the penthouse equipped with a lounging area and high tech comforts such as high speed internet access, USB ports, and smart TV.",
  },
];

export const dining = [
  {
    image: `${IMG}/pokok.jpg`,
    name: "Pokok KL",
    by: "by Brick House",
    text: "With a menu that’s constantly evolving to incorporate staple flavours from the East and West, Pokok is truly our epitome of innovation. The transparent glass roof and walls, and being surrounded by lush greenery become very apparent, making Pokok KL the perfect little haven.",
  },
  {
    image: `${IMG}/daun.jpg`,
    name: "Daun KL",
    by: "by Brick House",
    text: "The little sister to Pokok, Daun features fresh pastries and aromatic coffee, and is the best place to sit down and unwind before getting back to your busy day.",
  },
];

export const shops = [
  {
    kicker: "Shopping",
    name: "KEDAI KL",
    text: "Visit the artisanal marketplace that brings in a curation of homegrown brands going from handmade potteries to food and beverages.",
    images: [`${IMG}/kedai/kedai.png`, `${IMG}/kedai/kedai2.png`, `${IMG}/kedai/kedai3.jpg`],
  },
  {
    kicker: "Groceries",
    name: "MERCEARIA",
    text: "Missing something during your trip? Visit MERCEARIA to replenish the essentials for your stay in a short walk away.",
    images: [`${IMG}/grocer/grocer1.png`, `${IMG}/grocer/grocer2.jpg`, `${IMG}/grocer/grocer3.jpg`],
  },
  {
    kicker: "Healthcare",
    name: "MAHSA Health",
    text: "Looking to improve your health and wellness? MAHSA Health’s ever-growing integrated healthcare facilities offer comprehensive healthcare services to people of all ages and backgrounds.",
    images: [`${IMG}/health/health1.jpg`, `${IMG}/health/health2.jpg`, `${IMG}/health/health3.jpg`],
  },
];

export const places = [
  { image: `${IMG}/um.jpg`, name: "University of Malaya", distance: "1.5km" },
  { image: `${IMG}/ummc.jpg`, name: "UM Medical Centre", distance: "400m" },
  { image: `${IMG}/klia.jpg`, name: "Kuala Lumpur International Airport", distance: "57km" },
  { image: `${IMG}/temple.jpg`, name: "Thean Hou Temple", distance: "9.4km" },
  { image: `${IMG}/pavilion.jpg`, name: "Pavilion KL", distance: "14km" },
  { image: `${IMG}/klcc.jpg`, name: "Petronas Twin Towers", distance: "15km" },
];

export const info = [
  {
    title: "Registration",
    items: [
      { icon: "schedule", label: "Check-in:", value: "3.00 pm" },
      { icon: "schedule", label: "Check-out:", value: "12.00 pm" },
      { icon: "check", label: "Minimum age to check-in:", value: "18" },
    ],
  },
  {
    title: "Swimming Pool",
    items: [
      { icon: "schedule", label: "Operation hours:", value: "7.00 am - 8.00 pm" },
      { icon: "location_on", label: "Location:", value: "Level 2 Mahsa Avenue" },
      { icon: "apparel", label: "Dress code:", value: "Swimwear" },
    ],
  },
  {
    title: "Fitness Centre",
    items: [
      { icon: "schedule", label: "Operation hours:", value: "6.00 am - 11.00 pm" },
      { icon: "location_on", label: "Location:", value: "Level 4 Block B - Urban Living" },
      { icon: "apparel", label: "Dress code:", value: "Fitness/Sportwear" },
    ],
  },
  {
    title: "Prohibited Items",
    items: [
      { icon: "block", label: "Animals of any kind", value: "" },
      { icon: "block", label: "Flammable or hazardous materials", value: "" },
      { icon: "block", label: "Food or objects of foul odour", value: "" },
    ],
  },
  {
    title: "Parking",
    items: [
      { icon: "local_parking", label: "On-site parking @ Mahsa Avenue", value: "" },
      { icon: "payments", label: "Rate:", value: "RM7.00 per entry per day" },
      { icon: "local_parking", label: "Open Parking", value: "" },
      { icon: "payments", label: "Rate:", value: "Varies with duration and day" },
    ],
  },
  {
    title: "Perks and Services",
    items: [
      { icon: "smoke_free", label: "Smoke free property", value: "" },
      { icon: "hotel", label: "Extra bed for a fee", value: "" },
      { icon: "checked_bag", label: "Luggage storage", value: "" },
      { icon: "wifi", label: "Complimentary WiFi access", value: "" },
    ],
  },
];

export const navLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#dining", label: "Dining" },
  { href: "#nearby", label: "Nearby" },
  { href: "#info", label: "Info" },
];

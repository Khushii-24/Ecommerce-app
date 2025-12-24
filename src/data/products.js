export const products = [
  // MEN (5+)
  {
    id: "m1",
    name: "Structured Maroon Shirt",
    category: "men",
    price: 2499,
    color: "maroon", // Added color field
    sizes: ["M", "L", "XL"], // Added available sizes
    soldCount: 120, // Added sold count for sorting best-selling
    image: "/images/men-maroon-shirt.png",
    details: {
      productDetails: [
        "Structured maroon shirt",
        "Button-down front",
        "Long sleeves",
        "Cotton fabric",
      ],
      sizeFit: ["The model (height 6'1\") is wearing a size M"],
      materialCare: ["Cotton", "Machine wash cold"],
      specifications: [
        "Collar: Spread collar",
        "Cuffs: Button cuffs",
        "Fit: Regular fit",
        "Fabric Type: Woven",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "m2",
    name: "Tailored Navy Blazer",
    category: "men",
    price: 5999,
    color: "blue", // Added color field
    sizes: ["38", "40", "42"], // Added available sizes
    soldCount: 85, // Added sold count for sorting best-selling
    image: "/images/men-navy-blazer.jpg",
    details: {
      productDetails: [
        "Tailored navy blazer",
        "Two-button closure",
        "Notch lapels",
        "Wool blend fabric",
      ],
      sizeFit: ["The model (height 6'0\") is wearing a size 40"],
      materialCare: ["Wool blend", "Dry clean only"],
      specifications: [
        "Lining: Fully lined",
        "Fit: Slim fit",
        "Pockets: Two flap pockets",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "m3",
    name: "Black Wide-Leg Trousers",
    category: "men",
    price: 3199,
    color: "black", // Added color field
    sizes: ["32", "34", "36"], // Added available sizes
    soldCount: 200, // Added sold count for sorting best-selling
    image: "/images/men-black-trousers.png",
    details: {
      productDetails: [
        "Black wide-leg trousers",
        "Solid",
        "Mid-rise, flat-front",
        "Woven suiting fabric",
      ],
      sizeFit: ["The model (height 6'0\") is wearing a size 32"],
      materialCare: ["Polyester blend", "Dry Clean Only"],
      specifications: [
        "Sleeve Length: Sleeveless",
        "Neck: Cowl Neck",
        "Type: Regular",
        "Sleeve Styling: No Sleeves",
        "Transparency: Opaque",
        "Length: Regular",
        "Weave Type: Woven",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "m4",
    name: "Off-White Linen Shirt",
    category: "men",
    price: 2799,
    color: "white", // Added color field
    sizes: ["M", "L"], // Added available sizes
    soldCount: 75, // Added sold count for sorting best-selling
    image: "/images/men-linen-shirt.png",
    details: {
      productDetails: [
        "Off-white linen shirt",
        "Button-up closure",
        "Short sleeves",
        "Breathable linen fabric",
      ],
      sizeFit: ["The model (height 5'11\") is wearing a size L"],
      materialCare: ["Linen", "Machine wash cold"],
      specifications: [
        "Collar: Button-down collar",
        "Fit: Relaxed fit",
        "Fabric Type: Woven",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "m5",
    name: "Minimalist White Sneakers",
    category: "men",
    price: 4499,
    color: "white", // Added color field
    sizes: ["8", "9", "10"], // Added available sizes
    soldCount: 150, // Added sold count for sorting best-selling
    image: "/images/men-white-sneakers.png",
    details: {
      productDetails: [
        "Minimalist white sneakers",
        "Lace-up design",
        "Vegan leather upper",
        "Rubber sole",
      ],
      sizeFit: ["The model (shoe size 10) is wearing a size 10"],
      materialCare: ["Vegan leather", "Wipe clean with a damp cloth"],
      specifications: [
        "Sole: Rubber",
        "Closure: Lace-up",
        "Number of Items: 1",
      ],
    },
  },

  // WOMEN (5+)
  {
    id: "w1",
    name: "Maroon Regular Top",
    category: "women",
    price: 1999,
    color: "maroon", // Added color field
    sizes: ["S", "M", "L"], // Added available sizes
    soldCount: 90, // Added sold count for sorting best-selling
    image: "/images/women-maroon-top.png",
    details: {
      productDetails: [
        "Maroon regular top",
        "Round neckline",
        "Short sleeves",
        "Cotton fabric",
      ],
      sizeFit: ["The model (height 5'7\") is wearing a size S"],
      materialCare: ["Cotton", "Machine wash cold"],
      specifications: [
        "Fit: Regular fit",
        "Fabric Type: Knit",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "w2",
    name: "Ivory Satin Slip Dress",
    category: "women",
    price: 4299,
    color: "white", // Added color field
    sizes: ["S", "M", "L"], // Added available sizes
    soldCount: 60, // Added sold count for sorting best-selling
    image: "/images/women-satin-dress.jpg",
    details: {
      productDetails: [
        "Ivory satin slip dress",
        "Spaghetti straps",
        "Midi length",
        "Silk satin fabric",
      ],
      sizeFit: ["The model (height 5'8\") is wearing a size M"],
      materialCare: ["Silk", "Dry clean only"],
      specifications: [
        "Neck: V-neck",
        "Fit: Bodycon",
        "Length: Midi",
        "Transparency: Semi-opaque",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "w3",
    name: "Black Wide-Leg Trousers",
    category: "women",
    price: 3499,
    color: "black", // Added color field
    sizes: ["28", "30", "32"], // Added available sizes
    soldCount: 130, // Added sold count for sorting best-selling
    image: "/images/women-trousers.png",
    details: {
      productDetails: [
        "Black wide-leg trousers",
        "Solid",
        "Mid-rise, flat-front",
        "Woven suiting fabric",
      ],
      sizeFit: ["The model (height 5'9\") is wearing a size 28"],
      materialCare: ["Polyester blend", "Dry Clean Only"],
      specifications: [
        "Sleeve Length: Sleeveless",
        "Neck: Cowl Neck",
        "Type: Regular",
        "Sleeve Styling: No Sleeves",
        "Transparency: Opaque",
        "Length: Regular",
        "Weave Type: Woven",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "w4",
    name: "Camel Oversized Blazer",
    category: "women",
    price: 5599,
    color: "camel", // Added color field
    sizes: ["M", "L"], // Added available sizes
    soldCount: 50, // Added sold count for sorting best-selling
    image: "/images/women-blazer.png",
    details: {
      productDetails: [
        "Camel oversized blazer",
        "Double-breasted closure",
        "Notch lapels",
        "Wool blend fabric",
      ],
      sizeFit: ["The model (height 5'8\") is wearing a size M"],
      materialCare: ["Wool blend", "Dry clean only"],
      specifications: [
        "Lining: Fully lined",
        "Fit: Oversized",
        "Pockets: Two flap pockets",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "w5",
    name: "Beige Ribbed Knit Top",
    category: "women",
    price: 1799,
    color: "beige", // Added color field
    sizes: ["S", "M", "L"], // Added available sizes
    soldCount: 110, // Added sold count for sorting best-selling
    image: "/images/women-knit-top.jpg",
    details: {
      productDetails: [
        "Beige ribbed knit top",
        "High neckline",
        "Long sleeves",
        "Stretchy cotton fabric",
      ],
      sizeFit: ["The model (height 5'7\") is wearing a size S"],
      materialCare: ["Cotton", "Machine wash cold"],
      specifications: [
        "Fit: Slim fit",
        "Fabric Type: Ribbed knit",
        "Number of Items: 1",
      ],
    },
  },

  // ACCESSORIES (5+)
  {
    id: "a1",
    name: "Textured Leather Belt",
    category: "accessories",
    price: 1599,
    color: "black", // Added color field
    sizes: ["M", "L"], // Added available sizes
    soldCount: 50, // Added sold count for sorting best-selling
    image: "/images/accessory-belt.png",
    details: {
      productDetails: [
        "Textured leather belt",
        "Gold-tone buckle",
        "1.5-inch width",
        "Genuine leather",
      ],
      sizeFit: ["The model is wearing a size M"],
      materialCare: ["Genuine leather", "Wipe clean with a dry cloth"],
      specifications: [
        "Buckle Type: Gold-tone",
        "Fit: Regular fit",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "a2",
    name: "Minimalist Gold Watch",
    category: "accessories",
    price: 7999,
    color: "gold", // Added color field
    sizes: ["one-size"], // Added available sizes
    soldCount: 80, // Added sold count for sorting best-selling
    image: "/images/accessory-watch.png",
    details: {
      productDetails: [
        "Minimalist gold watch",
        "Thin mesh band",
        "Quartz movement",
        "Water-resistant",
      ],
      sizeFit: ['The model (wrist size 6.5") is wearing a standard size'],
      materialCare: ["Stainless steel", "Wipe clean with a soft cloth"],
      specifications: [
        "Dial: Round",
        "Band Material: Stainless steel mesh",
        "Water Resistance: 3 ATM",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "a3",
    name: "Structured Tote Bag",
    category: "accessories",
    price: 3999,
    color: "beige", // Added color field
    sizes: ["one-size"], // Added available sizes
    soldCount: 95, // Added sold count for sorting best-selling
    image: "/images/accessory-tote.jpg",
    details: {
      productDetails: [
        "Structured tote bag",
        "Top handles",
        "Zipper closure",
        "Synthetic leather",
      ],
      sizeFit: ["The model is carrying the medium size"],
      materialCare: ["Synthetic leather", "Wipe clean with a damp cloth"],
      specifications: [
        "Handles: Two top handles",
        'Dimensions: 15" x 12" x 5"',
        "Closure: Zipper",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "a4",
    name: "Matte Black Sunglasses",
    category: "accessories",
    price: 2499,
    color: "black", // Added color field
    sizes: ["one-size"], // Added available sizes
    soldCount: 140, // Added sold count for sorting best-selling
    image: "/images/accessory-sunglasses.png",
    details: {
      productDetails: [
        "Matte black sunglasses",
        "UV protection",
        "Square frames",
        "Polarized lenses",
      ],
      sizeFit: ["One size fits most"],
      materialCare: ["Plastic frame", "Clean with microfiber cloth"],
      specifications: [
        "Frame Material: Plastic",
        "Lens Type: Polarized",
        "Number of Items: 1",
      ],
    },
  },
  {
    id: "a5",
    name: "Woven Scarf",
    category: "accessories",
    price: 1299,
    color: "maroon", // Added color field
    sizes: ["one-size"], // Added available sizes
    soldCount: 100, // Added sold count for sorting best-selling
    image: "/images/accessory-scarf.png",
    details: {
      productDetails: [
        "Woven scarf",
        "Fringe edges",
        "Soft wool blend",
        "Versatile design",
      ],
      sizeFit: ["One size fits all"],
      materialCare: ["Wool blend", "Hand wash cold"],
      specifications: [
        'Dimensions: 70" x 12"',
        "Material: Wool blend",
        "Number of Items: 1",
      ],
    },
  },
];

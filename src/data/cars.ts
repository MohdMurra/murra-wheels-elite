
export interface CarType {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyStyle: string;
  exteriorColor: string;
  interiorColor: string;
  engine: string;
  horsepower: number;
  features: string[];
  description: string;
  images: string[];
  isFeatured: boolean;
}

export const cars: CarType[] = [
  {
    id: "1",
    title: "2023 Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2023,
    price: 115000,
    mileage: 5200,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    exteriorColor: "Obsidian Black",
    interiorColor: "Black/Nappa Leather",
    engine: "4.0L V8 Biturbo",
    horsepower: 496,
    features: [
      "Panoramic Roof",
      "Heated Seats",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Blind Spot Monitor",
      "Apple CarPlay",
      "Android Auto",
      "Premium Sound",
      "Lane Assist"
    ],
    description: "Experience luxury like never before with this 2023 Mercedes-Benz S-Class. This executive sedan combines elegant styling with cutting-edge technology for an unparalleled driving experience. The powerful 4.0L V8 Biturbo engine delivers impressive performance while maintaining a smooth and comfortable ride.",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935",
      "https://images.unsplash.com/photo-1555652736-e92021d28a39",
      "https://images.unsplash.com/photo-1518987048-93e29699e79a"
    ],
    isFeatured: true
  },
  {
    id: "2",
    title: "2022 BMW 7 Series",
    brand: "BMW",
    model: "7 Series",
    year: 2022,
    price: 98500,
    mileage: 9800,
    fuelType: "Hybrid",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    exteriorColor: "Alpine White",
    interiorColor: "Cognac Nappa Leather",
    engine: "3.0L I6 Turbo + Electric Motor",
    horsepower: 389,
    features: [
      "Panoramic Roof",
      "Heated Seats",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Blind Spot Monitor",
      "Apple CarPlay",
      "Android Auto",
      "Premium Sound",
      "Lane Assist"
    ],
    description: "This 2022 BMW 7 Series combines luxury and efficiency with its advanced hybrid powertrain. The spacious interior is crafted with premium materials, and the latest technology features ensure a connected and comfortable driving experience. The hybrid system provides impressive fuel economy without compromising on performance.",
    images: [
      "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a"
    ],
    isFeatured: true
  },
  {
    id: "3",
    title: "2023 Audi A8",
    brand: "Audi",
    model: "A8",
    year: 2023,
    price: 87900,
    mileage: 3500,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    exteriorColor: "Mythos Black",
    interiorColor: "Valcona Leather/Black",
    engine: "3.0L V6 Turbo",
    horsepower: 335,
    features: [
      "Panoramic Roof",
      "Heated Seats",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Blind Spot Monitor",
      "Apple CarPlay",
      "Android Auto",
      "Premium Sound",
      "Lane Assist"
    ],
    description: "This 2023 Audi A8 represents the pinnacle of Audi's luxury sedan lineup. With its sleek design and advanced technology, it offers a refined driving experience. The spacious interior features premium materials and cutting-edge amenities that cater to both driver and passengers.",
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
      "https://images.unsplash.com/photo-1543785832-0b6cadd31ba3",
      "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f"
    ],
    isFeatured: false
  },
  {
    id: "4",
    title: "2021 Tesla Model S",
    brand: "Tesla",
    model: "Model S",
    year: 2021,
    price: 79900,
    mileage: 12000,
    fuelType: "Electric",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    exteriorColor: "Pearl White",
    interiorColor: "Black",
    engine: "Dual Motor Electric",
    horsepower: 670,
    features: [
      "Autopilot",
      "Glass Roof",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Blind Spot Monitor",
      "Premium Sound",
      "Lane Assist",
      "Full Self Driving Hardware",
      "Supercharging Capability"
    ],
    description: "This 2021 Tesla Model S offers incredible performance with zero emissions. The dual motor all-wheel drive system delivers instant torque and impressive acceleration. The minimalist interior features a large touchscreen that controls most vehicle functions. With Autopilot capabilities and long-range battery, this Model S represents the future of luxury motoring.",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
      "https://images.unsplash.com/photo-1551826152-d7248d8a8c18",
      "https://images.unsplash.com/photo-1566055909643-a51b4271d2bf"
    ],
    isFeatured: true
  },
  {
    id: "5",
    title: "2022 Porsche 911 Carrera S",
    brand: "Porsche",
    model: "911 Carrera S",
    year: 2022,
    price: 135000,
    mileage: 7500,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "Coupe",
    exteriorColor: "GT Silver Metallic",
    interiorColor: "Black Leather",
    engine: "3.0L Twin-Turbo Flat-6",
    horsepower: 443,
    features: [
      "Sport Chrono Package",
      "Heated Seats",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Bose Sound System",
      "Apple CarPlay",
      "Lane Change Assist",
      "Adaptive Sport Seats",
      "Carbon Fiber Interior Package"
    ],
    description: "This 2022 Porsche 911 Carrera S embodies the perfect balance of luxury and performance. With its iconic design and precision engineering, it delivers an exhilarating driving experience on both road and track. The twin-turbo flat-six engine produces remarkable power and an unmistakable sound that defines the 911 legacy.",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c"
    ],
    isFeatured: false
  },
  {
    id: "6",
    title: "2022 Range Rover Sport",
    brand: "Land Rover",
    model: "Range Rover Sport",
    year: 2022,
    price: 89500,
    mileage: 11200,
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyStyle: "SUV",
    exteriorColor: "Santorini Black",
    interiorColor: "Ebony/Ivory",
    engine: "3.0L I6 Turbo",
    horsepower: 355,
    features: [
      "Panoramic Roof",
      "Heated Seats",
      "Navigation",
      "Bluetooth",
      "Backup Camera",
      "Blind Spot Monitor",
      "Apple CarPlay",
      "Android Auto",
      "Meridian Sound System",
      "Terrain Response System"
    ],
    description: "This 2022 Range Rover Sport combines luxury with outstanding capability. Whether navigating city streets or venturing off-road, this premium SUV delivers confidence and comfort. The spacious interior features high-quality materials and advanced technology, while the powerful engine ensures impressive performance in all conditions.",
    images: [
      "https://images.unsplash.com/photo-1536148935331-408321065b18",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
      "https://images.unsplash.com/photo-1542228891-df556e307a4b"
    ],
    isFeatured: true
  },
];

// Filter options
export const brands = [...new Set(cars.map(car => car.brand))];
export const bodyStyles = [...new Set(cars.map(car => car.bodyStyle))];
export const fuelTypes = [...new Set(cars.map(car => car.fuelType))];
export const years = [...new Set(cars.map(car => car.year))];
export const transmissions = [...new Set(cars.map(car => car.transmission))];

// Price ranges
export const priceRanges = [
  { min: 0, max: 50000, label: 'Under $50,000' },
  { min: 50000, max: 75000, label: '$50,000 - $75,000' },
  { min: 75000, max: 100000, label: '$75,000 - $100,000' },
  { min: 100000, max: 150000, label: '$100,000 - $150,000' },
  { min: 150000, max: Number.MAX_SAFE_INTEGER, label: 'Over $150,000' }
];

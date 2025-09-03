// types/car.ts
export interface Car {
    id: string;
    year: number;
    make: string;
    model: string;
    series: string;
    trim: string;
    bodyType: string;
    colors: string[];
    price: number;
  }
  
  // data/cars.ts
  export const carsData: Car[] = [
    // Toyota Vios 2025
    {
      id: "1",
      year: 2025,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 49.99
    },
    {
      id: "2",
      year: 2025,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XLE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 59.99
    },
    {
      id: "3",
      year: 2025,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "G",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 69.99
    },
    // Toyota Vios 2024
    {
      id: "4",
      year: 2024,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 45.99
    },
    {
      id: "5",
      year: 2024,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XLE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 52.99
    },
    // Toyota Camry
    {
      id: "6",
      year: 2025,
      make: "Toyota",
      model: "Camry",
      series: "Camry",
      trim: "LE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 79.99
    },
    {
      id: "7",
      year: 2025,
      make: "Toyota",
      model: "Camry",
      series: "Camry",
      trim: "XLE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Midnight Black"],
      price: 89.99
    },
    {
      id: "8",
      year: 2024,
      make: "Toyota",
      model: "Camry",
      series: "Camry",
      trim: "LE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 74.99
    },
    // Toyota RAV4
    {
      id: "9",
      year: 2025,
      make: "Toyota",
      model: "RAV4",
      series: "RAV4",
      trim: "LE",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 89.99
    },
    {
      id: "10",
      year: 2025,
      make: "Toyota",
      model: "RAV4",
      series: "RAV4",
      trim: "XLE",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Lunar Rock"],
      price: 99.99
    },
    {
      id: "11",
      year: 2024,
      make: "Toyota",
      model: "RAV4",
      series: "RAV4",
      trim: "LE",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 84.99
    },
    // Honda City
    {
      id: "12",
      year: 2025,
      make: "Honda",
      model: "City",
      series: "City",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 54.99
    },
    {
      id: "13",
      year: 2025,
      make: "Honda",
      model: "City",
      series: "City",
      trim: "V",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 64.99
    },
    {
      id: "14",
      year: 2024,
      make: "Honda",
      model: "City",
      series: "City",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 49.99
    },
    // Honda Civic
    {
      id: "15",
      year: 2025,
      make: "Honda",
      model: "Civic",
      series: "Civic",
      trim: "LX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 74.99
    },
    {
      id: "16",
      year: 2025,
      make: "Honda",
      model: "Civic",
      series: "Civic",
      trim: "EX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Sonic Gray"],
      price: 84.99
    },
    {
      id: "17",
      year: 2024,
      make: "Honda",
      model: "Civic",
      series: "Civic",
      trim: "LX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 69.99
    },
    // Honda CR-V
    {
      id: "18",
      year: 2025,
      make: "Honda",
      model: "CR-V",
      series: "CR-V",
      trim: "LX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 89.99
    },
    {
      id: "19",
      year: 2025,
      make: "Honda",
      model: "CR-V",
      series: "CR-V",
      trim: "EX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Sonic Gray"],
      price: 99.99
    },
    {
      id: "20",
      year: 2024,
      make: "Honda",
      model: "CR-V",
      series: "CR-V",
      trim: "LX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 84.99
    },
    // Nissan Almera
    {
      id: "21",
      year: 2025,
      make: "Nissan",
      model: "Almera",
      series: "Almera",
      trim: "EL",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 49.99
    },
    {
      id: "22",
      year: 2025,
      make: "Nissan",
      model: "Almera",
      series: "Almera",
      trim: "VL",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 59.99
    },
    {
      id: "23",
      year: 2024,
      make: "Nissan",
      model: "Almera",
      series: "Almera",
      trim: "EL",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 44.99
    },
    // Nissan Sentra
    {
      id: "24",
      year: 2025,
      make: "Nissan",
      model: "Sentra",
      series: "Sentra",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 64.99
    },
    {
      id: "25",
      year: 2025,
      make: "Nissan",
      model: "Sentra",
      series: "Sentra",
      trim: "SV",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 74.99
    },
    {
      id: "26",
      year: 2024,
      make: "Nissan",
      model: "Sentra",
      series: "Sentra",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 59.99
    },
    // Nissan X-Trail
    {
      id: "27",
      year: 2025,
      make: "Nissan",
      model: "X-Trail",
      series: "X-Trail",
      trim: "EL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 89.99
    },
    {
      id: "28",
      year: 2025,
      make: "Nissan",
      model: "X-Trail",
      series: "X-Trail",
      trim: "VL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Midnight Black"],
      price: 99.99
    },
    {
      id: "29",
      year: 2024,
      make: "Nissan",
      model: "X-Trail",
      series: "X-Trail",
      trim: "EL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 84.99
    },
    // Ford Territory
    {
      id: "30",
      year: 2025,
      make: "Ford",
      model: "Territory",
      series: "Territory",
      trim: "Trend",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 79.99
    },
    {
      id: "31",
      year: 2025,
      make: "Ford",
      model: "Territory",
      series: "Territory",
      trim: "Titanium",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 89.99
    },
    {
      id: "32",
      year: 2024,
      make: "Ford",
      model: "Territory",
      series: "Territory",
      trim: "Trend",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 74.99
    },
    // Ford Ranger
    {
      id: "33",
      year: 2025,
      make: "Ford",
      model: "Ranger",
      series: "Ranger",
      trim: "XLT",
      bodyType: "Pickup",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 94.99
    },
    {
      id: "34",
      year: 2025,
      make: "Ford",
      model: "Ranger",
      series: "Ranger",
      trim: "Wildtrak",
      bodyType: "Pickup",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Orange"],
      price: 109.99
    },
    {
      id: "35",
      year: 2024,
      make: "Ford",
      model: "Ranger",
      series: "Ranger",
      trim: "XLT",
      bodyType: "Pickup",
      colors: ["White", "Black", "Silver", "Red"],
      price: 89.99
    },
    // Mitsubishi Mirage
    {
      id: "36",
      year: 2025,
      make: "Mitsubishi",
      model: "Mirage",
      series: "Mirage",
      trim: "GLX",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 44.99
    },
    {
      id: "37",
      year: 2025,
      make: "Mitsubishi",
      model: "Mirage",
      series: "Mirage",
      trim: "GLS",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 54.99
    },
    {
      id: "38",
      year: 2024,
      make: "Mitsubishi",
      model: "Mirage",
      series: "Mirage",
      trim: "GLX",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red"],
      price: 39.99
    },
    // Mitsubishi Montero Sport
    {
      id: "39",
      year: 2025,
      make: "Mitsubishi",
      model: "Montero Sport",
      series: "Montero Sport",
      trim: "GLX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 89.99
    },
    {
      id: "40",
      year: 2025,
      make: "Mitsubishi",
      model: "Montero Sport",
      series: "Montero Sport",
      trim: "GLS",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 99.99
    },
    {
      id: "41",
      year: 2024,
      make: "Mitsubishi",
      model: "Montero Sport",
      series: "Montero Sport",
      trim: "GLX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 84.99
    },
    // Hyundai Accent
    {
      id: "42",
      year: 2025,
      make: "Hyundai",
      model: "Accent",
      series: "Accent",
      trim: "GLS",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 49.99
    },
    {
      id: "43",
      year: 2025,
      make: "Hyundai",
      model: "Accent",
      series: "Accent",
      trim: "GLX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 59.99
    },
    {
      id: "44",
      year: 2024,
      make: "Hyundai",
      model: "Accent",
      series: "Accent",
      trim: "GLS",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 44.99
    },
    // Hyundai Tucson
    {
      id: "45",
      year: 2025,
      make: "Hyundai",
      model: "Tucson",
      series: "Tucson",
      trim: "GL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 79.99
    },
    {
      id: "46",
      year: 2025,
      make: "Hyundai",
      model: "Tucson",
      series: "Tucson",
      trim: "GLS",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 89.99
    },
    {
      id: "47",
      year: 2024,
      make: "Hyundai",
      model: "Tucson",
      series: "Tucson",
      trim: "GL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 74.99
    },
    // Mazda 3
    {
      id: "48",
      year: 2025,
      make: "Mazda",
      model: "3",
      series: "3",
      trim: "Sedan",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 69.99
    },
    {
      id: "49",
      year: 2025,
      make: "Mazda",
      model: "3",
      series: "3",
      trim: "Hatchback",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Soul Red"],
      price: 74.99
    },
    {
      id: "50",
      year: 2024,
      make: "Mazda",
      model: "3",
      series: "3",
      trim: "Sedan",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 64.99
    },
    // Mazda CX-5
    {
      id: "51",
      year: 2025,
      make: "Mazda",
      model: "CX-5",
      series: "CX-5",
      trim: "Sport",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White"],
      price: 84.99
    },
    {
      id: "52",
      year: 2025,
      make: "Mazda",
      model: "CX-5",
      series: "CX-5",
      trim: "Touring",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue", "Pearl White", "Soul Red"],
      price: 94.99
    },
    {
      id: "53",
      year: 2024,
      make: "Mazda",
      model: "CX-5",
      series: "CX-5",
      trim: "Sport",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 79.99
    },
    // 2023 Models
    {
      id: "54",
      year: 2023,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 42.99
    },
    {
      id: "55",
      year: 2023,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XLE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 49.99
    },
    {
      id: "56",
      year: 2023,
      make: "Toyota",
      model: "Camry",
      series: "Camry",
      trim: "LE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 69.99
    },
    {
      id: "57",
      year: 2023,
      make: "Toyota",
      model: "RAV4",
      series: "RAV4",
      trim: "LE",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 79.99
    },
    {
      id: "58",
      year: 2023,
      make: "Honda",
      model: "City",
      series: "City",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 44.99
    },
    {
      id: "59",
      year: 2023,
      make: "Honda",
      model: "Civic",
      series: "Civic",
      trim: "LX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 64.99
    },
    {
      id: "60",
      year: 2023,
      make: "Honda",
      model: "CR-V",
      series: "CR-V",
      trim: "LX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 79.99
    },
    {
      id: "61",
      year: 2023,
      make: "Nissan",
      model: "Almera",
      series: "Almera",
      trim: "EL",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 39.99
    },
    {
      id: "62",
      year: 2023,
      make: "Nissan",
      model: "Sentra",
      series: "Sentra",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 54.99
    },
    {
      id: "63",
      year: 2023,
      make: "Nissan",
      model: "X-Trail",
      series: "X-Trail",
      trim: "EL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 79.99
    },
    {
      id: "64",
      year: 2023,
      make: "Ford",
      model: "Territory",
      series: "Territory",
      trim: "Trend",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 69.99
    },
    {
      id: "65",
      year: 2023,
      make: "Ford",
      model: "Ranger",
      series: "Ranger",
      trim: "XLT",
      bodyType: "Pickup",
      colors: ["White", "Black", "Silver", "Red"],
      price: 84.99
    },
    {
      id: "66",
      year: 2023,
      make: "Mitsubishi",
      model: "Mirage",
      series: "Mirage",
      trim: "GLX",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red"],
      price: 34.99
    },
    {
      id: "67",
      year: 2023,
      make: "Mitsubishi",
      model: "Montero Sport",
      series: "Montero Sport",
      trim: "GLX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 79.99
    },
    {
      id: "68",
      year: 2023,
      make: "Hyundai",
      model: "Accent",
      series: "Accent",
      trim: "GLS",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 39.99
    },
    {
      id: "69",
      year: 2023,
      make: "Hyundai",
      model: "Tucson",
      series: "Tucson",
      trim: "GL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 69.99
    },
    {
      id: "70",
      year: 2023,
      make: "Mazda",
      model: "3",
      series: "3",
      trim: "Sedan",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 59.99
    },
    {
      id: "71",
      year: 2023,
      make: "Mazda",
      model: "CX-5",
      series: "CX-5",
      trim: "Sport",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 74.99
    },
    // 2022 Models
    {
      id: "72",
      year: 2022,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 39.99
    },
    {
      id: "73",
      year: 2022,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XLE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 46.99
    },
    {
      id: "74",
      year: 2022,
      make: "Toyota",
      model: "Camry",
      series: "Camry",
      trim: "LE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 64.99
    },
    {
      id: "75",
      year: 2022,
      make: "Toyota",
      model: "RAV4",
      series: "RAV4",
      trim: "LE",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 74.99
    },
    {
      id: "76",
      year: 2022,
      make: "Honda",
      model: "City",
      series: "City",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 41.99
    },
    {
      id: "77",
      year: 2022,
      make: "Honda",
      model: "Civic",
      series: "Civic",
      trim: "LX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 59.99
    },
    {
      id: "78",
      year: 2022,
      make: "Honda",
      model: "CR-V",
      series: "CR-V",
      trim: "LX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 74.99
    },
    {
      id: "79",
      year: 2022,
      make: "Nissan",
      model: "Almera",
      series: "Almera",
      trim: "EL",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 36.99
    },
    {
      id: "80",
      year: 2022,
      make: "Nissan",
      model: "Sentra",
      series: "Sentra",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 49.99
    },
    {
      id: "81",
      year: 2022,
      make: "Nissan",
      model: "X-Trail",
      series: "X-Trail",
      trim: "EL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 74.99
    },
    {
      id: "82",
      year: 2022,
      make: "Ford",
      model: "Territory",
      series: "Territory",
      trim: "Trend",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 64.99
    },
    {
      id: "83",
      year: 2022,
      make: "Ford",
      model: "Ranger",
      series: "Ranger",
      trim: "XLT",
      bodyType: "Pickup",
      colors: ["White", "Black", "Silver", "Red"],
      price: 79.99
    },
    {
      id: "84",
      year: 2022,
      make: "Mitsubishi",
      model: "Mirage",
      series: "Mirage",
      trim: "GLX",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red"],
      price: 31.99
    },
    {
      id: "85",
      year: 2022,
      make: "Mitsubishi",
      model: "Montero Sport",
      series: "Montero Sport",
      trim: "GLX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 74.99
    },
    {
      id: "86",
      year: 2022,
      make: "Hyundai",
      model: "Accent",
      series: "Accent",
      trim: "GLS",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 36.99
    },
    {
      id: "87",
      year: 2022,
      make: "Hyundai",
      model: "Tucson",
      series: "Tucson",
      trim: "GL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 64.99
    },
    {
      id: "88",
      year: 2022,
      make: "Mazda",
      model: "3",
      series: "3",
      trim: "Sedan",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 54.99
    },
    {
      id: "89",
      year: 2022,
      make: "Mazda",
      model: "CX-5",
      series: "CX-5",
      trim: "Sport",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 69.99
    },
    // 2021 Models
    {
      id: "90",
      year: 2021,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 36.99
    },
    {
      id: "91",
      year: 2021,
      make: "Toyota",
      model: "Vios",
      series: "Vios",
      trim: "XLE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 43.99
    },
    {
      id: "92",
      year: 2021,
      make: "Toyota",
      model: "Camry",
      series: "Camry",
      trim: "LE",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 59.99
    },
    {
      id: "93",
      year: 2021,
      make: "Toyota",
      model: "RAV4",
      series: "RAV4",
      trim: "LE",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 69.99
    },
    {
      id: "94",
      year: 2021,
      make: "Honda",
      model: "City",
      series: "City",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 38.99
    },
    {
      id: "95",
      year: 2021,
      make: "Honda",
      model: "Civic",
      series: "Civic",
      trim: "LX",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 54.99
    },
    {
      id: "96",
      year: 2021,
      make: "Honda",
      model: "CR-V",
      series: "CR-V",
      trim: "LX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 69.99
    },
    {
      id: "97",
      year: 2021,
      make: "Nissan",
      model: "Almera",
      series: "Almera",
      trim: "EL",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver"],
      price: 33.99
    },
    {
      id: "98",
      year: 2021,
      make: "Nissan",
      model: "Sentra",
      series: "Sentra",
      trim: "S",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 44.99
    },
    {
      id: "99",
      year: 2021,
      make: "Nissan",
      model: "X-Trail",
      series: "X-Trail",
      trim: "EL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 69.99
    },
    {
      id: "100",
      year: 2021,
      make: "Ford",
      model: "Territory",
      series: "Territory",
      trim: "Trend",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 59.99
    },
    {
      id: "101",
      year: 2021,
      make: "Ford",
      model: "Ranger",
      series: "Ranger",
      trim: "XLT",
      bodyType: "Pickup",
      colors: ["White", "Black", "Silver", "Red"],
      price: 74.99
    },
    {
      id: "102",
      year: 2021,
      make: "Mitsubishi",
      model: "Mirage",
      series: "Mirage",
      trim: "GLX",
      bodyType: "Hatchback",
      colors: ["White", "Black", "Silver", "Red"],
      price: 28.99
    },
    {
      id: "103",
      year: 2021,
      make: "Mitsubishi",
      model: "Montero Sport",
      series: "Montero Sport",
      trim: "GLX",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 69.99
    },
    {
      id: "104",
      year: 2021,
      make: "Hyundai",
      model: "Accent",
      series: "Accent",
      trim: "GLS",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red"],
      price: 33.99
    },
    {
      id: "105",
      year: 2021,
      make: "Hyundai",
      model: "Tucson",
      series: "Tucson",
      trim: "GL",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red"],
      price: 59.99
    },
    {
      id: "106",
      year: 2021,
      make: "Mazda",
      model: "3",
      series: "3",
      trim: "Sedan",
      bodyType: "Sedan",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 49.99
    },
    {
      id: "107",
      year: 2021,
      make: "Mazda",
      model: "CX-5",
      series: "CX-5",
      trim: "Sport",
      bodyType: "SUV",
      colors: ["White", "Black", "Silver", "Red", "Blue"],
      price: 64.99
    }
  ];
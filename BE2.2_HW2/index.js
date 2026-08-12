const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();


// 1 & 2. CREATE HOTELS

const newHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: [
    "https://example.com/hotel1-photo1.jpg",
    "https://example.com/hotel1-photo2.jpg",
  ],
};


const newHotel2 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};


async function createHotel(hotelData) {
  try {
    const hotel = new Hotel(hotelData);

    const savedHotel = await hotel.save();

    console.log("New Hotel:", savedHotel);
  } catch (error) {
    console.log("Error creating hotel:", error);
  }
}




createHotel(newHotel);
createHotel(newHotel2);


// 3. READ ALL HOTELS

async function getAllHotels() {
  try {
    const hotels = await Hotel.find();

    console.log("All Hotels:", hotels);
  } catch (error) {
    console.log("Error fetching hotels:", error);
  }
}


// 4. READ HOTEL BY NAME

async function getHotelByName(hotelName) {
  try {
    const hotel = await Hotel.findOne({
      name: hotelName,
    });

    console.log("Hotel:", hotel);
  } catch (error) {
    console.log("Error fetching hotel:", error);
  }
}


// 5. HOTELS WITH PARKING

async function getHotelsWithParking() {
  try {
    const hotels = await Hotel.find({
      isParkingAvailable: true,
    });

    console.log("Hotels with parking:", hotels);
  } catch (error) {
    console.log("Error fetching hotels:", error);
  }
}


// 6. HOTELS WITH RESTAURANT

async function getHotelsWithRestaurant() {
  try {
    const hotels = await Hotel.find({
      isRestaurantAvailable: true,
    });

    console.log("Hotels with restaurant:", hotels);
  } catch (error) {
    console.log("Error fetching hotels:", error);
  }
}


// 7. HOTELS BY CATEGORY

async function getHotelsByCategory(category) {
  try {
    const hotels = await Hotel.find({
      category: category,
    });

    console.log("Hotels by category:", hotels);
  } catch (error) {
    console.log("Error fetching hotels:", error);
  }
}


// 8. HOTELS BY PRICE RANGE

async function getHotelsByPriceRange(priceRange) {
  try {
    const hotels = await Hotel.find({
      priceRange: priceRange,
    });

    console.log("Hotels by price range:", hotels);
  } catch (error) {
    console.log("Error fetching hotels:", error);
  }
}


// 9. HOTELS BY RATING

async function getHotelsByRating(rating) {
  try {
    const hotels = await Hotel.find({
      rating: rating,
    });

    console.log("Hotels with rating:", hotels);
  } catch (error) {
    console.log("Error fetching hotels:", error);
  }
}


// 10. HOTEL BY PHONE NUMBER

async function getHotelByPhoneNumber(phoneNumber) {
  try {
    const hotel = await Hotel.findOne({
      phoneNumber: phoneNumber,
    });

    console.log("Hotel:", hotel);
  } catch (error) {
    console.log("Error fetching hotel:", error);
  }
}


// FUNCTION CALLS

// getAllHotels();

// getHotelByName("Lake View");

// getHotelsWithParking();

// getHotelsWithRestaurant();

// getHotelsByCategory("Mid-Range");

// getHotelsByPriceRange("$$$$ (61+)");

// getHotelsByRating(4.0);

// getHotelByPhoneNumber("+1299655890");
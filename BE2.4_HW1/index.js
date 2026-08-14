const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

// 1. Create Somi restaurant

const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg",
  ],
};

// 2. Create Yo China restaurant

const newRestaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};


// 2. UPDATE RESTAURANT BY NAME
// Change Somi to Som Sarovar

async function updateRestaurantDetail(restaurantName, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      dataToUpdate,
      {
        new: true,
      },
    );

    console.log("Updated Restaurant:", updatedRestaurant);
  } catch (error) {
    console.log("Error in changing restaurant data:", error);
  }
}

// updateRestaurantDetail("Somi", { name: "Som Sarovar" });


// 1. DELETE RESTAURANT BY ID

async function deleteRestaurantById(restaurantId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(
      restaurantId,
    );

    console.log("Deleted Restaurant:", deletedRestaurant);
  } catch (error) {
    console.log("Error deleting restaurant:", error);
  }
}

deleteRestaurantById("6a797aa4d6ffcf2eab1b1424");


// 2. DELETE RESTAURANT BY NAME

async function deleteRestaurantByName(restaurantName) {
  try {
    const deletedRestaurant = await Restaurant.findOneAndDelete({
      name: restaurantName,
    });

    console.log("Deleted Restaurant:", deletedRestaurant);
  } catch (error) {
    console.log("Error deleting restaurant:", error);
  }
}

deleteRestaurantByName("Som Sarovar");
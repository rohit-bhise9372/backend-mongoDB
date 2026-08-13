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


// Create restaurant function

async function createRestaurant(restaurantData) {
  try {
    const restaurant = new Restaurant(restaurantData);

    const savedRestaurant = await restaurant.save();

    console.log("New Restaurant:", savedRestaurant);
  } catch (error) {
    console.log("Error creating restaurant:", error);
  }
}


// 3. Read all restaurants

async function getAllRestaurants() {
  try {
    const restaurants = await Restaurant.find();

    console.log("All Restaurants:", restaurants);
  } catch (error) {
    console.log("Error fetching restaurants:", error);
  }
}


// 4. Read restaurant by name

async function getRestaurantByName(name) {
  try {
    const restaurant = await Restaurant.findOne({ name });

    console.log("Restaurant:", restaurant);
  } catch (error) {
    console.log("Error fetching restaurant:", error);
  }
}


// 5. Read restaurants offering reservations

async function getRestaurantsWithReservations() {
  try {
    const restaurants = await Restaurant.find({
      reservationsNeeded: true,
    });

    console.log("Restaurants offering reservations:", restaurants);
  } catch (error) {
    console.log("Error:", error);
  }
}


// 6. Read restaurants offering delivery

async function getRestaurantsWithDelivery() {
  try {
    const restaurants = await Restaurant.find({
      isDeliveryAvailable: true,
    });

    console.log("Restaurants offering delivery:", restaurants);
  } catch (error) {
    console.log("Error:", error);
  }
}


// 7. Read restaurant by phone number

async function getRestaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurant = await Restaurant.findOne({
      phoneNumber: phoneNumber,
    });

    console.log("Restaurant:", restaurant);
  } catch (error) {
    console.log("Error:", error);
  }
}


// 8. Read restaurants by cuisine

async function getRestaurantsByCuisine(cuisine) {
  try {
    const restaurants = await Restaurant.find({
      cuisine: cuisine,
    });

    console.log("Restaurants with Italian cuisine:", restaurants);
  } catch (error) {
    console.log("Error:", error);
  }
}


// Function calls

// createRestaurant(newRestaurant);

// createRestaurant(newRestaurant2);

// getAllRestaurants();

// getRestaurantByName("New Restaurant");

// getRestaurantsWithReservations();

// getRestaurantsWithDelivery();

// getRestaurantByPhoneNumber("+1288997392");

// getRestaurantsByCuisine("Italian");



// 1. UPDATE RESTAURANT BY ID
// Update Yo China rating from 3.9 to 4.1

async function updateRestaurant(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      {
        new: true,
      }
    );

    console.log("Updated Restaurant:", updatedRestaurant);
  } catch (error) {
    console.log("Error in updating restaurant:", error);
  }
}

updateRestaurant("6a7c1107a352b52e04f8a932", { rating: 4.1 });


// 2. UPDATE RESTAURANT BY NAME
// Change Somi to Som Sarovar

async function updateRestaurantDetail(
  restaurantName,
  dataToUpdate
) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      dataToUpdate,
      {
        new: true,
      }
    );

    console.log("Updated Restaurant:", updatedRestaurant);
  } catch (error) {
    console.log("Error in changing restaurant data:", error);
  }
}


 updateRestaurantDetail("Somi", { name: "Som Sarovar" });


// 3. UPDATE RESTAURANT BY PHONE NUMBER
// Update delivery availability to true

async function updateRestaurantByPhone(
  phoneNumber,
  dataToUpdate
) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { phoneNumber: phoneNumber },
      dataToUpdate,
      {
        new: true,
      }
    );

    console.log("Updated Restaurant:", updatedRestaurant);
  } catch (error) {
    console.log("Error in updating restaurant:", error);
  }
}


updateRestaurantByPhone(
  "+1288997392",
  { isDeliveryAvailable: true }
);



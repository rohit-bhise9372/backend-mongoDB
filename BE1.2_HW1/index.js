// const { initializeDatabase } = require("./db/db.connect");
// const fs = require("fs");
// // const movie = require("./models/movie.models");
// const Movie = require("./models/movie.models");
// initializeDatabase();

// const jsonData = fs.readFileSync("movies.json", "utf-8");
// const moviesData = JSON.parse(jsonData);

// function seeData() {
//   try {
//     for (const movieData of moviesData) {
//       const newMovie = new Movie({
//         title: movieData.title,
//         releaseYear: movieData.releaseYear,
//         genre: movieData.genre,
//         director: movieData.director,
//         actors: movieData.actors,
//         language: movieData.language,
//         country: movieData.country,
//         rating: movieData.rating,
//         plot: movieData.plot,
//         awards: movieData.awards,
//         posterUrl: movieData.posterUrl,
//         trailerUrl: movieData.trailerUrl,
//       });
        
//         newMovie.save();

//     //   console.log(newMovie.title);
//     }
//   } catch (error) {
//     console.log("Error seeding the data", error);
//   }
// }

// seeData()

const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Profile = require("./models/profile.models");

initializeDatabase();

const jsonData = fs.readFileSync("profiles.json", "utf-8");
const profilesData = JSON.parse(jsonData);

async function seedData() {
  try {
    for (const profileData of profilesData) {
      const newProfile = new Profile({
        fullName: profileData.fullName,
        username: profileData.username,
        bio: profileData.bio,
        profilePicUrl: profileData.profilePicUrl,
        followingCount: profileData.followingCount,
        followerCount: profileData.followerCount,
        companyName: profileData.companyName,
        location: profileData.location,
        portfolioUrl: profileData.portfolioUrl,
      });

      await newProfile.save();

      console.log(newProfile.fullName);
    }
  } catch (error) {
    console.log("Error seeding the data", error);
  }
}

seedData();
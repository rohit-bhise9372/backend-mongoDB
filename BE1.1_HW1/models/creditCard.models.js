const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
  bankName: String,
  cardNumber: Number,
  cardHolderName: String,
  expiryDate: String,
  cardType: String,
  chipImageUrl: String,
  cardLogoImageUrl: String,
});

const CreditCard = mongoose.model("CreditCard", CreditCardSchema);

module.exports = CreditCard;
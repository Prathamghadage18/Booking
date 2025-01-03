const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a booking
router.post("/", async (req, res) => {
  try {
    const { name, contact, guests, date, time } = req.body;

    // Check for double booking
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ error: "Slot already booked" });
    }

    const newBooking = new Booking({ name, contact, guests, date, time });
    await newBooking.save();
    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a booking
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

"use client";

import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    guests: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", form);
      alert("Booking successful!");
      setForm({ name: "", contact: "", guests: "", date: "", time: "" });
    } catch (err) {
      alert(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="contact"
        placeholder="Contact"
        value={form.contact}
        onChange={handleChange}
        required
      />
      <input
        name="guests"
        type="number"
        placeholder="Guests"
        value={form.guests}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        name="time"
        type="time"
        value={form.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Book Table</button>
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function AvailabilityDisplay() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booked Slots</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.date} at {booking.time} - {booking.name} ({booking.guests}{" "}
            guests)
          </li>
        ))}
      </ul>
    </div>
  );
}

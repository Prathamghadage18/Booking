import BookingForm from "./components/BookingForm";
import AvailabilityDisplay from "./components/AvailabilityDisplay";

export default function HomePage() {
  return (
    <main>
      <h1>Restaurant Table Booking System</h1>
      <BookingForm />
      <AvailabilityDisplay />
    </main>
  );
}

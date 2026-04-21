import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBookings() {
      try {
        const response = await fetch("http://192.168.1.200:5000/api/bookings");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch bookings");
        }

        setBookings(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error loading bookings:", err);
        setError("Failed to load bookings.");
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />

      <main style={{ padding: "40px 20px", minHeight: "100vh", backgroundColor: "#f5fff7" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px", color: "green" }}>
          All Bookings
        </h1>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

        {!loading && !error && bookings.length === 0 && (
          <p style={{ textAlign: "center" }}>No bookings found.</p>
        )}

        {!loading && !error && bookings.length > 0 && (
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {bookings.map((booking) => (
              <div
                key={booking.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "16px",
                  marginBottom: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <p><strong>Name:</strong> {booking.full_name}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Travel Date:</strong> {booking.travel_date}</p>
                <p><strong>Created At:</strong> {booking.created_at}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default BookingsPage;

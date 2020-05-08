export async function fetchBookings() {
    let response = await fetch('http://localhost:8000/api/bookings/SalKhan');
    let data = await response.json();
    data = data.map(booking => ({
        ...booking,
        time: new Date(booking.time)
    }))
    setBookings(data);
}
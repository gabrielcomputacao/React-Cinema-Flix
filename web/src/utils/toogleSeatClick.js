export function toogleSeatClick(seat, setSelectedSeats) {
  setSelectedSeats((prev) =>
    prev.includes(seat) ? prev.filter((i) => i !== seat) : [...prev, seat]
  );
}

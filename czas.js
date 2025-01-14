function calculateTimeDifference(start, end) {
    // Zamiana godzin na obiekty Date
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);

    const startDate = new Date(0, 0, 0, startHours, startMinutes);
    const endDate = new Date(0, 0, 0, endHours, endMinutes);

    // Obliczenie różnicy w milisekundach
    let diff = endDate - startDate;

    // Jeśli różnica jest ujemna, dodajemy 24 godziny (obsługa przejścia przez północ)
    if (diff < 0) {
        diff += 24 * 60 * 60 * 1000;
    }

    // Konwersja różnicy na godziny i minuty
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}min`;
}

// Przykład użycia
const start = "12:45";
const end = "13:15";

console.log(calculateTimeDifference(start, end)); // Wyjście: 0h 30min

// Bar Chart = stapeldiagram

// createBarChart(data): Skapar ett stapeldiagram från datan.

// Stapeldiagram logik:

// Bestäm maxvärdet i datan för att skala diagrammet korrekt.
// Skapa rektanglar (bars) för varje datapunkt.
// Beräkna x- och y-koordinaterna för varje rektangel

class BarChart {
    constructor(data) {
        this.data = data
    }

    render() {
        // Logik för att rita ett stapeldiagram baserat på this.data
        return '<svg>...diagrammet...</svg>'
    }
}
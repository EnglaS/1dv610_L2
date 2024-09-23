// Bar Chart = stapeldiagram

// createBarChart(data): Skapar ett stapeldiagram från datan.

// Stapeldiagram logik:

// Bestäm maxvärdet i datan för att skala diagrammet korrekt.
// Skapa rektanglar (bars) för varje datapunkt.
// Beräkna x- och y-koordinaterna för varje rektangel

export class BarChart {
    constructor(data) {
        this.data = data
    }

    render() {
        // Variabler för att styra storleken på diagrammet
        const chartWidth = 500
        const chartHeight = 300
        const barWidth = 50
        const barSpacing = 20
        const maxDataValue = Math.max(...this.data.map(d => d.value))

        // Skapa SVG-elementet med korrekt namnrymd
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('width', chartWidth)
        svg.setAttribute('height', chartHeight)
        svg.setAttribute('style', 'background: #eee;')

        // Loopa igenom data och skapa rektanglar för varje datapunkt
        this.data.forEach((item, index) => {
            const barHeight = (item.value / maxDataValue) * chartHeight

            // Skapa en rektangel för varje stapel
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
            rect.setAttribute('x', index * (barWidth + barSpacing))
            rect.setAttribute('y', chartHeight - barHeight) // Placera den från botten
            rect.setAttribute('width', barWidth)
            rect.setAttribute('height', barHeight)
            rect.setAttribute('fill', 'teal')

            // Lägg till rektangeln i SVG-elementet
            svg.appendChild(rect)

            // Skapa en textlabel under varje stapel
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
            text.setAttribute('x', index * (barWidth + barSpacing) + barWidth / 2)
            text.setAttribute('y', chartHeight + 15) // Placera den under stapeln
            text.setAttribute('text-anchor', 'middle')
            text.textContent = item.label
            svg.appendChild(text)
        })

        // Returnera SVG-elementets yttre HTML som en sträng
        return svg.outerHTML
    }
}
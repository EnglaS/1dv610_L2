// createLineChart(data): Skapar ett linjediagram från datan

// Linjediagram logik:

// Räkna ut koordinaterna för varje datapunkt.
// Skapa en linje som går genom alla datapunkter

export class LineChart {
    constructor(data) {
        this.data = data
    }

    render() {
        // Variabler för att styra storleken på diagrammet
        const chartWidth = 1000
        const chartHeight = 300
        const maxDataValue = Math.max(...this.data.map(d => d.value))
        const pointSpacing = chartWidth / (this.data.length - 1) // Avstånd mellan punkterna
        const labelSpacing = 40
        const padding = 40
        const totalHeight = chartHeight + labelSpacing

        // Skapa SVG-elementet med korrekt namnrymd
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('width', chartWidth + padding * 2)
        svg.setAttribute('height', totalHeight + padding)
        svg.setAttribute('style', 'background: #eee;')

        // Skapa en sträng för punkter på linjen
        let points = ""

        this.data.forEach((item, index) => {
            // Beräkna x- och y-koordinater för varje datapunkt
            const x = index * pointSpacing + padding
            const y = chartHeight - (item.value / maxDataValue) * chartHeight + padding

            points += `${x},${y} ` // Lägg till punkten till strängen

            // Skapa en cirkel för varje datapunkt
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            circle.setAttribute('cx', x)
            circle.setAttribute('cy', y)
            circle.setAttribute('r', 4) // Radien för punkten
            circle.setAttribute('fill', 'teal')

            // Lägg till cirkeln i SVG-elementet
            svg.appendChild(circle)

            // Skapa en textlabel under varje punkt
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
            text.setAttribute('x', x)
            text.setAttribute('y', chartHeight + padding + 15) // Placera den under punkten
            text.setAttribute('text-anchor', 'middle')
            text.textContent = item.label
            svg.appendChild(text)

            // Skapa en textlabel för värde
            const värdeText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
            värdeText.setAttribute('x', x)
            värdeText.setAttribute('y', y - 20) // Placera den under punkten
            värdeText.setAttribute('text-anchor', 'middle')
            värdeText.setAttribute('font-size', '14px');  // Set font size
            värdeText.setAttribute('fill', 'black');      // Set text color
            värdeText.textContent = item.value
            svg.appendChild(värdeText)
        })

        //Skapa en polyline för att koppla samman datapunkterna
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
        polyline.setAttribute('points', points.trim()) // Lägg till alla punkter
        polyline.setAttribute('fill', 'none')
        polyline.setAttribute('stroke', 'teal')
        polyline.setAttribute('stroke-width', 2)

        // Lägg till linjen i SVG-elementet
        svg.appendChild(polyline)

        // Returnera SVG-elementets yttre HTML som en sträng
        return svg.outerHTML
    }
}
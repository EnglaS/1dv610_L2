const data = [
    { label: "January", value: 40 },
    { label: "February", value: 25 },
    { label: "March", value: 35 }
]

const barChart = new BarChart(data)
document.body.innerHTML = barChart.render()  // Renderar SVG-koden för stapeldiagrammet
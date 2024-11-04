import { ChartLibrary } from '../src/ChartLibrary.js'

const dataTc0103 = [
    {"label": "January", "value": 40},
    {"label": "February", "value": 25},
    {"label": "March", "value": 35}
]

const dataTc0204 = [
    {"label": "January", "value": -10},
    {"label": "February", "value": 20},
    {"label": "March", "value": -5}
]

const charts = new ChartLibrary

// Create header
const header = document.createElement('h1')
header.textContent = 'Test ChartLibrary'
document.body.appendChild(header)


// TC01
createBarChart('Testfall TC01: Verifiera att stapeldiagram skapas korrekt', dataTc0103)

// TC02
createBarChart('Testfall TC02: Hantering av negativa värden i stapeldiagram', dataTc0204)

// TC03
createLineChart('Testfall TC03: Verifiera att linjediagram skapas korrekt', dataTc0103)

// TC04
createLineChart('Testfall TC04: Hantering av negativa värden i linjediagram', dataTc0204)

function createBarChart (headerText, data) {
    const header = document.createElement('h2')
    header.textContent = headerText
    document.body.appendChild(header)

    // create barChart
    const barChart = charts.createBarChart(data)
    const chartContainer = document.createElement('div')
    chartContainer.innerHTML = barChart
    document.body.appendChild(chartContainer)
}

function createLineChart (headerText, data) {
    const header = document.createElement('h2')
    header.textContent = headerText
    document.body.appendChild(header)

    // create lineChart
    const lineChart = charts.createLineChart(data)
    const lineChartContainer = document.createElement('div')
    lineChartContainer.innerHTML = lineChart
    document.body.appendChild(lineChartContainer)
}


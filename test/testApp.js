import { ChartLibrary } from '../src/ChartLibrary.js'

const data = [
    { label: "This", value: 40 },
    { label: "Is", value: 25 },
    { label: "An", value: 35 },
    { label: "Example", value: 50 },
    { label: "Of", value: 5 },
    { label: "Bar", value: 15 },
    { label: "Chart", value: 45 }
]

const charts = new ChartLibrary

// create barChart
const barChart = charts.createBarChart(data)
const chartContainer = document.createElement('div')
chartContainer.innerHTML = barChart
document.body.appendChild(chartContainer)

// create lineChart
const lineChart = charts.createLineChart(data)
const lineChartContainer = document.createElement('div')
lineChartContainer.innerHTML = lineChart
document.body.appendChild(lineChartContainer)
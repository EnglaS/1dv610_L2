import { BarChart} from '../src/BarChart.js'

console.log('testApp.js is running')

const data = [
    { label: "January", value: 40 },
    { label: "February", value: 25 },
    { label: "March", value: 35 },
    { label: "April", value: 50 },
    { label: "May", value: 5 },
    { label: "June", value: 15 },
    { label: "July", value: 45 },
    { label: "August", value: 10 },
    { label: "September", value: 35 }
]


const barChart = new BarChart(data)
const chartContainer = document.createElement('div')
chartContainer.innerHTML = barChart.render()

document.body.appendChild(chartContainer)
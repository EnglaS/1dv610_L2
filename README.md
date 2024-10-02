## Förklaring av koden i BarChart.js:
* createElementNS används för att skapa SVG-element med namnutrymme.
* Staplarna placeras med hjälp av x- och y-attributen baserat på deras index och värden.
* Etiketter placeras under varje stapel med hjälp av <text>-element och placeras i mitten av varje stapel med `text-anchor: middle`.

### Hur du använder klassen:
För att använda denna klass och generera ett stapeldiagram med SVG baserat på din data kan du göra så här:

```javascript
const data = [
    {"label": "January", "value": 40},
    {"label": "February", "value": 25},
    {"label": "March", "value": 35}
]

const chart = new BarChart(data)
document.body.innerHTML = chart.render()
```

## Förklaring av koden i LineChart.js:
* Polyline: Ett <polyline>-element används för att koppla samman alla datapunkter. Det tar en sträng med punkternas koordinater (x, y) och ritar en linje genom dem.
* Cirkel: Varje datapunkt är markerad med en liten cirkel, vilket gör det lättare att visuellt identifiera punkterna på linjen.
* Textetiketter: Precis som i stapeldiagrammet, placeras textetiketter under varje datapunkt.

## Exempel på användning av ChartLibrary:

```javascript
import { ChartLibrary } from '../src/ChartLibrary.js'

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
```
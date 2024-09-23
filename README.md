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
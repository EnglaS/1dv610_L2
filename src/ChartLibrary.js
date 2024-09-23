// Detta är huvudklassen som hanterar genereringen av de olika diagramtyperna

class ChartLibrary {
    
    /**
     * Creates a bar chart based on sent in data.
     *
     * @param {JSON} data - data to be used in bar chart.
     */
    createBarChart(data) {
        const data = [
            {"label": "January", "value": 40},
            {"label": "February", "value": 25},
            {"label": "March", "value": 35}
        ]
        
        const chart = new BarChart(data)
        // document.body.innerHTML = chart.render()
        const svgBarChart = chart.render()
    }

    createLineChart(data) {

    }

    createPieChart(data) {

    }
}
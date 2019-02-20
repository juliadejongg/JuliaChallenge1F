var line = new CanvasJS.Chart("lineChart",{
    backgroundColor: "#edf0f9",
    animationEnabled: true,
    data: [{
    type: "line",
    lineColor: "#081F7B", //kleur van de lijn veranderd
        dataPoints : [
	    { label: "Fristi",  y: 39 , markerColor: "#C14021"}, //kleuren van de bolletjes aangepast
        { label: "Appelsap", y: 31 , markerColor: "#005EB8"},
        { label: "Tomatensap",  y: 50 , markerColor: "#C14021"},
        { label: "Chocomel",  y: 26 , markerColor: "#005EB8"},
	    { label: "Cola", y: 21 , markerColor: "#C14021"},
	    { label: "Fanta",  y: 41 , markerColor: "#005EB8"},
        { label: "Sprite",  y: 43 , markerColor: "#C14021"},
        { label: "Ice Tea",  y: 20 , markerColor: "#005EB8"}
	]
    }]
});
line.render();



CanvasJS.addColorSet("pieShades", 
        [//Een eigen kleurset aangemaakt om de kleuren te veranderen 

        "#081F7B", //donkerblauw
        "#C14021", //oranje achtig
        "#B6B0A9", //grijs
        "#005EB8", //lichtblauw               
    ]);

var pie = new CanvasJS.Chart("pie", {
    colorSet:  "pieShades",
    exportEnabled: false,
    animationEnabled: true, //Ik heb bij alle grafieken animatie aangezet, dat ziet er wat leuker uit
    backgroundColor: "#edf0f9",
    data: [{
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 18,
        indexLabel: "{label}",
        dataPoints: [
            { y: 51.08, label: "Drinken" },
            { y: 27.34, label: "Eten" },
            { y: 10.62, label: "Boeken" },
            { y: 5.02, label: "Kleding" },

        ]
    }]
});
pie.render();
    

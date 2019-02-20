var weather = new CanvasJS.Chart("weather", {            
    backgroundColor: "#edf0f9",
    animationEnabled: true,
    axisY: {
        includeZero: false,
        suffix: " °C",
        maximum: 50,
        gridThickness: 0
    },
    toolTip:{
        shared: true,
        content: "{name} </br> <strong>Temperatuur: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C" 
    },
    data: [{ 
        type: "rangeSplineArea",
        fillOpacity: 0.1,
        color: "#91AAB1",
        lineColor: "#081F7B",
        indexLabelFormatter: formatter,
        dataPoints: [ // Alle woorden die je ziet Nederlands gemaakt
            { label: "Maandag", y: [20, 31], name: "regen" , markerColor: "#C14021" }, //Classes voor rain, sunny en cloudy aangepast naar Nederlands
            { label: "Dinsdag", y: [21, 37], name: "bewolkt", markerColor: "#005EB8" },
            { label: "Woensdag", y: [20, 39], name: "zonnig", markerColor: "#C14021" },
            { label: "Donderdag", y: [16, 32], name: "regen" , markerColor: "#005EB8" },
            { label: "Vrijdag", y: [28, 40], name: "zonnig" , markerColor: "#C14021"},
            { label: "Zaterdag", y: [22, 39], name: "zonnig", markerColor: "#005EB8" },
            { label: "Zondag", y: [23, 40], name: "zonnig" , markerColor: "#C14021"}
        ]
    }]
});
weather.render();

var images = [];    

addImages(weather);

function addImages(chart) {
    for(var i = 0; i < weather.data[0].dataPoints.length; i++){
        var dpsName = weather.data[0].dataPoints[i].name;
        if(dpsName == "bewolkt"){
            images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/cloudy.png"));
        } else if(dpsName == "regen"){
        images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/rainy.png"));
        } else if(dpsName == "zonnig"){
            images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/sunny.png"));
        }

    images[i].attr("class", dpsName).appendTo($("#weather>.canvasjs-chart-container"));
    positionImage(images[i], i);
    }
}

function positionImage(image, index) {
    var imageCenter = weather.axisX[0].convertValueToPixel(weather.data[0].dataPoints[index].x);
    var imageTop =  weather.axisY[0].convertValueToPixel(weather.axisY[0].maximum);

    image.width("40px")
    .css({ "left": imageCenter - 20 + "px",
    "position": "absolute","top":imageTop + "px",
    "position": "absolute"});
}

$( window ).resize(function() {
    var cloudyCounter = 0, rainyCounter = 0, sunnyCounter = 0;    
    var imageCenter = 0;
    for(var i=0;i<weather.data[0].dataPoints.length;i++) {
        imageCenter = weather.axisX[0].convertValueToPixel(weather.data[0].dataPoints[i].x) - 20;
        if(weather.data[0].dataPoints[i].name == "bewolkt") {					
            $(".bewolkt").eq(cloudyCounter++).css({ "left": imageCenter});
        } else if(weather.data[0].dataPoints[i].name == "regen") {
            $(".regen").eq(rainyCounter++).css({ "left": imageCenter});  
        } else if(weather.data[0].dataPoints[i].name == "zonnig") {
            $(".zonnig").eq(sunnyCounter++).css({ "left": imageCenter});  
        }                
    }
});

function formatter(e) { 
    if(e.index === 0 && e.dataPoint.x === 0) {
        return " Min " + e.dataPoint.y[e.index] + "°";
    } else if(e.index == 1 && e.dataPoint.x === 0) {
        return " Max " + e.dataPoint.y[e.index] + "°";
    } else{
        return e.dataPoint.y[e.index] + "°";
    }
} 


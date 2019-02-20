CanvasJS.addColorSet("columnShades",
        [//Eigen kleurset gemaakt
        "#081F7B", //donkerblauw
        "#C14021", //oranje achtig
        "#B6B0A9", //grijs
        "#0D0D45", //heel donkerblauw
        "#091024", //echt heel donkerblauw
        "#C14021", //oranje achtig
        "#0D0D45", //heel donkerblauw
        "#005EB8", //lichtblauw
    ]);

    var column = new CanvasJS.Chart("columnChart",{
    backgroundColor: "#edf0f9",
    animationEnabled: true, 
    colorSet:  "columnShades",
    data: [{
	type: "column",
	dataPoints : [
	    { label: "Pinda's",  y: 25 , },
        { label: "Cashewnoten", y: 19  },
        { label: "Kaasplank", y: 21  },
        { label: "Crackers", y: 31  },
	    { label: "Worst", y: 27  },
	    { label: "Banaan",  y: 34  },
        { label: "Appel",  y: 11  },
        { label: "Manderijn",  y: 18  }
	]
    }]
});
 
column.render();
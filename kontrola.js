var boja;

function slucaj(event) {
    var x = event.clientX;
    var y = event.clientY;

    document.getElementById("xc").innerHTML = x;
    document.getElementById("yc").innerHTML = y;

    boja = x * 0.0625;

    document.body.style = "background: linear-gradient(90deg, rgba(1,0,10,1) 0%, rgba(5,35,255,1) " + boja + "%, rgba(0,212,255,1) 100%)"
}

/* ovde vrsim novi unos podataka u verziju koja ne bi smela da bude promenjena ako se ja PerformanceNavigationTiming. Branch je grana a mi furamo working tree */
var KontentDelivery = window['kontentDelivery'];

var deliveryClient = KontentDelivery.createDeliveryClient({
    projectId: 'c5c47978-33d9-0022-146a-e31bed62d5ec'
});

deliveryClient
    .items()
    .toPromise()
    .then((response) => {
        console.log(response)
        //slides
        var slides = response.data.items[3].elements.imagenes.value;
        console.log(slides);
        document.getElementById("slide1").src = slides[0].url;
        document.getElementById("slide2").src = slides[1].url;
        document.getElementById("slide3").src = slides[2].url;

        //content
        var consejo1 = response.data.items[4].elements;
        document.getElementById("img-content-1").src = consejo1.imagen.value[0].url;
        document.getElementById("text-content-1").innerHTML = "<h3>" + consejo1.texto.value + "</h3>" + consejo1.bajada.value;

        var consejo2 = response.data.items[2].elements;
        document.getElementById("img-content-2").src = consejo2.imagen.value[0].url;
        document.getElementById("text-content-2").innerHTML = "<h3>" + consejo2.texto.value + "</h3>" + consejo2.bajada.value;

        var consejo3 = response.data.items[0].elements;
        document.getElementById("img-content-3").src = consejo3.imagen.value[0].url;
        document.getElementById("text-content-3").innerHTML = "<h3>" + consejo3.texto.value + "</h3>" + consejo3.bajada.value;

        console.log(consejo3);
        var consejo4 = response.data.items[1].elements;
        document.getElementById("img-content-4").src = consejo4.imagen.value[0].url;
        document.getElementById("text-content-4").innerHTML = "<h3>" + consejo4.texto.value + "</h3>" + consejo4.bajada.value;

    });
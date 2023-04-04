var modelo = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KaTencVf0/model.json", modelolisto);

Webcam.set({
    with:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camara");

function take(){
    Webcam.snap(function(datauri){
        document.getElementById("resultado").innerHTML ='<img id="foto" src=" ' + datauri + '">';
    });
}

function modelolisto(){
    console.log("Ya quede");
}

function mostrar(){
    var foto = document.getElementById("foto");
    modelo.classify(foto, rf);
}

function rf(error, resultado){
    if (!error){
        console.log(resultado);
        var name = resultado[0].label;
        document.getElementById("sig_name").innerText = name;
        switch(name){
            case "Bien":
                document.getElementById("signal").innerHTML = "&#128077";
                break;
            case "Corazon":
                document.getElementById("signal").innerHTML = "🫰";
                break;
            case "Broma":
                document.getElementById("signal").innerHTML = "🤙";
                break;
            case "Ok":
                document.getElementById("signal").innerHTML = "&#128076";
                break;
            case "I Love You":
                document.getElementById("signal").innerHTML = "🤟";
                break;
            case "Dedos cruzados":
                document.getElementById("signal").innerHTML = "🤞";
                break;
            case "Paz":
                document.getElementById("signal").innerHTML = "✌️";
                break;
                default:break;
        }
        hablar("La señal es:" + name )
}
}

function hablar(mensaje){
    var decir = window.speechSynthesis;
    var leer = new SpeechSynthesisUtterance(mensaje);
    leer.lang = "es-MX";
    decir.speak(leer);
}
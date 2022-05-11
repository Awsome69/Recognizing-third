function startClassification()
{
navigator.mediaDevices.getUserMedia({ aduio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gwyZIEY7P/model.json", modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error, results) {
if (error) {
console.error(error);
} else {
console.log(results);
rgred = Math.floor(Math.random() * 255) + 1;
rgblue = Math.floor(Math.random() * 255) + 1;
rggreen = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +rgred+","+rgblue+","+rggreen+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +rgred+","+rgblue+","+rggreen+")";




   if (results[0].label == "Background Noise") {
    img.src = 'Back.jpeg';
    } if (results[0].label == "barks") {
   img.src = 'dog.jpeg';
} if (results[0].label == "meowing") {
    img.src = 'cat.jpeg';
}

}
}

Webcam.set({
    width: 350,
    height: 280,
    image_format: "png",
    png_quality: 100
});
var camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(photosource) {
        document.getElementById("result").innerHTML = '<img id="photo" src="' + photosource + '">';
    });
}

var gesturemodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/r0GfKfrQv/model.json", modelloaded);

function modelloaded() {
    console.log("model loaded");
}

function check() {
    var photo = document.getElementById("photo");
    gesturemodel.classify(photo, getresults);
}

function getresults(errors, results) {
    if (errors) {
        console.error(errors);
    } else {
        console.trace(results);

        result1 = results[0].label;

        if (result1 == "good") {
            document.getElementById("result_emoji").innerHTML = "&#128076;";
        }
        if (result1 == "bad") {
            document.getElementById("result_emoji").innerHTML = "&#128078;";
        }
        if (result1 == "victory") {
            document.getElementById("result_emoji").innerHTML = "&#9996;";
        }
    }
}
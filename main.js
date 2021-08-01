function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Mk2AR93Sy/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " +results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " +(results[0].confidence*100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        image1 = document.getElementById("alien1");
        image2 = document.getElementById("alien2");
        image3 = document.getElementById("alien3");
        image4 = document.getElementById("alien4");

        if(results[0].label == "Clap"){
            image1.src = "aliens-01.gif";
            image2.src = "aliens-02.png";
            image3.src = "aliens-03.png";
            image4.src = "aliens-04.png";
        }
        else if(results[0].label == "Snoring"){
            image1.src = "aliens-01.png";
            image2.src = "aliens-02.gif";
            image3.src = "aliens-03.png";
            image4.src = "aliens-04.png"; 
        }
        else if(results[0].label == "Yell"){
            image1.src = "aliens-01.png";
            image2.src = "aliens-02.png";
            image3.src = "aliens-03.gif";
            image4.src = "aliens-04.png"; 
        }
        else{
            image1.src = "aliens-01.png";
            image2.src = "aliens-02.png";
            image3.src = "aliens-03.png";
            image4.src = "aliens-04.gif"; 
        }
    }
 }

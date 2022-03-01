function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sLfCzjdCd/model.json',modelReady);
}

function modelReady()
{
    Classifier.classify(gotResults);
}

function gotResults(error , results)
{
    if(error){
     console.error(error);
    }
    else{
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_confidence").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('animals');

        if(results[0].label == "dog barking")
        {
           img = 'dog.jpeg';
        }
        else if(results[0].label == "cat meowing")
        {
           img = 'cat.jpeg';
        }
        else if(results[0].label == "lion roaring")
        {
           img = 'lion.jpeg';
        }
        else if(results[0].label == "parrot screeching")
        {
            img = 'parrot.jpeg';
        }     
        else
        {
           img = 'ear.jpeg';
        }
    }
}
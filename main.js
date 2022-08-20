//https://teachablemachine.withgoogle.com/models/S6PXWgiSP/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S6PXWgiSP/model.json', modelReady);
    }
    
    function modelReady(){
    classifier.classify(gotResults);
    
    }
    function gotResults(error, results){
    
    }

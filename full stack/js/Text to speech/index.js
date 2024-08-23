var speech=new SpeechSynthesisUtterance();


function speak(){

    speech.text =textspeech.value;
    speech.rate=1;
    speech.volume=50;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

}
const HelloSpeaker = {
    speakWord: 'Hello',
};

(function() {
    HelloSpeaker.speak = function(userName) {
        return (HelloSpeaker.speakWord + " " + userName);
    }
}());

const ByeSpeaker = {
    speakWord: 'Bye',
};

(function() {
    ByeSpeaker.speak = function(userName) {
        return (ByeSpeaker.speakWord + " " + userName);
    }
}());


(function() {
    var names = ['Akhila','Binto','Jithin','Kalyani','Jannet','Janaki','Prithvi','Elenor','Janice','Ria'];
    for(var i = 0; i<names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();
        if(firstLetter === 'j'){
            console.log(ByeSpeaker.speak(name));
            document.write(ByeSpeaker.speak(name) + '<br>');
        }
        else{
            console.log(HelloSpeaker.speak(name));
            document.write(HelloSpeaker.speak(name) + '<br>');
        }
    }
})();


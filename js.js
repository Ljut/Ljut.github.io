function songToPlay(layer=0) {
        let songLyrics="sounds/audio_tiny44.wav";
        let songNoLyrics="sounds/catch-action.wav";
        console.log(layer);
        let path="";
        for(i=0;i<layer;i++) {
                path+="../";
        }
        if(document.getElementById("lyrics").checked==true) {
                console.log("Sviraj s textom");
                path+=songLyrics;
                document.getElementById("pjesma").src=path;
        }
        else {
                console.log("Ne Sviraj s textom")
                path+=songNoLyrics;
                document.getElementById("pjesma").src=path;
        }
    }
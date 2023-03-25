function songToPlay(layer=0) {
        let x = document.getElementById("opis");
        let y = document.getElementById("naslov");
        let z = document.getElementById("tekst");

        let songLyrics="sounds/Beet_with_song.mp3";
        let songNoLyrics="sounds/Beet_without_song.mp3";
        console.log(layer);
        let path="";
        for(i=0;i<layer;i++) {
                path+="../";
        }
        if(document.getElementById("lyrics").checked==true) {
                
                console.log("Sviraj s textom");
                path+=songLyrics;
                document.getElementById("pjesma").src=path;

                x.style.display = "block";
                y.style.display = "block";
                z.style.display = "block";
        }
        else {
                console.log("Ne Sviraj s textom")
                path+=songNoLyrics;
                document.getElementById("pjesma").src=path;

                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "none";
        }
        
          
          
          

    }
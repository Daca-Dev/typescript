(() => {

    // ayuda en el trabajo de varibales
    // con sentido semantico
    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10,
    }

    let currentAudio = AudioLevel.medium;

    console.log( currentAudio );
    console.log( AudioLevel );
})()
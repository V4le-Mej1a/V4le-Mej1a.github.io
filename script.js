let app = document.getElementById("typewriter");

let typewriter=new Typewriter(app, {
    loop: true, //bucle de eventos
    delay: 75, //tiempo que toma el caracter para aprecer en el DOM
});

typewriter
    .pauseFor(2500)//agrega evento de pausa a la cola por milisegundo
    .typeString('Juego con mi gato y veo videos de tik tok')
    .pauseFor(200)
    .deleteChars(10)//Borra los caracteres de la cola de la cadena
    .start()//inicia el bucle de eventos

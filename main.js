var quotes=[
    "La vida tiende a ser positiva si se lo permites. ", "Esperar duele, pero recoger los frutos de tu siembra es un gozo. ", "La clave del éxito reside en las decisiones. ", "Cualquier sueño es plausible si eres lo suficientemente tenaz como para luchar por él. ", "Si está en tu mente, puedes convertirlo en real. ", "Si la vida te da limones, haz limonada. ", "La paz interior surge cuando uno aprende a amarse a sí mismo. ", "Inténtalo de nuevo, inténtalo mejor. Fracasa de nuevo, fracasa mejor. ", "Gracias a todos los que no me ayudaron. Hoy me siento satisfecho de haber logrado las cosas por mí mismo. ", "El día puede ser bueno o malo, eso depende de tu conducta. "
];

function newQuote(){
   var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}
//Inseriamo in pagina l’immagine della lampadina spenta 
// che trovate in allegato e accanto un bottone con la scritta “Accendi”.
const button = document.getElementById('toggleButton');
const lampImage = document.getElementById('lampImage');

button.addEventListener('click', function() {
    lampImage.src = '/img/yellow_lamp.png'; // Cambia l'immagine della lampadina accesa
}); 
//Al click del bottone, la lampadina dovrà accendersi 


// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

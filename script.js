var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // verifier si l'input n'est pas vide
    if (inputField.value  !="") {
        // si l'input n'est pas vide, creer un paragraphe
        var paragraphe = document.createElement('p')
    }
    // valorisez ce paragraphe avec le contenu de l'input
    paragraphe.innerText = inputField.value;

    // styliser le paragraphe
    paragraphe.classList.add('paragraphe_style')

    // inserez le paragraphe dans l'element toDoContainer
    toDoContainer.appendChild(paragraphe);

    // videz l'input quand le paragraphe est ajouter
    inputField.value = "";

    // barrez le paragraphe quand on clique dessus
    paragraphe.addEventListener('click', function(){
        paragraphe.classList.add('paragraphe.click');
    })

    // supprimez la tache quand on double click sur la tache
    paragraphe.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraphe);
    })
}
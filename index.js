let search = document.querySelector('pin');

search.addEventListener('change',()=>{
    let searchValue  = search.value
    let texts = document.getElementsByClassName('text');

    texts.array.forEach(text => {
        showText = text.querySelector()
        text.style.display = 'none'
    });
})
function setLang(lang){
  document.querySelectorAll('.lang').forEach(el=>{
    el.classList.remove('active')
  })
  document.querySelector('.'+lang).classList.add('active')
}

function openPopup(){
  document.getElementById('popup').classList.add('active')
}

function closePopup(){
  document.getElementById('popup').classList.remove('active')
}

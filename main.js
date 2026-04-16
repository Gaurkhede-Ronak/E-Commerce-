const navlist = document.getElementById('navlist');
const hamburgar = document.getElementById('hamburgar');

// click Event


hamburgar.addEventListener('click', ()=>{

    navlist.classList.toggle('navlist-active')
})
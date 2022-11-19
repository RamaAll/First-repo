let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    if(this.scrollY > 100){
    navbar.classList.add('nav-dark')
}else{
    navbar.classList.remove('nav-dark')
}
});
const navHeader = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
let hero = document.querySelector('navbar');
if(this.window.pageYOffset > 0){
     
     navHeader.classList.add('navbar-sticky')
}else{
     navHeader.classList.remove('navbar-sticky')
}
});
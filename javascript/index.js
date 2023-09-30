const tabItem= document.querySelectorAll('.tab-item');
const tabContent= document.querySelectorAll('.tab-content-item');

tabItem.forEach(item => item.addEventListener('click',selectItem));

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    console.log(this.id)
    const tabContentShow= document.querySelector(`#${this.id}-content`)
    tabContentShow.classList.add('show');
}
function removeBorder(){
    tabItem.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContent.forEach(item => item.classList.remove('show'));
}

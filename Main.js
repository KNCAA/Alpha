function rain () {
    let amount = 40;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount){
        let drop = document.createElement('i');

        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * 0;
        let duration = Math.random() * 9;

        drop.style.width = 0.2 + size+'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay+'s';
        drop.style.animationDuration =1 + duration+'s';
        body.appendChild(drop);
        i++
    }
}
rain();


function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show');
        } else{
        change.target.classList.remove('show');
        }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements){
    observer.observe(elm);
}


function changeWidth() {
    var scroll = (window.pageYOffset / 13.1);
    var width = scroll;

    document.getElementById('expand').style.width = width + '%';
  }

  window.addEventListener('scroll', function(){
    requestAnimationFrame(changeWidth);
})


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0)
})
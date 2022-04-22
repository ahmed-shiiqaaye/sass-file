let counters = document.getElementsByClassName('counter');
let speed = 20;

for (let i = 0; i < counters.length; i++) {
    let counter = counters[i] 
    const updateCount = () =>{
        let tartget = +counter.getAttribute('data-target');
        let count = +counter.innerText;
        let inc = tartget / speed;

        if(count < tartget){
            counter.innerText = count + inc;
                setTimeout(updateCount,100)
        }else{
            counter.innerText = tartget;
        }
    }  
    window.addEventListener('DOMContentLoaded', updateCount() )
   
}

let dropDown = document.querySelector('.drop-down');
let drop = document.querySelector('.down');
dropDown.addEventListener('onmouseover',() =>{
    drop.style.display = 'block'
})
dropDown.addEventListener('onmouseout',() =>{
    drop.style.display = 'none'
})

let signIn = document.querySelector('.sign-in');
let signBtns = document.querySelectorAll('.entroll');
let closeBtn = document.querySelector('.close-btn');

signIn.style.display = 'none'
for (let i = 0; i < signBtns.length; i++) {
    let signBtn = signBtns[i]  
    
    signBtn.onclick = () =>{
        signIn.style.display = 'block'
    }
    closeBtn.onclick = () =>{
        signIn.style.display = 'none'

    }

}
    

console.log('hello')
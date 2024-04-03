const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.body;
const heading= document.querySelector(".heading");
// console.log(heading);

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='crimson'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="white";
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='orange'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="white";
        }
        if(e.target.id==='lightblue'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="white";
        }
        if(e.target.id==='violet'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='lavender'){
            body.style.backgroundColor="#c56686";
            heading.style.color="white";
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="white";
        }
        
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="black";
        }
        if(e.target.id==='black'){
            body.style.backgroundColor=e.target.id;
            heading.style.color="white";
        }
        
    })
})

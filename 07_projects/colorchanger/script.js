const body=document.querySelector('body');
const buttons=document.querySelectorAll('.buttons');

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.id==='lightpink'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='white'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='blue'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='lime'){
            body.style.backgroundColor=event.target.id;
        }
    })
})
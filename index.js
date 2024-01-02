const btn=document.querySelectorAll('.button');
const body=document.querySelector('body');
console.log(btn);
btn.forEach((button)=>{
    console.log(button);
    button.addEventListener('mouseover',(e)=>{
        console.log(e);
        console.log(e.target);
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor='grey';
                break;
                case 'yellow':
                    body.style.backgroundColor='yellow';
                    break;
                    case 'blue':
                        body.style.backgroundColor='blue';
                        break;
                        case 'white':
                            body.style.backgroundColor='white';
                            break;
                            default:
                            body.style.backgroundColor='white';
        }
    })
})
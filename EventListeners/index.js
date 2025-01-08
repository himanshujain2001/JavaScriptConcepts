let para = document.getElementById('event-listener');
let anchorTag = document.getElementById('anchor-tag');

function performAction(event){
    console.log(event); // event type pta chal jaayega isme
    para.textContent = "Event listener added"
}

function changeDefaultBehaviour(event){
    event.preventDefault(); // it will stop it's default behaviour
    event.target.textContent = "This is an anchor tag" // target property ka use kr k apan jispe event hua h uski info nikal skte h
    // event.target.textContent is equal to anchorTag.textContent here
}

para.addEventListener('click',performAction);
// para.addEventListener('click', performAction, true);
// para.removeEventListener('click',performAction);

anchorTag.addEventListener('click',changeDefaultBehaviour);


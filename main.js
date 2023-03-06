
const getId = (id) =>{
    return document.getElementById(id);
}


// new documnet create 
const documentCreate = (left,top) => {
    let span = document.createElement("span");
    span.style.left = `${left}px`;
    span.style.top = `${top}px`;
    return span;
    
};


// Time out function 

const TimeFunction = (span) => {
    setTimeout(() => {
        span.style.display = "none";
    },500)
};

// btn 1 
document.getElementById("button1").addEventListener("click",(e) => {
    let parentDiv = getId("btn1");
    let left = e.offsetX;
    let top = e.offsetY;
    let myDocument = documentCreate(left,top);
    parentDiv.appendChild(myDocument);
    TimeFunction(myDocument);

});

// btn 2 
document.getElementById("button2").addEventListener("click",(e) => {
    let parentDiv = getId("btn2");
    let left = e.offsetX;
    let top = e.offsetY;
    let myDocument = documentCreate(left,top);
    parentDiv.appendChild(myDocument);
    TimeFunction(myDocument);

});
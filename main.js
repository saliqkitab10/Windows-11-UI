
let startButton = document.getElementById("startbutton")
let startMenu = document.getElementsByClassName("startmenu")[0]  /* returns all the elements in the class in the form of an array */

let searchButton = document.getElementById("searchbutton")
let searchMenu = document.getElementsByClassName("searchmenu")[0]

 let widgetButton = document.getElementById("widgetbutton")
 let widgetMenu = document.getElementsByClassName("widgetmenu")[0]

let fileExplorer = document.getElementById("fileExplorer")
let fileMenu = document.getElementsByClassName("filemenu")[0]

let storeButton = document.getElementById("storebutton")
let store = document.getElementsByClassName("microsoftstore")[0]


startButton.addEventListener("click",()=>{ 

    if(startMenu.style.bottom == "-650px"){ // if start menu is closed
        startMenu.style.bottom = "55px" //start menu opens
        widgetMenu.style.left = "-950px" //widget menu closes
        searchMenu.style.bottom = "-660px" // search menu closes
        store.style.top = "-800px" // store menu closes
        fileMenu.style.top = "-700px" //file explorer closes
        
    }else{ // if start menu is open
        startMenu.style.bottom = "-650px" // start menu closes
    }
})

searchButton.addEventListener("click",()=>{  

    if(searchMenu.style.bottom == "-660px"){
        searchMenu.style.bottom = "55px"
        widgetMenu.style.left = "-950px"
        startMenu.style.bottom = "-650px"
        store.style.top = "-800px" 
        fileMenu.style.top = "-700px" 
        
    }else{
        searchMenu.style.bottom = "-660px"
    }

})

widgetButton.addEventListener("click",()=>{

    if(widgetMenu.style.left == "-950px"){
        widgetMenu.style.left = "0px"
        startMenu.style.bottom = "-650px"
        store.style.top = "-800px" 
        fileMenu.style.top = "-700px" 
        searchMenu.style.bottom = "-660px"
        
    }else{
        widgetMenu.style.left = "-950px"
    }

})

fileExplorer.addEventListener("click",()=>{
    
    if(fileMenu.style.top == "-700px"){
        fileMenu.style.top = "100px"
        startMenu.style.bottom = "-650px"
        searchMenu.style.bottom = "-660px"
        widgetMenu.style.left = "-950px"
        store.style.top = "-800px"
        
    }else{
        fileMenu.style.top = "-700px"
    }
    
})


storeButton.addEventListener("click",()=>{

    if(store.style.top == "-800px"){
        store.style.top = "50px"
        startMenu.style.bottom = "-650px"
        searchMenu.style.bottom = "-660px"
        widgetMenu.style.left = "-950px"
        fileMenu.style.top = "-700px"
        
    }else{
        store.style.top = "-800px"
    }

})

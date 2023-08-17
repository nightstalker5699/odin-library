document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".click").forEach((button)=>{
        button.addEventListener("click",()=>{
            document.querySelector(".main").classList.toggle("see")
            document.querySelector(".second").classList.toggle("see")
        })
    })
    document.querySelector(".submit").addEventListener("click",(event)=>{
        addBook()
})



})







const library = []


function Book(name,author,numberOfPages,readed){
    this.name= name;
    this.author= author
    this.numberOfPages = numberOfPages
    this.readed = readed
    this.info = ()=>{
        return`${name} By ${author}, ${numberOfPages} pages, ${readed}`
    }
}



function deleteBook(index){
    library.splice(index,1)
    loadLibrary()
}


function changeRead(index){
    if(library[index].readed === "yes"){
        library[index].readed = "not yet"
        loadLibrary()
    }
    else if (library[index].readed === "not yet"){
        library[index].readed = "yes"
        loadLibrary()
    }
}

function addBook(){
    const title = document.querySelector("#title")
    const author = document.querySelector("#Author")
    const pages = document.querySelector("#pages")
    const read = displayRadioValue()
    if(title.value && author.value && pages.value && read) {
    const book = new Book(title.value,author.value,pages.value,read.value)
    library.push(book)
    document.querySelector(".main").classList.toggle("see")
    document.querySelector(".second").classList.toggle("see")
    title.value = ""
    author.value=""
    pages.value=""
    read.checked = false
    document.querySelector(".box").innerHTML=`
        <label for="title">Title:</label>
        <input required id = "title" type="text">`
    loadLibrary()
    }
    else{
        document.querySelector(".box").innerHTML=`please enter the data correctly <br>
        <label for="title">Title:</label>
        <input required value ="${title.value}"id = "title" type="text">`
    }
}

function loadLibrary(){
    document.querySelector(".library").innerHTML = ""
    for(book in library) {
        const div = document.createElement("div")
        div.className="book"
        div.innerHTML= ` <div class="detailscon">
        <span class="details">Title: ${library[book].name}</span>
        <span class="details">Author: ${library[book].author}</span>
        <span class="details">Pages: ${library[book].numberOfPages}</span>
        <span class="details">read: ${library[book].readed}</span>
        <span class="details">
            <button onclick=changeRead(${book}) class="change" data-index = "${book}">change read</button>
            <button onclick = deleteBook(${book}) class="delete" data-index = "${book}"> delete</button>
        </span>
    </div>`
    document.querySelector(".library").append(div)
    }

}

function displayRadioValue() {
    var ele = document.getElementsByName('read');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i]
    }
}


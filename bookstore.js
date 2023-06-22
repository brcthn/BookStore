var data = [];
fetch('https://api.jsonbin.io/b/5d6fd038fc5937640ce286a1')
    .then(function (data) {
        return data.json();
    }).then(function (apiData) {
        data = apiData;
        getImage();
    })

function getImage() {
    document.getElementById("main").innerHTML = "";
    var input = document.getElementById("myInput").value.toUpperCase();
    
    data.books
        .filter(function (book) {
            return book.title.toUpperCase().includes(input);

        })
        .map(function (book) {
            var cards = document.createElement("div");
            cards.id = "cards";
            cards.className = "card";


            var flipcardinner = document.createElement("div");
            flipcardinner.className = "flipCardinner";
           
            cards.appendChild(flipcardinner)
            document.getElementById("main").appendChild(cards)

            var flipCardfront = document.createElement("div");
            flipCardfront.className = "flipCardfront";

            var flipcardback = document.createElement("div");
            flipcardback.className = "flipcardback";

            var image = document.createElement("img");
            image.src = book.cover;
            image.id = "cover";
            flipCardfront.appendChild(image);
          
            var newbutton = document.createElement("button")
            newbutton.setAttribute('class', 'btn btn-primary')
            newbutton.setAttribute('data-toggle', 'modal')
            newbutton.setAttribute('data-target', '#exampleModalCenter')
            newbutton.innerHTML = "Detail"
           
            newbutton.onclick=function() { setUrl(book.detail); }
        

            var title = document.createTextNode(book.title);
            var description = document.createTextNode(book.description);
            var language = document.createTextNode(book.language);

            var titlediv=document.createElement("div");
            titlediv.id='name';
            titlediv.appendChild(title);

            var descriptiondiv=document.createElement("div");
            descriptiondiv.id='text';
            descriptiondiv.appendChild(description);


            var languagediv=document.createElement("div");
            languagediv.id='language';
            languagediv.appendChild(language);

            flipcardback.appendChild(title);
            flipcardback.appendChild(descriptiondiv);
            flipcardback.appendChild(languagediv);
            flipcardback.appendChild(newbutton)
           

            flipcardinner.appendChild(flipcardback);
            flipcardinner.appendChild(flipCardfront);
        });   
}

function setUrl(url){   
    imgUrl.src=url;
}
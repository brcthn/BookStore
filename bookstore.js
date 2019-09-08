var data = [];
fetch('https://api.jsonbin.io/b/5d6fd038fc5937640ce286a1')
    .then(function (data) {
        return data.json();
    }).then(function (apiData) {
        data = apiData;
        // console.log(data)
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
             //button
            // var buttondiv=document.createElement("div");
            // var button = document.createElement("button");
            // button.innerHTML = "Detail"
            // button.id = "imageButton"
            // buttondiv.appendChild(button);
            
            var newbutton = document.createElement("button")
            newbutton.setAttribute('class', 'btn btn-primary')
            newbutton.setAttribute('data-toggle', 'modal')
            newbutton.setAttribute('data-target', '#exampleModalCenter')
            newbutton.innerHTML = "Detail"
           
            newbutton.onclick=function() { hasan(book.detail); }
        
            
            // '<button type="button" class="btn btn-primary"   value="Detail" data-toggle="modal" data-target="#exampleModalCenter">Detail</button>'
              
 
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
            // flipcardback.appendChild(buttondiv);
            flipcardback.appendChild(newbutton)
           

            flipcardinner.appendChild(flipcardback);
            flipcardinner.appendChild(flipCardfront);
        });   
}
 
  function hasan(url){   
    imgUrl.src=url;
  }



//     var imageUrl=document.createElement("img");
//      var src=document.createElement("src");
//      imageUrl.src=book.detail;
//      imageUrl.setAttribute('class', 'd-block w-100');
//      imageUrl.appendChild(src);   
//     document.getElementById("imgg").appendChild(imageUrl);
//  }



        
  
 const toSelect = document.getElementById("toSelect");
 
 function menu(){document.getElementById('navbar').style.display = 'flex';}

// je crée un tableau pour quatre livres..

let livres = [
    {
        titre : 'Good Book',
        auteur : 'Mehmet CAM',
        prix : 50,
        photo :'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        resume : 'hele ixix hele heleee vay vay vay'
    }
    ,
    {
        titre : 'Bad Book',
        auteur : 'Seher CAM',
        prix : 10,
        photo :'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
        resume : 'hele huru hele heleee vay vay vay'
    }
    ,
    {
        titre : 'Crazy Book',
        auteur : 'Serap CAM',
        prix : 40,
        photo :'https://cdn11.bigcommerce.com/s-zb4ffa3sum/images/stencil/1280x1280/products/9958/10221/Mouse-ELISA-Assays-1__13174.1533165897.jpg?c=2?imbypass=on',
        resume : 'kukuru hele hele heleee vay vay vay'
    }
    ,
    {
        titre : 'Crying Book',
        auteur : 'Ali CAM',
        prix : 15,
        photo : 'https://media.istockphoto.com/photos/closeup-of-lion-panthera-leo-8-years-old-in-front-of-white-background-picture-id944272094?k=6&m=944272094&s=612x612&w=0&h=J4pjHVFfW10BaZ4bZ06sirxbNdcw4rBu4DDkVHflMSk=',
        resume : 'cigi hele hele heleee vay vay vay'
    }
];


// c bon :)

//1ere partie

function afficheRecommandations(){

    



    // Je crée un let pour placer les 3 premiers element dedans.

    // let booktitre1 = document.createElement("p");
    // let node1 = document.createTextNode(livres[0].titre);
    // booktitre1.appendChild(node1);

    // let booktitre2 = document.createElement("p");
    // let node2 = document.createTextNode(livres[1].titre);
    // booktitre2.appendChild(node2);

    // let booktitre3 = document.createElement("p");
    // let node3 = document.createTextNode(livres[2].titre);
    // booktitre3.appendChild(node3);

    // console.log(booktitre1);

    // let element = document.getElementById("recos");
    // element.appendChild(booktitre1);
    // element.appendChild(booktitre2);
    // element.appendChild(booktitre3);


    let show = [];

    // j'ai choisi m pour mettre les trois premiers valeurs, ici je vais afficher les livres au hasard...

    for (m = 0; m < 3; m++){

    let number = Math.ceil(Math.random()* 4);  //3 chiffres choisis au hasard 

    console.log(number, 'number')
    

    show.push(number);


    console.log(show)

    
    //console.log(m)

    
    //Je controle si le m donne bien les 3 premiers chiffres (0,1,2)

        // console.log(m) //yes

    //Je l'envoie dans mon let show avec push.

        //show.push(m);

    //J'essaie de voir les prix, titres etc. pour chaque elements

        //console.log(livres[m].titre)

    } 
}



//////////////////////////////// la partie afficheLivres(prixMax) /////////

// premier methode 

let prixMax = 20;

livres.forEach(function(book){
    if(book.prix < prixMax){

        //console.log(livres.prix);

    }
});

//////2

function afficheLivre(prixMax) {
    const filtrer = livres.filter((item) => {
      return item.prix <= prixMax})
    //console.log(filtrer) 
  }
  
  afficheLivre(20);


// 3eme methode
let maxPrix = 20;
let prices = [livres[0].prix,livres[1].prix,livres[2].prix,livres[3].prix]
//console.log(prices);


function controle(price){
    return price < maxPrix;
    
}

//console.log(prices.filter(controle));



// Partie RechercheLivres


 function RechercheLivres(recherche){
    let url= ("https://www.googleapis.com/books/v1/volumes?q="+recherche);
    const abc = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let pasdelivre = JSON.parse(abc.responseText);

            
        }
    }




 } ;
  
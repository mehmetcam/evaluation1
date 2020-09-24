 const toSelect = document.getElementById("toSelect");
 
 function menu(){document.getElementById('navbar').style.display = 'flex';}

let livres = [
    {
        titre : 'Good Book',
        auteur : 'Mehmet CAM',
        prix : '50',
        photo :'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        resume : 'hele ixix hele heleee vay vay vay'
    }
    ,
    {
        titre : 'Bad Book',
        auteur : 'Seher CAM',
        prix : '10',
        photo :'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
        resume : 'hele huru hele heleee vay vay vay'
    }
    ,
    {
        titre : 'Crazy Book',
        auteur : 'Serap CAM',
        prix : '40',
        photo :'https://cdn11.bigcommerce.com/s-zb4ffa3sum/images/stencil/1280x1280/products/9958/10221/Mouse-ELISA-Assays-1__13174.1533165897.jpg?c=2?imbypass=on',
        resume : 'kukuru hele hele heleee vay vay vay'
    }
    ,
    {
        titre : 'Crying Book',
        auteur : 'Ali CAM',
        prix : '15',
        photo : 'https://media.istockphoto.com/photos/closeup-of-lion-panthera-leo-8-years-old-in-front-of-white-background-picture-id944272094?k=6&m=944272094&s=612x612&w=0&h=J4pjHVFfW10BaZ4bZ06sirxbNdcw4rBu4DDkVHflMSk=',
        resume : 'cigi hele hele heleee vay vay vay'
    }
];



function afficheRecommandations(){
    // Je crée un let pour placer les 3 premiers element dedans.

    let show = [];

    // j'ai choisi m pour mettre les trois premiers valeurs

    for (m = 0; m < 3; m++){

    console.log(m)

    // document.getElementById("headera").innerHTML = livres[m].titre;

    // document.getElementById("headerb").innerHTML = livres[m+1].titre;

    // document.getElementById("headerc").innerHTML = livres[m+2].titre;
    
    //Je controle si le m donne bien les 3 premiers chiffres (0,1,2)

        // console.log(m) //yes

    //Je l'envoie dans mon let show avec push.

        show.push(m);

    //J'essaie de voir les prix, titres etc. pour chaque elements

        //console.log(livres[m].titre)

    }

    
   
}






// function afficheLivres(prixMax){

//     prixMax = 20;
//     for(n=0; n < livres.length; n++ )
//     console.log(livres[n].prix)
//     console.log(prixMax)
// }
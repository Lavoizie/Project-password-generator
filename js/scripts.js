//seleção de elementos
 const generatedPasswordButton = document.querySelector("#generate-password");
 const generatedPasswordElement = document.querySelector("#generated-password");

//funções
//Letras, Números e Símbolos
const getLetterLowerCase = () =>{
   return String.fromCharCode( Math.floor(Math.random() *26) +97 );
};

const getLetterUpperCase = () =>{
    return String.fromCharCode( Math.floor(Math.random() *26) +65 );
 };

 const getNumber = () => {
    return Math.floor(Math.random() *10).toString();
 }

 const getSynbol = () => {
    const symbols = "()-+=&*%¨#$!@{}[]?/<>"
    return symbols[Math.floor(Math.random()* symbols.length)];
 }

console.log(getSynbol());

//eventos
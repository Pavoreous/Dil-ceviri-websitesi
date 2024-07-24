//prototype,ajax,callback


EventListener();

function EventListener(){
    
    document.getElementById("translate-form").addEventListener("submit",translateword);
    //change
    document.getElementById("language_target").onchange=function(){
         
        ui.changeUI();
        //Arayüz işlemleri gerçekleşecek
        // if(this.value=="en"){
        //     const image= document.getElementById("outputImage");
        //     const label =document.getElementById("outputLanguage");
        //     image.src="images/en.png"; 
        //     label.textContent= "İngilizce";  
            
        // }else if (this.value=="es") {
        //     const image =document.getElementById("outputImage");
        //     const label =document.getElementById("outputLanguage");
        //     image.src="images/es.png" ;
        //     label.textContent= "İspanyolca";  

                        
        // }else if (this.value=="de") {
        //     const image =document.getElementById("outputImage");
        //     const label =document.getElementById("outputLanguage");
        //     image.src="images/de.png" ; 
        //     label.textContent= "Almanca";   
        // }

    }
}
const ui=new UI();
const translate=new Translate(document.getElementById("word").value,document.getElementById("language_target").value,document.getElementById("language_select").value);
function translateword(e){

    translate.changeParametrs(document.getElementById("word").value,document.getElementById("language_target").value,document.getElementById("language_select").value);

    translate.translateWord(function(err,response){
        if(err==null){
            
            //response yazılacak herhangi bir hata olmadığı için içeri gircek
            console.log(response+"Reesp")
            ui.displayTranslate(response);
        
        }else{
            ui.displayTranslate("Bir hata Meydana geldi çevirirken");
        }

    });


    e.preventDefault();
}
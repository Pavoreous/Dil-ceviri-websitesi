function UI(){
   this.image= document.getElementById("outputImage");
   this.label =document.getElementById("outputLanguage");
   this.word =document.getElementById("outputWord");

   this.language=document.getElementById("language_target");
}
UI.prototype.changeUI=function(){
   //Arayüz Değiştir
   this.image.src=`images/${this.language.value}.png`; 
   const index=this.language.selectedIndex;
   this.label.textContent=this.language.options[index].textContent;



}

UI.prototype.displayTranslate=function(word){
  
   this.word.textContent=word;
}
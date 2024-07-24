
function Translate(word, language_target,language_select) {
  this.word = word;
  this.language_target = language_target;
  this.language_select=language_select
  //XHR obje 

  this.xhr = new XMLHttpRequest();


}


Translate.prototype.translateWord = function (callback) {
  //Ajax işlemi
  const url = `https://api.mymemory.translated.net/get?q=${this.word}&langpair=${this.language_select}|${this.language_target}`


  this.xhr.open("GET", url);


  this.xhr.onload = () => {


    if (this.xhr.status === 200) {
      console.log(this.word);
      console.log(this.language_target);

      console.log(JSON.parse(this.xhr.responseText).responseData.translatedText);

      callback(null, JSON.parse(this.xhr.responseText).responseData.translatedText);

    } else {
      console.log("Hata")
      callback("bir hata oluştu", null)
    }




  }
  this.xhr.send();

};
Translate.prototype.changeParametrs = function (newWord, newLanguage,language_select) {
  this.word = newWord;
  this.language_target = newLanguage;
  this.language_select=language_select
}
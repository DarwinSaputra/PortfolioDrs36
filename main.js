const TeksEl =['Mahasiswa', 'Trader' ];
let count = 0;
let Teksidx = 0;
let currentTeks = '';
let words = '';

(function ketik(){

   if(count == TeksEl.length){
    count=0;
   }
   currentTeks=TeksEl[count];
   word = currentTeks.slice(0, ++Teksidx);
   document.querySelector('.efek-ketik'). textContent = word;

   if (word.length == currentTeks.length){
      count++;
      Teksidx=0;
   }

   setTimeout(ketik, 500);

})();

function numInword(num) {
  if(num === 0){
      return ''

  }else{
      let kamus = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']

      if(num < 11){
          return kamus[num] + numInword(num % num) 

      }else if(num < 2e1){
          let belas = num % 1e1
          return numInword(belas) + ' belas '

      }else if(num >= 2e1 && num < 1e2){
          return numInword(Math.floor(num/1e1)) + ' puluh ' + numInword(num % 1e1) 

      }else if(num >= 1e2 && num < 2e2){
          return ' seratus ' + numInword(num % 1e2)

      }else if(num >= 2e2 && num < 1e3){
          return numInword(Math.floor(num/1e2)) + ' ratus ' + numInword(num % 1e2)

      }else if(num >= 1e3 && num < 2e3){
          return ' seribu ' + numInword(num % 1e3)

      }else if(num >= 2e3 && num < 1e6){
          return numInword(Math.floor(num/1e3)) + ' ribu ' + numInword(num % 1e3)

      }else if(num >= 1e6 && num < 1e9){
          return numInword(Math.floor(num/1e6)) + ' juta ' + numInword(num % 1e6)

      }else if(num >= 1e9 && num < 1e12){
          return numInword(Math.floor(num/1e9)) + ' miliar ' + numInword(num % 1e9)

      }else if(num >= 1e12){
          return numInword(Math.floor(num/1e12)) + ' triliun ' + numInword(num % 1e12)

      }
  }

}

console.log(numInword(4));  
console.log(numInword(99));  
console.log(numInword(950)); 
console.log(numInword(100099)); 
console.log(numInword(150907925));  
console.log(numInword(2011845)); 
console.log(numInword(999999999999999)); 
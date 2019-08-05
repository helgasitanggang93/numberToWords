function numberInwords(params) {
    if (params === 0) {
        return ''

    } else {
        const number = {
            1: 'satu',
            2: 'dua',
            3: 'tiga',
            4: 'empat',
            5: 'lima',
            6: 'enam',
            7: 'tujuh',
            8: 'delapan',
            9: 'sembilan',
            10: 'sepuluh',
            11: 'sebelas',
            100: 'seratus',
            1000: 'seribu'
        }
        const arr = [[1e12, 'triliun'], [1e9, 'miliar'], [1e6, 'juta'], [1e3, 'ribu'], [1e2, 'ratus'], [1e1, 'puluh']]
        let hasilObj = Object.keys(number).reverse().map(x => Number(x)).find(data => data <= params)
        let hasilArr = arr.find(x => x[0] <= params)
        if (params <= 11) {
            return `${number[String(hasilObj)]} ${numberInwords(params % params)}`

        } else if (params < 20) {
            let bagi = params % 10
            return `${numberInwords(bagi)} belas`

        } else if (params >= 20 && params < 100) {
            return `${numberInwords(Math.floor(params / hasilArr[0]))} ${hasilArr[1]} ${numberInwords(params % hasilArr[0])}`

        } else if (params >= 100 && params < 200) {
            return `${number[String(hasilObj)]} ${numberInwords(params % 100)}`

        }else if(params >= 200 && params < 1000){
            return `${numberInwords(Math.floor(params / hasilArr[0]))} ${hasilArr[1]} ${numberInwords(params % hasilArr[0])}`

        }else if(params >= 1000 && params < 2000){
            return `${number[String(hasilObj)]} ${numberInwords(params % 1000)}`

        }else if(params >= 2000){
            return `${numberInwords(Math.floor(params / hasilArr[0]))} ${hasilArr[1]} ${numberInwords(params % hasilArr[0])}`

        }


    }
}

console.log(numberInwords(4));  
console.log(numberInwords(99));  
console.log(numberInwords(950)); 
console.log(numberInwords(100099)); 
console.log(numberInwords(150907925));  
console.log(numberInwords(2011845)); 
console.log(numberInwords(999999999999999)); 



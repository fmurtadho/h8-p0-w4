function fpb(angka1, angka2) {
    var divider = 0 ;
    var fpbNomination = []
    for(var i = 0 ; i < angka2 ; i++){
        divider = divider + 1
        if(angka1 % divider === 0 && angka2 % divider === 0){
            fpbNomination.push(divider)
        }
    }

    var fpb = fpbNomination[0]
    for(var j = 0 ; j < fpbNomination.length ; j ++){
        if(fpbNomination[j] > fpb){
            fpb = fpbNomination[j]
        }
    }

    return fpb
}
  
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

/*Diberikan sebuah function fpb(angka1, angka2) 
yang menerima dua parameter angka. 
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis 
kedua bilangan tersebut.
*/

function angkaPrima (num){
var counter = 0;
    for(var i = 2 ; i < num ; i++){
        if(num % i === 0 ){
            counter = counter +1
        }
    }
    if (counter > 0){
        return false
    }else if ( counter <= 0){
        return true
    }
}
  
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); // harusnya false jawaban masih true
console.log(angkaPrima(0)); // harusnya false hasil masih true
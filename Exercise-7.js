function digitPerkalianMinimum(angka) {
    var min = 0
    for ( var i = 0 ; i <= angka ; i++){
        var now=(angka/i).toString()
        
        if(angka % i === 0){
     
            var digit = (i.toString() + now).length // diambil digit nya saja makanya length

            if( digit < min || min == 0 ){
                min = digit
            }
        }
    }
    return min
}
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
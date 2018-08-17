function digitPerkalianMinimum(angka) {
    var min;
    for ( var i = 0 ; i <= angka ; i++){
        var now=(angka/i).toString()
        
        if(angka % i === 0){
            // console.log('now : '+now) 
            now = i.toString() + now.length // diambil digit nya saja makanya length
            // console.log('now length : ' + now.length)

            if( now < min) {
                now = min
            }
        }
    }
    return min
}
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2


/*
jadi gini kan angka nya tuh 24
kemudian 24 itu habis dibagi 
*/
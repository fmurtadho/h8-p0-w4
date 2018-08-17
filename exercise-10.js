function checkAB(input) {
    var a = []
    var b = []
    var counter = 0;
    for ( var i = 0 ; i < input.length ; i ++){
        if (input[i] == 'a'){
            a.push(i+1) // ditambah satu supaya tidak ada 0
        }else if ( input[i] == 'b'){
            b.push(i+1) // ditambah satu supaya tidak ada 0
        }
    }

    for ( var j = 0 ; j < a.length ; j ++){
        var now = a[j]
        for ( var k = 0 ; k < b.length ; k++){
    
            var min = a[j]-b[k] //posisi a dikurangi posisi b
            var min2 = b[k]-a[j] //posisi b dikurangi posisi a
        
            if(min == 4 || min2 == 4 || min == -4 || min2 == -4){ //jika hasilnya 4 / -4 artinya ada jarak 3 karakter (4 karena saat di push juga di + 1. Jarak aslinya 3)
                counter = counter + 1
            }
        
        }
    }
    
    if(counter >= 1){
        return true
    }else if(counter == 0){
        return false
    }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false


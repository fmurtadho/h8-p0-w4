function ubahHuruf(kata) {
    var dictionary = 'abcdefghijklmnopqrstuvwxyza'
    var output = []

    for( var i = 0 ; i < kata.length ; i ++){


        for( var j = 0 ; j < dictionary.length ; j++){
            if(dictionary[j] == kata[i]){
                output.push(dictionary[j+1])
            }
        }
    }

    return output.join('')
}
  
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
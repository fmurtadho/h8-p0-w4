function urutkanAbjad(str) {
    var dictionary = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''

    for ( var i = 0 ; i < dictionary.length ; i ++){
        for ( var j = 0 ; j < str.length ; j ++){
            if(str[j] == dictionary[i]){
                output = output + str[j]
            }
        }
    }
    return output
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
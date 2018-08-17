function cariModus(arr){
    var maxCount = 1;
    var modus;
    var tempCount = []

    for( var i = 0 ; i < arr.length ; i ++){
        var count = 0;

        for( var j =0 ; j < arr.length ; j++){
            if(arr[j] == arr[i]){
                count = count + 1
            }
        }
       
        tempCount.push(count) //membuat array berisi counter

        if(count > maxCount){
            maxCount = count;
            modus = arr[i];
            }

    }

    var more = 0;

    for ( var k = 0 ; k < arr.length ; k++){
        if(tempCount[k] > 1){ 
            more = more + 1
        }
    }

    if(more == 0 || more/arr.length == 1){ //jika isi counter seluruhnya 1 artinya tidak ada angka yang sama di dalam array (semua angka berbeda). Jika counter dibagi array.length = 1 artinya seluruh array nilainya sama.
        return -1;
    }else if(more > 1){
        return modus
    }
    
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
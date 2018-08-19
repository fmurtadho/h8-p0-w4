function kaliTerusRekursif(angka) {
    str = angka.toString()
    if(str.length === 1){
        return angka
    }

    var modifStr = str.substring(1)

    var output = parseFloat(str[0])*kaliTerusRekursif(modifStr)

    var digit = output.toString().length

    if ( digit > 1){
        return kaliTerusRekursif(output)
    }

    return output

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
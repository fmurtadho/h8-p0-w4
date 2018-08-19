function totalDigitRekursif(angka) {
    var str=angka.toString()

    if(str.length === 1){
        return parseInt(str)
    }else{
        var basic = parseInt(str[0])
        var modifstr = str.substring(1)

        return basic + totalDigitRekursif(modifstr)
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

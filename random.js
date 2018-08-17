function digitPerkalianMinimum(angka) {
    var minDigit;

    for (let i = 0; i <= angka; i++) {
        var currDigit;
        if (angka % i === 0) {
            currDigit = (i.toString() + (angka/i).toString()).length;
        
            if (currDigit < minDigit || minDigit === undefined) {
                minDigit = currDigit;
            }
        }
    }

    return minDigit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2

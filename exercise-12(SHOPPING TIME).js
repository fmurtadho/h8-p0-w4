function shoppingTime(memberId, money) {
    var listPurchased=[]
    var firstMoney = money // money sebelum dibelanjakan
    var priceItem=[1500000/*stacattu*/,500000/*zoro*/,250000/*H&N*/,175000/*Uniklooh*/,50000/*Casing Handphone*/]
    var listItem=['stacattu','zoro','H&N','Uniklooh','Casing Handphone']
    var changeMoney;

    for ( var i = 0 ; i < priceItem.length ; i++){
        if(money-priceItem[i] >= 0){
            listPurchased.push(listItem[i])
            money = money - priceItem[i]
        }
    }

    var changeMoney = money // money sesudah dibelanjakan

    var object = { //pembuatan object
        memberId: memberId,
        money: firstMoney,
        listPurchased: listPurchased,
        changeMoney : changeMoney
    }

    if(memberId == '' || memberId == undefined && money == undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if(firstMoney < 50000){
        return 'Mohon maaf uang tidak cukup' 
    }else{
        return object
    }
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
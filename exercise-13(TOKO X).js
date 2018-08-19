function countProfit(belanja) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    var arrBarang = []
    
    for ( var i = 0 ; i < listBarang.length ; i ++){
        arrBarang[i] = {
            product:listBarang[i][0],
            shoppers:[],
            leftOver:listBarang[i][2],
            totalProfit:0
        }
    }

    for ( var j = 0 ; j < belanja.length ; j++){
        var pembeli = []
        if(belanja[j].product === 'Sepatu Stacattu' && belanja[j].amount <= arrBarang[0].leftOver){
            arrBarang[0].shoppers.push(belanja[j].name)
            arrBarang[0].leftOver = arrBarang[0].leftOver - belanja[j].amount
            arrBarang[0].totalProfit = arrBarang[0].totalProfit + (1500000*belanja[j].amount)
        }else if(belanja[j].product === 'Baju Zoro' && belanja[j].amount <= arrBarang[1].leftOver){
            arrBarang[1].shoppers.push(belanja[j].name)
            arrBarang[1].leftOver = arrBarang[1].leftOver - belanja[j].amount
            arrBarang[1].totalProfit = arrBarang[1].totalProfit + (500000*belanja[j].amount)
        }else if(belanja[j].product === 'Sweater Uniklooh' && belanja[j].amount <= arrBarang[2].leftOver){
            arrBarang[2].shoppers.push(belanja[j].name)
            arrBarang[2].leftOver = arrBarang[2].leftOver - belanja[j].amount
            arrBarang[2].totalProfit = arrBarang[1].totalProfit + (175000*belanja[j].amount)
        }
    }
    
    if(belanja[0] == null){
        return []
    }else{
        return arrBarang
    }

}

//TEST-CASE
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2, 
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]
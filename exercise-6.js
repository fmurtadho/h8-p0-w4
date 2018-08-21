function hitungHuruf(kata) {

    var kataS = kata.split(' ')
    var bestPoint = 0;
    var bestKata;
    
    for ( var i = 0 ; i < kataS.length ; i ++){ 
        var now = kataS[i]
        var point = 0;

        for ( var j = 0 ; j < now.length ; j++){ //supaya di scan per kata
            var basic = now[j] 
            
            
            for ( var k = j+1 ; k < now.length ; k ++){ // dimulai dari j + 1 supaya ketika huruf basic adalah g maka yang di looping hanya reatest
               if(now[k] == basic){
                   point = point + 1 //ketika ada karakter di dalam kata yang sama dengan karakter yang sedang dijadikan patokan maka akan mendapatkan 1 point
                   break; // agar kata yang didalamnya terdapat 3 karakter yang sama atau lebih tidak mendapatkan point berlipat 
                }
            }
        }
        if (point > bestPoint){
            bestPoint = point;
            bestKata = now
        }        
    }

    if(bestPoint == 0){ //jika tidak ada karakter yang sama dalam kata (point 0)
        return -1
    }else if(bestPoint >= 1){
        return bestKata
    }

}
  
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('abcdefghijklmnopqrstuvwxyz')) //-1
console.log(hitungHuruf('I am a developer passionate')) // output masih developer, harusnya passionate
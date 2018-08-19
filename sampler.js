function changeVocals (str) {
    var output = '';
    var vocalsU = 'AIUEO';
    var afterVu = 'BJVFP';
    var vocalsL = 'aiueo';
    var afterVl = 'bjvfp';

    console.log('bangsat')

    for ( var i = 0 ; i < str.length ; i++){
        if(str[i] === vocalsU[0]){ //a
            output = output + afterVu[0]
        }else if (str[i] === vocalsL[0]){
            output = output + afterVl[0]
        }else if(str[i] === vocalsU[1]){ //i
            output = output + afterVu[1]
        }else if (str[i] === vocalsL[1]){
            output = output + afterVl[1]
        }else if(str[i] === vocalsU[2]){ //u
            output = output + afterVu[2]
        }else if (str[i] === vocalsL[2]){
            output = output + afterVl[2]
        }else if(str[i] === vocalsU[3]){ //e
            output = output + afterVu[3]
        }else if (str[i] === vocalsL[3]){
            output = output + afterVl[3]
        }else if(str[i] === vocalsU[4]){ //o
            output = output + afterVu[4]
        }else if (str[i] === vocalsL[4]){
            output = output + afterVl[4]
        }//end if
    }


    return output
}

  console.log(changeVocals('Alexei'));
  console.log(changeVocals('AAAaaaIIIiiiUUUuuuEEEeeeOOOooo'));
  
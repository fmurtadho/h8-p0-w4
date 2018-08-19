function changeVocals (str) {
    var output = '';
    var vocalsU = 'AIUEO';
    var afterVu = 'BJVFP';
    var vocalsL = 'aiueo';
    var afterVl = 'bjvfp';

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
        }else{
            output = output + str[i]
        }
    }


    return output
  }
  
  function reverseWord (str) {
    var output = ''
    for ( var i = str.length-1 ; i >= 0 ; i --){
        output = output + str[i]
    }
    return output
  }
  
  function setLowerUpperCase (str) {
    var output = ''
    for ( var i = 0 ; i < str.length ; i ++){
        if(str[i] === str[i].toUpperCase()){
            output = output + str[i].toLowerCase()
        }else if(str[i] === str[i].toLowerCase()){
            output = output + str[i].toUpperCase();
        }
    }
    return output
  }
  
  function removeSpaces (str) {
    var output = ''
    for ( var i = 0 ; i < str.length ; i ++){
        if(str[i] === ' '){
            output = output + ''
        }else if ( str[i] !== ' '){
            output = output + str[i]
        }
    }
    return output
  }
  
  function passwordGenerator (name) {
      var cv = changeVocals(name);
      var rw = reverseWord(cv);
      var sluc = setLowerUpperCase(rw);
      var rs = removeSpaces(sluc);
      if(rs.length < 5){
          return 'Minimal karakter yang diinputkan adalah 5 karakter'
      }else{
          return rs
      }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
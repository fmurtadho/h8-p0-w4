function changeMe(arr) {
  var people = []    

    for ( var i = 0 ; i < arr.length ; i ++){
      var current = arr[i].slice(0);
      var age;
      if(current[3] === undefined){
        age = 'Invalid Birth Date'
      }else if(current[3] > 2018){
        age = 'Invalid Birth Date'
      }else{
        age = 2018-current[3]
      }
      
      people[i] = {
        firstName: current[0],
        lastName: current[1],
        gender: current[2],
        age : age
      } // end object

    }

    for( var j = 0 ; j < people.length ; j ++){
      console.log((j+1)+'. '+people[j].firstName+' '+people[j].lastName)
      console.log(people[j])
    }

}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
   changeMe([]); // ""
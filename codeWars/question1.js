function bmi(weight, height) {
  //formula for body weight index
  const bmi = (weight)/(height*height);

  //condition using if statements
    if(bmi <=18.5){
       return "Underweight";

    }
 
  
    else if(bmi <=25.0){
       return "Normal";

    }


    else if(bmi <=30.0){
      return "Overweight";

    }


    else if (bmi >30.0){

       return "Obese";

    }
    
  }

 

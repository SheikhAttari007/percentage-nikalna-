// var userinput = +prompt("Enter Percentage")

// if(userinput >=80 && userinput< 101){
//     document.write('A+')
// }
// else if(
//     userinput >=70 && userinput <80){
//         document.write("A")
//     }
//     else if (userinput >=60 && userinput< 70){
//         document.write("B")
//     }
//     else if (userinput>= 50 && userinput <60){
//         document.write("C")
//     }

// else if (
//     userinput >=40 && userinput < 50){
//         document.write("D")
//     }
//      if (
//         userinput <40){
//             document.write ("Sorry ! He is fail")
//         }
        //chp no 13
    //   Testing sets of conditions.
    var Student = (prompt("Enter a student name"));
    var marks   = parseInt(prompt("Enter a marks"));
    if(marks>=90){
      document.write(Student +" "+"Your have A+ grade !Excellent!")
    }
    else if(marks >=80){
      document.write(Student +" "+"Your have A grade !Well done!")
    }
    else if(marks >=60){
      document.write(Student +" "+"Your have B grade !Please work hard!")
    }
    else if(marks >=50){
      document.write(Student +" "+"Your have C grade !Improve hardly!")
    }
    else if(marks >=40){
      document.write(Student +" "+"Your have D grade !Should take tution!")
    }else{
      document.write(Student +" "+"I am realy Sorry ! Your are fail") 
    }



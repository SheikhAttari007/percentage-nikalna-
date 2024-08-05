var userinput = +prompt("Enter Percentage")

if(userinput >=80 && userinput< 101){
    document.write('A+')
}
else if(
    userinput >=70 && userinput <80){
        document.write("A")
    }
    else if (userinput >=60 && userinput< 70){
        document.write("B")
    }
    else if (userinput>= 50 && userinput <60){
        document.write("C")
    }

else if (
    userinput >=40 && userinput < 50){
        document.write("D")
    }
    else if (
        userinput <40){
            document.write ("He is fail person")
        }



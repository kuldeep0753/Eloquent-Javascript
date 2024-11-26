//Program Structure
/**
 * Expressions and statements
 *  A fragment of code that produces a value is called an expression
 *      eg. 22 or "psychoanalysis", 2+4
 *  a JavaScript statement corresponds to a full sentence. A program is a list of statements.
 * 
 * Bindings
 *  To catch and hold values, JavaScript provides a thing called a binding, or variable.
 *      eg. let caught = 5 ;
 *  "=" operator can be used at any time on existing bindings to disconnect them from their current value and 
 *  have them   point to a new one.
 *  eg. let a=23;
 *      a="kuldeep";(disconnect, and add new value)
 * 
 * The environment:
 *      The collection of bindings and their values that exist at a given time is called the environment
 * 
 * Functions:
 *  A function is a piece of program wrapped in a value
 *  Executing a function is called invoking, calling, or applying it
 *  console.log function: writes out its arguments to some text output device
 * 
 *  Showing a dialog box or writing text to the screen is a side effect
 * 
 * Control flow:
 *  straight-line control flow
 *          eg. let a=12;
 *          let sum =10+a;
 *  Conditional execution
 * Dispatching on a value with switch
 *      eg. switch (prompt("What is the weather like?")) {
                case "rainy":
                    console.log("Remember to bring an umbrella.");
                    break;
                default:
                    console.log("Unknown weather type!");
                    break;
                }
 *  for, while and do loops: to run a piece of code multiple times 
 *      Breaking Out of a Loop(break) if not break then infinite loop
 *      continue: to skip some condition
 * 
 *Capitalization: follow camelcase eg. kuldeepSingh
 *Comments: single(//) and multiple(//* /)
 *Indenting Code
 */

 //Exercises
 /**
  * Write a loop that makes seven calls to console.log to output the following triangle:
        #
        ##
        ###
        ####
        #####
        ######
        #######
  */

    //Solution:
    for(let i=1;i<=7;i++){
        let x='';
        for(let j=1;j<=i;j++){
        x+='#';
        }
        console.log(x);
    }
    // Optmize solution
    for (let line = "#"; line.length < 8; line += "#")
        console.log(line);

    /**FizzBuzz
    Write a program that uses console.log to print all the numbers from 1 to 100, 
    with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and 
    for numbers divisible by 5 (and not 3), print "Buzz" instead.

    When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
    (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). 
    */
    //Solution:
        let num=1;
        while(num<=100){
        let a=num%3===0,b=num%5 === 0;
        if(a){
            console.log("Fizz");
            }
        if(b){
            console.log("Buzz")
            }
        if(a && b){
            console.log("FizzBuzz");
            }
        if(!a && !b){
            console.log(num);
            }
        
        ++num;
        }
         // Optmize solution
         for (let n = 1; n <= 100; n++) {
            let output = "";
            if (n % 3 == 0) output += "Fizz";
            if (n % 5 == 0) output += "Buzz";
            console.log(output || n);
          }

    /**
     * Chessboard
        Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

        Passing this string to console.log should show something like this:

         # # # #
        # # # # 
         # # # #
        # # # # 
         # # # #
        # # # # 
         # # # #
        # # # #
     */
    //Solution: 
    for(let i=1;i<=8;i++){
        let x="";
        for(let j=i;j<8+i;j++){
            if(j%2===0) x+="#";
            else x+=" ";
        }
        console.log(x);
    }
//Functions:concept of wrapping a piece of program in a value has many uses. It gives us a way to structure larger programs, to reduce repetition

/**
 * Defining a function: a regular binding where the value of the binding is a function
 *      eg. const square = function(x) {
                return x * x;
            };
    Functions have a set of parameters

    Bindings and scopes:
        -the scope is the whole program—you can refer to such bindings wherever you want. These are called global.
        -declared inside a function can be referenced only in that function, so they are known as local bindings
        Nested scope

    Functions as values 
        let launchMissiles = function() {
            missileSystem.launch("now");
        };  
        
    Declaration notation
        eg.  the function keyword is used at the start of a statement, it works differently:
        function square(x) {
            return x * x;
            }

    Arrow functions
        eg. const square1 = (x) => { return x * x; };
            const square2 = x => x * x; // when no parameter

    The call stack: The place where the computer stores this context

    Optional Arguments: function(a,b=2){}

    Closure: A function have access to the parent scope
        eg: function a(){
        let a=10;
        function b(){
        console.log(a)
            }
        }
        a();

        eg.2
        function multiplier(factor) {
            return number => number * factor;
        }

            let twice = multiplier(2);
            console.log(twice(5));
    
    Recursion: A function that calls itself is called recursive.

    Pure Function:
    A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value

            Same Inputs, Same Outputs: A pure function always produces the same output for the same input values, no matter how many times it’s called. It doesn't rely on any external state or variables that can change.
            No Side Effects
            eg.Pure function
            function add(a,b){
            return a+b;
            }

            Impure funciton:
            let a=10;
            function add(b){
            return a+b;
            }

 */
    /* Exercise:
    1.Minimum
    We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
    Solution:
    */ 
    function min(a,b){
        // if(a>b){
        //   return b;
        //   }
        // else{
        //   return a;
        //   }
        return a>b? b:a;
        }
      /** 
       * 2.Recursion
       * Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

        Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
      */
        function isEven(a){
            if(a===0){
              return true;
              }
             else if(a===1){
              return false;
              }
             else if(a<0){
                 return isEven(-a);
              }
             else{
               return isEven(a-2);
              }
           // TODO: we can merg above two code: return a>0 ? isEven(a-2):isEven(-a);
            }
            
        console.log(isEven(50));
        // → true
        console.log(isEven(75));
        // → false
        console.log(isEven(-1));
        // → ??
        
    /** 3.Bean counting
        //     Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

        // Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.
        */
       // Your code here.
        function countBs(a){
            
            return countChar(a,"B");
            }
        
        function countChar(str,search){
            let count =0;
            for(let i=0;i<str.length;i++){
            if(str[i]===search){
                count++;
            }
            }
            return count;
            }
        
        console.log(countBs("BOB"));
        // → 2
        console.log(countChar("kakkerlak", "k"));
        // → 4
module.exports = { 
    //param A : integer
    //param B : integer
    //return a array of integers
       stepnum : function(A, B){
           var result = [];
           var num = A;
           while (num <= B) {
               var numbers = [];
               var sort = function(a, b){
                   return a - b;
               }
               while(num > 0){
                   // 345 % 10
                   // 345 / 10
                   numbers.push(num % 10);
                   num = parseInt(num / 10, 10);
               }
               console.log(numbers);
               numbers = numbers.sort(sort);
               var isSteppingNum = true;
               for (var j=0; j < numbers.length - 1; j+=1) {
                   if (numbers[j+1] - numbers[j] === 1) {
                       // we are good
                   } else {
                       isSteppingNum = false;
                   }
               }
               
               if (isSteppingNum) {
                   result.push(num);
               }
               
               num = num + 1;
           }
           
           return result;
       }
   };
   
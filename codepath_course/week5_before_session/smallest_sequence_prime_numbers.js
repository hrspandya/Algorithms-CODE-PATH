module.exports = { 
 //param A : integer
 //param B : integer
 //param C : integer
 //param D : integer
 //return a array of integers
    solve : function(A, B, C, D){
        var result = [];
        var count = A;
        while (result.length < D) {
            
            if (count % A == 0 || count % B == 0 || count % C == 0) {
                //result.push(count); 
            } else {
                
            }
            
            var isPrime = true;
            for(var i = 2; i < count; i++) {
                if(count % i ==0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
               result.push(count); 
            }

            count = count + 1;
        }
        
        return result;
    }
};

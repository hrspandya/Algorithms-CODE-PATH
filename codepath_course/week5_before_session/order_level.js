// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
       levelOrder : function(A){
           if (!A) {
               return [];
           }
           
           var queue = [A];
           var result = [];
           
           while (queue.length > 0) {
               var children = [];
               var subResult = [];
               for(var i = 0; i < queue.length; i+=1) {
                   var node = queue[i];
                   
                   //push result
                   subResult.push(node.data);
                   
                   if (node && node.left) {
                       children.push(node.left);
                   }
                   
                   if (node && node.right) {
                       children.push(node.right);
                   }
               }
               result.push(subResult);
               queue = (children);
           } 
           
           return result;
           
       }
   };
   
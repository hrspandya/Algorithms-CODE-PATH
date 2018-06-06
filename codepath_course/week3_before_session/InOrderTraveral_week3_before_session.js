// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       inorderTraversal : function(A){
           var result = [];
           (function recursion(root){
               if (root != null) {
                   // in order
                   // left, current, right
                   
                   // go left
                   recursion(root.left);
                   
                   // current node
                   result.push(root.data);
                   
                   // go right
                   recursion(root.right);
               }
           })(A);
           
           return result;
       }
   };
   
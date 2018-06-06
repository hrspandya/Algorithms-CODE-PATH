public class Solution {
    public int searchMatrix(ArrayList<ArrayList<Integer>> a, int b) {
        if (a == null || a.size() == 0) {
            return 0;
        }
        
        for (int r = 0; r < a.size(); r++){
            if (a.get(r).get(0) <= b && a.get(r).get(a.get(r).size() - 1) >= b) {
                for (int c = 0; c < a.get(r).size(); c++) {
                    if (a.get(r).get(c) == b) {
                        return 1;
                    }
                }
            } 
        }
        
        return 0;
    }
}

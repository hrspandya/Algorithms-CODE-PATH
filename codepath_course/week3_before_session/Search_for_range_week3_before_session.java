public class Solution {
    // DO NOT MODIFY THE LIST
    public ArrayList<Integer> searchRange(final List<Integer> a, int b) {
        // binary search
        int lowerBound = 0;
        int upperBound = a.size() - 1;
        int current = lowerBound + upperBound / 2;
        boolean isFound = false;
        
        while(true){
            if (a.get(current) == b) {
                isFound = true; 
                break;
            } else if (lowerBound > upperBound) {
                ArrayList<Integer> result = new ArrayList<Integer>();
                result.add(-1);
                result.add(-1);
                return result;
            } else if(a.get(current) > b) {
                lowerBound = current + 1;
            } else {
                upperBound = current - 1;
            }
        }
        
        if (isFound == true) {
            // check lower
            int lowerIndex = current;
            int lowerRange = current;
            while(lowerIndex >= 0){
                if (a.get(lowerIndex) == b) {
                    lowerRange = lowerIndex;
                    lowerIndex--;
                } else {
                    break;
                }
            }
            
            // check upper
            int upperIndex = current;
            int upperRange = current;
            while (upperIndex <= a.size() - 1) {
                if (a.get(upperIndex) == b) {
                    upperRange = upperIndex;
                    upperIndex++;
                } else {
                    break;
                }
            }
            
            ArrayList<Integer> result1 = new ArrayList<Integer>();
            result1.add(lowerRange);
            result1.add(upperRange);
            return result1;
        }
        
        ArrayList<Integer> result2 = new ArrayList<Integer>();
        result2.add(-1);
        result2.add(-1);
        return result2;
    }
}

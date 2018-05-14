/**
 * Checkpoint_1
 */
public class Checkpoint_1 {

    public static void main(String[] args) {
        int j = 0;
        int i = 0;
        int n = 5;
        int[] arr = {1, 2, 3, 4, 5};
        int time = 0;
        for(i = 0; i < n; ++i) {
            time++;
            while(j < n && arr[i] < arr[j]) {
                time++;
                j++;
            }
        }

        System.out.println(time + " Solution is O(n)");
    }
}

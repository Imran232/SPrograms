import java.util.*;

public class LeapY {
    public static void main(String[] args) {
        int x;
        System.out.println("Enter any year:");
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        if (x % 400 == 0 || x % 4 == 0 && x % 100 != 0) {
            System.out.println("Entered year " + x + " is a leap year");
        } else {
            System.out.println("Entered year " + x + " is not a leap year");
        }
    }

}

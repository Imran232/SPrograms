import java.util.*;

public class SumD {
    public static void main(String args[]) {
        int digit, r, sum = 0;
        System.out.println("Enter number:");
        Scanner sc = new Scanner(System.in);
        digit = sc.nextInt();
        while (digit != 0) {
            r = digit % 10;
            sum = sum + r;
            digit = digit / 10;
        }
        System.out.println("Sum of digits=" + sum);

    }

}

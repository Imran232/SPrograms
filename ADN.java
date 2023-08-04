import java.util.*;

public class ADN {
    public static void main(String[] args) {
        int n, choice;
        Scanner sc = new Scanner(System.in);
        System.out.println("1.Divisible test of a one number");
        System.out.println("2.Divisible test of all numbers ");
        choice = sc.nextInt();
        if (choice == 1) {
            int r;
            // Scanner sc=new Scanner(System.in);
            System.out.println("Enter n value:");
            n = sc.nextInt();
            System.out.println("Enter r value:");
            r = sc.nextInt();
            if (n % r == 0) {
                System.out.println("Given number is divisible by " + r);
            } else {
                System.out.println("Given number is not divisible by " + r);
            }
        } else if (choice == 2) {
            int total, count = 0;
            System.out.println("With how many numbers you want to test divisibility test?");
            total = sc.nextInt();
            int[] r = new int[total];
            System.out.println("Enter n value:");
            n = sc.nextInt();
            System.out.println("Enter " + total + "r values:");
            for (int i = 0; i < r.length; i++) {
                r[i] = sc.nextInt();
                if (r[i] % 100 != 0)
                    count++;
            }
            if (count == 0)
                System.out.println(n + " is divisible by all numbers");
            else
                System.out.println(n + " is not divisible by all numbers ");
        } else {
            System.out.println("Invalid number");
        }
    }

}

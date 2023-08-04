import java.util.Scanner;

public class Divisible3 {
    public static void main(String[] args) {
        int num, r;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter num value:");
        num = sc.nextInt();
        System.out.println("Enter r value:");
        r = sc.nextInt();
        if (num % r == 0) {
            System.out.println("Given Number is Divisible by " + r);
        } else {
            System.out.println("Given Number is not divisible by " + r);
        }

    }

}

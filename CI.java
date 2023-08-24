import java.util.*;

public class CI {
    public static void main(String[] args) {
        double p, r, t, n, CI;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the price:");
        p = sc.nextDouble();
        System.out.println("Enter the rate:");
        r = sc.nextDouble();
        System.out.println("Enter the time:");
        t = sc.nextDouble();
        System.out.println("Enter the n:");
        n = sc.nextDouble();

        CI = p * Math.pow(1 + (r / n), (n * t)) - p;
        System.out.println("Compound Interest=" + CI);
    }

}

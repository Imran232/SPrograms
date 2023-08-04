import java.util.*;

public class SimpleIn {
    public static void main(String[] args) {
        int p, r, t;
        double si;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter p value:");
        p = sc.nextInt();
        System.out.println("Enter r value:");
        r = sc.nextInt();
        System.out.println("Enter t value:");
        t = sc.nextInt();

        si = (p * t * r) / 100;
        System.out.println("Simple Interest=" + si);

    }

}

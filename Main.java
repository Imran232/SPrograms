import java.util.HashSet;

class Main {
    public static String FindIntersection(String[] strArr) {
        String[] list1 = strArr[0].split(", ");
        String[] list2 = strArr[1].split(", ");

        HashSet<String> set1 = new HashSet<>();
        HashSet<String> intersection = new HashSet<>();

        for (String num : list1) {
            set1.add(num);
        }

        for (String num : list2) {
            if (set1.contains(num)) {
                intersection.add(num);
            }
        }

        if (intersection.isEmpty()) {
            return "false";
        }

        StringBuilder result = new StringBuilder();
        for (String num : intersection) {
            result.append(num).append(",");
        }

        // Remove the trailing comma
        result.deleteCharAt(result.length() - 1);
        return result.toString();
    }

    public static void main(String[] args) {
        String[] strArr1 = { "1, 3, 4, 7, 13", "1, 2, 4, 13, 15" };
        String intersection1 = FindIntersection(strArr1);
        System.out.println(intersection1);

        String[] strArr2 = { "1, 3, 9, 10, 17, 18", "1, 4, 9, 10" };
        String intersection2 = FindIntersection(strArr2);
        System.out.println(intersection2);
    }
}
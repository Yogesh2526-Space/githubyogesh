import java.util.Scanner;
public class problems {
    public static void main(String[] args) {
        
        int i = 1;
       int j = 1;

        for (i=1; i<=5;i++){
            for(j=1;j<=i;j++){
                System.out.print('*');
            }
            System.out.println();
        }

        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int factorial = 1;
        do{
            factorial = factorial * m;
            m--;
        }while(m>0);
        System.out.println(factorial);
    }
}

class horse {
    public static void main(String[] args) {
        int i = 12345;
        int count = 0;

        while (i>=1) {
            count = count - 1;
            i--;
        }
    }

    public void reverseNumber() {
        int num = 1234;
        int reverse = 0;

        while(num > 0){
            int digit = num % 10;
            reverse = reverse * 10 + digit;
            num = num / 10;
        }
    }

    public void armstrongNumber() {
        int num1 = 153;
        int original = num1;
        int sum = 0;

        while(num1 > 0){
            int digit1 = num1 % 10;
            sum = sum + (digit1 * digit1 * digit1);
            num1 = num1 / 10; 
        }
    }
}

class hey{
public static void main(String[] args) {
    int[] arr = {10,20,30,40};
    System.out.println(sumArray(arr));
}
public static int sumArray(int[] arr) {
    
    int sum = 0;

    for(int i=0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
}

public class PrimeNumber {
    public static void main(String[] args) {
        int num = 17;
        boolean isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            System.out.println(num + " is a Prime Number");
        } else {
            System.out.println(num + " is Not a Prime Number");
        }
    }
}

class hilo{
    public static void main(String[] args){
        System.out.println(reversestring("jacob"));
    }

    public static String reversestring(String str){
        
        String reverse = "";
        for (int i = str.length() - 1; i >=0; i--){
            reverse = reverse + str.charAt(i);
        }

        return reverse;
    }
    }

    class hilo{
    public static void main(String[] args) {
        System.out.println(countVowels("Yogesh"));
    }

    public static int countVowels(String str) {
        int count = 0;
        for(int i=0; i<=str.length(); i++){
            char ch = Character.toLowerCase(str.charAt(i));
        

        if(ch == 'a'|| ch == 'e'|| ch == 'i' || ch == 'o' || ch == 'u' ) {
            count++;
        }
    }
    return count;
}
}

public static int fibonacci(int n) {
    if (n == 0) return 0; // Base case 1
    if (n == 1) return 1; // Base case 2
    
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive step
}
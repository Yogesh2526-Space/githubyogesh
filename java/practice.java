class hilo{
    public static void main(String[] args) {
        System.out.println(power(2,3));
    }

    public static int power(int a, int b) {
        if( b == 0){
            return a;
        }

        return a * power(a,b);
    }
}
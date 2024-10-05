namespace ConsoleApp14;

public class Calculator
{
    // Sum funtions with two parameters
    int Sum(int num1, int num2) {
        return num1 + num2;
    }

    // Sum funtions with three parameters
    int Sum(int num1, int num2, int num3 ) {
        return num1 + num2 + num3;
    }

    // Sum funtions with four parameters
    int Sum(int num1, int num2, int num3, int num4 ) {
        return num1 + num2 + num3 + num4;
    }

    public static void Main(string[] args) {
        var cal = new Calculator();

        Console.WriteLine("10 + 20 =  " + cal.Sum(10, 20));
        Console.WriteLine("10 + 20 + 30 =  " + cal.Sum(10, 20, 30));
        Console.WriteLine("10 + 20 + 30 + 40 =  " + cal.Sum(10, 20, 30, 40));
    }
}
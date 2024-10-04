namespace ConsoleApp1;

public class SumOfSquares
{
    // public static double SquaresSum(double num1, double num2, double num3)
    // {
    //     //return Math.Pow(num1, 2)+Math.Pow(num2, 2)+ Math.Pow(num3, 2);
    // }
    
    public static double SquaresSum(double num1, double num2, double num3) {
        double sum = 0;
        double square1 = 0;
        double square2 = 0;
        double square3 = 0;

        square1 = num1 * num1;
        square2 = num2 * num2;
        square3 = num3 * num3;
        sum = square1 + square2 + square3;

        return sum;
    }
}
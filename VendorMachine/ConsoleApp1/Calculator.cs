namespace ConsoleApp1;

public class Calculator
{
    public double Product(double x, double y) {
        return x * y;
    }

    // Overloading the function to handle three arguments
    public double Product(double x, double y, double z) {
        return x * y * z;
    }
}
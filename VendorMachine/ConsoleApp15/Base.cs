namespace ConsoleApp15;

public class Base
{
    public Base(){}

    public void Print()
    {
        Console.WriteLine("Base");
    }
}

class Derived : Base
{
    public Derived(){}

    public new void Print()
    {
        Console.WriteLine("Derived");
    }
}

class Demo
{
    public static void Main(string[] args)
    {
        Base obj = new Derived();
        obj.Print();
    }
}
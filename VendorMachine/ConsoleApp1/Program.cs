namespace ConsoleApp1;

public class Program
{
    public static void Main(string[] args)
    {
        // var vendingMachine = new VendorMachine("JoeDayz INC.");
        // //Console.WriteLine("The capacity of the machine is: {0}", vendingMachine.Capacity);
        // vendingMachine.Display();
        //
        // Console.WriteLine("The count of the products in the machine is: {0}", vendingMachine.GetCount());
        //
        // vendingMachine.Buy("Chocolate");
        
        // VendorMachine.PrintManufacturer();
        //
        // VendorMachine vendorMachine = new VendorMachine();
        // vendorMachine.PrintSpecification();
        // vendorMachine.PrintMoney(-10);
        //
        // vendorMachine.Count = 88;
        // Console.WriteLine("The count is {0}",vendorMachine.Count);

        // var vendingMachine = new VendingMachine();
        // vendingMachine.PrintFields();
        //
        // var vendingMachine2 = new VendingMachine(true, 50, 10);
        // vendingMachine2.PrintFields();
        
        // Object created with parameterized constructor!
        var vendingMachine1 = new VendingMachine(true,50,10);
        // Object created with overloaded constructor! 
        var vendingMachine2 = new VendingMachine(true,5);
        // Object created with parameter-less constructor!
        var vendingMachine3 = new VendingMachine();
        vendingMachine1.PrintFields();
        vendingMachine2.PrintFields();
        vendingMachine3.PrintFields();
    }
}
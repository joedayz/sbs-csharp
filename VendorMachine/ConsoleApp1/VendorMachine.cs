namespace ConsoleApp1;

public class VendorMachine
{

    private int _capacity = 100;

    
    private int _moneyCollected = 70;
    static string manufacturer = "JoeDayz Inc.";

    
    // Implementing the count property

    public int Count { get; set; }
    
    //Class Methods

    // public void SetCount(int x)
    // {
    //     if (x >= 0 && x < _capacity)
    //     {
    //         _count = x;
    //     }
    // }
    //
    // public int GetCount()
    // {
    //     return _count;
    // }

    public void PrintMoney(int _moneyCollected)
    {
        Console.WriteLine("Money collected using this variable: "+ this._moneyCollected);
        Console.WriteLine("Money collected without using this variable: "+ _moneyCollected);
    }
    
    public void PrintSpecification()
    {
        Console.WriteLine("The {0}'s machine  has {1} products capacity", manufacturer, _capacity);
    }
    

    public static void PrintManufacturer()
    {
        Console.WriteLine("The manufacturer of machine is {0}", manufacturer);
    }
    public void Display()
    {
        Console.WriteLine("I am the Display method for displaying the menu!");
    }
    public void DispenseProducts()
    {
        Console.WriteLine("I am the DispenseProducts method for dispensing the products!");
    }
    public void Refill()
    {
        Console.WriteLine("I am the Refill method for refilling the products!");
    }
    // Public method implementation to print print the bought product
    public void Buy(string product) {
        Console.WriteLine("You bought: " + product);
    }
    public string GetManufacturer() {
  
        return manufacturer; // return statement
    }
}
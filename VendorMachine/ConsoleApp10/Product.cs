namespace ConsoleApp10;

// Base Class Product
class Product
{

    // Private Fields: Common attributes of all type of products
    private string _name;
    private double _price;
    private string _expiryDate;


    // Parameterized Constructor
    public Product(string name, double price, string expiryDate)
    {
        this._name = name;
        this._price = price;
        this._expiryDate = expiryDate;

    }

    //getter for name
    public string GetName()
    {
        return this._name;
    }

    // public method to print details
    public void PrintDetails()
    {
        Console.WriteLine("Name: " + this._name);
        Console.WriteLine("Price: " + this._price);
        Console.WriteLine("Expiry Date: " + this._expiryDate);
    }

}

// Derived Class Beverage
class Beverage : Product
{

    // Private fields : Fields specific to the derived class
    private double _litres;
    private string _flavor;

    // Parameterized Constructor
    public Beverage(string name, double price, string expiryDate, double litres, string flavor)
        : base(name, price, expiryDate) //calling parent class constructor
    {
        this._litres = litres;
        this._flavor = flavor;
    }

    public void BeverageDetails()
    {   // Details of Beverage
        PrintDetails();   // Calling inherited method from parent class
        // Printing fields of this class
        Console.WriteLine("Litres: {0}ml", this._litres);
        Console.WriteLine("Flavor: {0} \n", this._flavor);
    }

}

class Chocolate : Product
{ // Inheriting Product

    // Specifications of a chocolate
    private bool _isMilky;
    private double _grams;

    // Constructor
    public Chocolate(string name, double price, string expiryDate, double grams, bool isMilky)
        : base(name, price, expiryDate) // Calling parent class constructor
    {
        this._grams = grams; // A chocolate having caffeine will have true
        this._isMilky = isMilky; // The weight of chocolate bar
    }

    public void ChocolateDetails()
    {
        PrintDetails();
        Console.WriteLine("Is the {0} milky? {1}", GetName(), this._isMilky);
        Console.WriteLine("The {0} bar wieghs: {1}g", GetName(), this._grams);
    }


}

class Demo
{

    public static void Main(string[] args)
    {   // Creating and using the Beverage Object
        var cola = new Beverage("RC Cola", 0.9, "12/12/2019", 350, "Cola"); 
        cola.BeverageDetails();

        // Creating and using the Chocolate Object
        var crunch = new Chocolate("Crunch", 2.3, "3/9/2019", 43, true);
        crunch.ChocolateDetails();

    }

}
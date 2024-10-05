namespace ConsoleApp8;

// Base Class Product
class Product {

    // Private Fields: Common attributes of all type of products
    private string _name; 
    private double _price;
    private string _expiryDate;      


    // Parameterized Constructor
    public Product(string name, double price, string expiryDate) {
        this._name = name;
        this._price = price;
        this._expiryDate = expiryDate;  
   
    }

    // public method to print details
    public void PrintDetails() {
        Console.WriteLine("Name: " + this._name);
        Console.WriteLine("Price: " + this._price);
        Console.WriteLine("Expiry Date: " + this._expiryDate);
    }
  
}

// Derived Class Beverage
class Beverage : Product {

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

    public void BeverageDetails() {  //details of Beverage
        PrintDetails();         //calling inherited method from parent class
        // Printing fields of this class
        Console.WriteLine("Litres: " + this._litres); 
        Console.WriteLine("Flavor: " + this._flavor);
    }
  
}

class Demo {

    public static void Main(string[] args) {
        Beverage cola = new Beverage("Fanta", 0.5, "12/12/2019", 0.35, "Grape"); //creation of Beverage Object
        cola.BeverageDetails(); //calling method to print details
    }
  
}
namespace ConsoleApp9;

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
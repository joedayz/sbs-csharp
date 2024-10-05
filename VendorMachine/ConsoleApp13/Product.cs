namespace ConsoleApp13;

class Product
{
    
    private string _name;
    private double _purchasePrice;
    
    // Parameterized Constructor
    public Product(string name, double purchasePrice)
    {
        this._name = name;
        this._purchasePrice = purchasePrice;
    }

    // Getter to access the purchase price of products
    public double GetPurchasePrice()
    {
        return this._purchasePrice;
    }
    
    //Method GetPrice() to be re-implemented in the derived class
    public virtual double GetPrice()
    {
        return 0;
    }

    public virtual void PrintDetails()
    {
        Console.WriteLine("Selected Product's Name: " + this._name);
    }
    
    
    
}


class Beverage : Product
{
    private double _refCost;
    private double _profit;
    
    public Beverage(string name, double price) : base(name, price)
    {
        this._refCost = GetPurchasePrice() * 0.10; // 10% of purchase price
        this._profit = GetPurchasePrice() * 0.15; // 15% of purchase price
    }
    // public method to get selling price
    public override double GetPrice()
    {   //calculating selling price, Math.round is just an ibuilt method to round off the price
        return (GetPurchasePrice() + (int)Math.Round(this._refCost) + (int)Math.Round(this._profit));
    }

    // public method to call the base method for name and print the selling price from this class
    public override void PrintDetails()
    {
        base.PrintDetails();
        Console.WriteLine("Selling price: {0}", this.GetPrice());
    }
    
}

class Chocolate : Product
{
    private double _profit;
    
    // Parameterized Constructor
    public Chocolate(string name, double price)
        : base(name, price)
    {
        this._profit = base.GetPurchasePrice() * 0.20; // 20% of purchase price
    }
    
    // public method to get selling price
    public override double GetPrice()
    {   //calculating selling price, Math.ceiling is just an ibuilt method to round off the price
        return (base.GetPurchasePrice() + (int)Math.Round(this._profit));
    }

    // public method to call the base method for name and print the selling price from this class
    public override void PrintDetails()
    {
        base.PrintDetails();
        Console.WriteLine("Selling price: {0}", this.GetPrice());
    }
    
}

class Demo
{

    public static void Main(string[] args)
    {
        // Placing the products in an array
        Product[] products = new Product[4];
        products [0] = new Beverage("Cola", 9);
        products [1] = new Chocolate("Crunch", 15);
        products [2] = new Chocolate("Kit-kat", 20);
        products [3] = new Beverage("Fanta", 8);

        // name and price of respective  product is displayed
        foreach(Product product in products)
            product.PrintDetails();
    }
    
}
namespace ConsoleApp11;

class Product {

    // Private Data Members
    private string name;
    private double price;

    // Getter Function
    public string GetName(int liters) {
        if (liters == 1) {
            this.name = "Cola";
            return this.name;
        }
        else if (liters == 2) {
            this.name = "Fanta";
            return this.name;
        }
        else if (liters == 3) {
            this.name = "Dew";
            return this.name;
        }
        else return "";
    }

    // Getter Function
    public double GetPrice(int liters)
    {
        if (liters == 1) {
            this.price = 2;
            return this.price;
        }
        
        else if (liters == 2) {
            this.price = 3.5;
            return this.price;
        }
    
        else if (liters == 3) {
            this.price = 4;
            return this.price;
        }
        else return 0;
    }
}

// Derived Class
class Beverage: Product  { 

    public int Liters { get; set; } //  Liters of a Beverage

    // This function calls the Base class getters and prepends the values to the Litres
    public String GetDetails() { 
        string details = GetName(this.Liters) + ", " + GetPrice(this.Liters) + ", " + Liters;
        return details;
    }

}

class Demo
{
    public static void Main(string[] args)
    {
        Beverage beverage = new Beverage();
        beverage.Liters = 2;
        Console.WriteLine(beverage.GetDetails());
    }
}
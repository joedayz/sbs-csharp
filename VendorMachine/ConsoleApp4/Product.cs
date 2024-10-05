namespace ConsoleApp3;

class Product { // Base Product class
    // Protected field
    protected double price = 50;
    // Protected method
    protected void Print() {
        Console.WriteLine("Hi! I am the Print() method from the Product class");
    }
}

class Beverage : Product { // Derived Beverage class

    public void Access() {
        // Accessing the protected field
        Console.WriteLine("I can Access price: " + price);
        // Accessing the protected method
        Print();
    }  
}

class Demo {

    public static void Main(string[] args) {
        var cola = new Beverage();
        cola.Access();
    }

}
namespace ConsoleApp6;

class Product {          // Base class Product 

    public void Display() {   // Display method inside base class
        Console.WriteLine("I am from the Product Class!");
    }

} 

class Beverage : Product { // Sub class Beverage inheriting from Product

    new public void Display() { // Display method inside derived class
        Console.WriteLine("I am from the Beverage Class!");
    } 

    public void PrintOut(){
        Console.WriteLine("The Display() call with base:");
        base.Display();  // Calling the Display() of Product(base class)
        Console.WriteLine("The Display() call without base:");
        Display();       // Calling the Display() of the Beverage(derived class)
    }

} 

class Demo {

    public static void Main(string[] args) {
        Beverage cola = new Beverage(); // An object of derived class
        cola.PrintOut(); 
    }

}
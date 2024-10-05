namespace ConsoleApp5;

class Product { //Base class Product  

    public double price = 1.7; //price field inside base class

} 


class Beverage : Product { // sub class Beverage extending from Product

    new double price = 1; //price field inside derived class

    public void Display() { 
        //accessing the field of parent class using base*/
        Console.WriteLine("Price from the Product class: " + base.price); 
        //without using base the field of current class shadows the field of parant class*/
        Console.WriteLine("Price from the Beverage class: " + this.price); 

    } 

} 

class Demo {

    public static void Main(String[] args) { 
        Beverage cola = new Beverage(); 
        cola.Display(); 
    } 

}
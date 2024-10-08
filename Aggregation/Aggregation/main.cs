using System.Net.Http.Headers;

class VendingMachine
{

          private Product[] _productShelf;
          private int _capacity;
          private static int _productCount;

          public VendingMachine()
          {
                    
                    this._productShelf = new Product[5];
                    this._capacity = 5;
                    _productCount = 0;
          }

          public bool InsertProduct(Product item)
          {
                    if (_productCount < _capacity)
                    {
                              this._productShelf[_productCount] = item;
                              _productCount++;
                              return true;
                    }
                    else
                    {
                              return false;

                    }
          }

          public void PrintProducts()
          {
                    for (int i = 0; i < this._capacity; i++)
                    {
                              _productShelf[i].PrintDetails();
                    }
          }


}

public class Product{
          private string _name;
          private double _price;

          public Product(string name, double price)
          {
                    this._name = name;
                    this._price = price;
          }

          public void PrintDetails()
          {
                    Console.WriteLine("[{0}]: {1}", this._name, this._price);
          }
}
class Demo {
          static void Main(string[] args)
          {
                    VendingMachine vendingMachine = new VendingMachine();
                    Product product1 = new Product("Coke", 1.25);
                    Product product2 = new Product("Pepsi", 1.50);
                    Product product3 = new Product("Fanta", 1.75);
                    Product product4 = new Product("Sprite", 1.00);
                    Product product5 = new Product("7up", 1.25);

                    vendingMachine.InsertProduct(product1);
                    vendingMachine.InsertProduct(product2);
                    vendingMachine.InsertProduct(product3);
                    vendingMachine.InsertProduct(product4);
                    vendingMachine.InsertProduct(product5);

                    vendingMachine.PrintProducts();

                    vendingMachine = null;
                    Console.WriteLine("Vending Machine is destroyed");
                    Console.WriteLine("Products still exist!!!");
                    product1.PrintDetails();
                    product2.PrintDetails();

          }
}
abstract class Beverage 
{

          private string _name;
          private int _price;

          public Beverage(string name, int price)
          {
                    _name = name;
                    _price = price;
          }

          public int Price {
                    get { return _price; }
          }
          public string Name {
                    get { return _name; }
          }

}

interface IEnergyDrink
{
          int CalculatePrice(int price);
}

class RedBull: Beverage, IEnergyDrink
{
          public RedBull(int price): base("Redbull", price)
          {
          }

          public int CalculatePrice(int price)
          {
                    return base.Price + 1;
          }

          public void PrintDetails()
          {
                    Console.WriteLine("Name: {0}, Price: {1}", base.Name, CalculatePrice(base.Price));
          }
}
class Demo{
          static void Main()
          {
                    RedBull rb = new RedBull(5);
                    rb.PrintDetails();
          }
}
using System.IO.Pipes;

abstract class EDM
{
          public EDM()
          {
                    //parameter less constructor
          }
          public abstract void Transact();

          public void Dispense()
          {
                    Console.WriteLine("{0} is dispensing the product", this.GetType().Name);
                    //this.GetType().Name will return the name of the class that is calling this method
          }
}
class CardVendingMachine : EDM
{
          public override void Transact()
          {
                    Console.WriteLine("I accept cards only");
          }
}

class CashVendingMachine : EDM
{
          public override void Transact()
          {
                    Console.WriteLine("I accept cash only");
          }
}

class HybridVendingMachine : EDM
{
          public override void Transact()
          {
                    Console.WriteLine("I accept both cash and cards");
          }
}

class Demo
{

          static void Main()
          {
                    EDM cardVendy = new CardVendingMachine();
                    EDM cashVendy = new CashVendingMachine();
                    EDM hybridVendy = new HybridVendingMachine();

                    cardVendy.Dispense();
                    cardVendy.Transact();
                    cashVendy.Dispense();
                    cashVendy.Transact();
                    hybridVendy.Dispense();
                    hybridVendy.Transact();
          }

}
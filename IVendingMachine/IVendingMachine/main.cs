abstract class EDM {
          public EDM() {
          }
          public abstract void Transact(bool successful);

          public void Dispense(){
                    Console.WriteLine("{0} Dispensing product...", this.GetType().Name);
          }
}


interface ICanPrint {
          void PrintReceipt();
}

class CashVendingMachine: EDM, ICanPrint {

          public override void Transact(bool successful) {
                    if (successful) {
                              Console.WriteLine("The transaction was successfully completed!");
                              PrintReceipt();
                    } else {
                              Console.WriteLine("The transaction was unsuccessful!");
                    }
          }
          public void PrintReceipt() {
                    Console.WriteLine("Printing receipt...");
          }
}

class Demo{
          static void Main() {
                    EDM cashVendingMachine = new CashVendingMachine();
                    cashVendingMachine.Dispense();
                    cashVendingMachine.Transact(true);

                    Console.WriteLine();

                    cashVendingMachine.Transact(false);
          }
}
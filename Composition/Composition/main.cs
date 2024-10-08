class Display
{

          public Display()
          {

          }
          public void WelcomeMessage()
          {
                    Console.WriteLine("Welcome to the Vending Machine");
          }

          public void DisplayMethod()
          {
                    Console.Write(@"
                              .-----.---------------------.
                              |Press|       Action        |
                              |-----|---------------------|
                              |  1  |    Feed Money       |
                              |  2  |    Select a Product |
                              |  3  |    Get Change       |
                              |  4  |    Quit             |
                              '-----'---------------------'");
          }
}

class KeyPad
{
          public KeyPad()
          {

          }
          public int ReadKey()
          {
                    string userInput;
                    userInput = Console.ReadLine();
                    int value;
                    if(int.TryParse(userInput, out value) && value>0)
                    {
                              return value;
                    }
                    else
                    {
                              return -1;
                    }
          }

}

class VendingMachine {
          private Display _machineDisplay;
          private KeyPad _machineKeyPad;
          public VendingMachine()
          {
                    _machineDisplay = new Display();
                    _machineKeyPad = new KeyPad();
          }
}

class Demo{
          static void Main()
          {
                    VendingMachine machine = new VendingMachine();
                    
          }
}
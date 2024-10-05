namespace ConsoleApp2;

class BadMoneyCollector {

  // Public Fields
  public int moneyCollected;
  public int productPrice;
  public int insertedMoney;


  // Parameter-less Constructor to intialize the money collector object
  public BadMoneyCollector() { 
    this.moneyCollected = 0;
    this.productPrice = 2; // Let's fix the product price to 2$
    this.insertedMoney = 0;
  }

  public void AddMoney(int money) { // Method to add money to collection
    this.insertedMoney = money;
    if (this.insertedMoney >= 0) {  // Check if the customer inserted valid money
      Console.WriteLine("You inserted {0}$",this.insertedMoney);
      this.Change(); // Call the change method to provide change
    }
    else Console.WriteLine("Invalid Insertion");

    this.insertedMoney = 0;
  }

  public void Change() { //method to provide change
    if (this.insertedMoney >= this.productPrice) { //check if any change
      int change = this.insertedMoney - this.productPrice; //calculate change
      // product sold so add its price to collected money
      this.moneyCollected += this.productPrice;
      Console.WriteLine("Your change is: {0}$", change);
    }
    else {
      Console.WriteLine("You didn't insert sufficient money!");
      // the transaction was not successfull so return back the money
      Console.WriteLine("Your change is: {0}$",this.insertedMoney);
    }
  }

  public int GetMoneyCollected() { // Getter to moneyCollected
    return this.moneyCollected;
  }

}

class Demo1 {

  // public static void Main(string[] args) {
  //   // Create a new money collector object
  //   var moneyCollector = new BadMoneyCollector();
  //   // 3 Customers purchase products
  //   moneyCollector.AddMoney(2);
  //   moneyCollector.AddMoney(5);
  //   moneyCollector.AddMoney(7);
  //   // getting the collected as 3 products sold it should be 2*3 = 6
  //   Console.WriteLine("Total collection till now is: {0}$",moneyCollector.GetMoneyCollected());
  //
  //   //Let's try to corrupt collection
  //   moneyCollector.moneyCollected = 20;
  //   Console.WriteLine("Total collection till now is: {0}$",moneyCollector.GetMoneyCollected());
  //   //The collection was public so we easily changed its value
  //   //THIS SHOULD NOT HAVE HAPPENED!
  //
  // }

}
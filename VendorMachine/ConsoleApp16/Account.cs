namespace ConsoleApp16;

public class Account
{
    private double _balance;

    protected double Balance
    {
        get { return this._balance; }
        set
        {
            if(value>=0) this._balance = value;
                
        }
    }

    public Account(double balance)
    {
        this.Balance = balance;
    }

    public virtual bool Deposit(double amount)
    {
        return false;
    }
    
    public virtual bool Withdraw(double amount)
    {
        return false;
    }

    public virtual void PrintBalance()
    {
        Console.WriteLine("The balance is: " + this.Balance);
    }
    
}

class SavingsAccount : Account
{
    private double _interestRate;
    
    public SavingsAccount(double balance) : base(balance)
    {
        this._interestRate = 0.8;
    }
    
    // Overridden Methods
    public override bool Deposit(double amount) {
        if(amount > 0) { // Check if amount is non-zero and non-negative
            // Adding to balance with interest rate
            Balance += amount + (amount * this._interestRate);
            return true;
        }
        return false;
    }


    public override bool Withdraw(double amount) {
        if(amount > 0 && amount <= Balance) { // Check if amount is non-zero, non-negative and less than equal to balance
            // Deducting from balance with interest rate
            Balance -= amount + (amount * this._interestRate);
            return true;
        }
        return false;
    }
    
    public override void PrintBalance() {

        Console.WriteLine("The saving account balance is: " + base.Balance);
    }
    
}

class CheckingAccount : Account
{
    public CheckingAccount(double balance) : base(balance)
    {
    }
    
    // Overridden Methods
    public override bool Deposit(double amount) {
        if (amount > 0)
        {
            Balance += amount;
            return true;
        }
        return false;
    }


    public override bool Withdraw(double amount) {
        if (amount > 0 && amount <= Balance)
        {
            Balance -= amount;
            return true;
        }
        return false;
    }


    public override void PrintBalance() {

        Console.WriteLine("The checking account balance is: " + base.Balance);
    }
}

class Demo
{
    public static void Main(string[] args)
    {
        Account SAccount = new SavingsAccount(5000);
        
        // Creating saving account object
        SAccount.Deposit(1000);
        SAccount.PrintBalance();
        
        SAccount.Withdraw(3000);
        SAccount.PrintBalance();

        Console.WriteLine();
        
        // Creating checking account object
        Account CAccount = new CheckingAccount(5000);
        CAccount.Deposit(1000);
        CAccount.PrintBalance();

        CAccount.Withdraw(3000);
        CAccount.PrintBalance();
    }
}
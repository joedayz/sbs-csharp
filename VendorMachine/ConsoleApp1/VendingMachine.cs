namespace ConsoleApp1;

public class VendingMachine
{
    private bool _onOff;
    private int _count;
    private int _capacity=100;
    private int _moneyCollected;
    
    // No constructor implemented
    
    public VendingMachine() { // A parameter-less construtor implemented
        _onOff = false;
        _count = 0;
        _moneyCollected = 0;
    }

    public VendingMachine(bool onOff, int count)
    {
        this._onOff = onOff;
        this._count = count;
    }
    
    public VendingMachine(bool onOff , int count, int moneyCollected): this(onOff, count) { // A parameterized constructor implemented
        _moneyCollected = moneyCollected;
    }
    
    // A simple print function
    public void PrintFields(){ 
    
        Console.WriteLine("Is the machine turned on? {0}", _onOff);
        Console.WriteLine("The count of products is: {0}", _count);
        Console.WriteLine("The capacity of machine is: {0}", _capacity);
        Console.WriteLine("The total money collected till now is: {0}", _moneyCollected);
    }
}
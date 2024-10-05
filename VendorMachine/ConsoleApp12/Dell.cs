namespace ConsoleApp12;


class Laptop
{
    public string Name { get; set; }

    public Laptop()
    {
        
    }

    public Laptop(string name)
    {
        this.Name = name;
    }
}


// Derived Class
class Dell : Laptop { 
    // Modify the below Parametrized Constructor
    public Dell(string name) : base(name)
    { 

    }

}

class Demo
{
    public static void Main(string[] args)
    {
        Dell dell = new Dell("Dell Inspiration");
        Console.WriteLine(dell.Name);
    }
}
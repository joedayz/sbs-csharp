namespace ConsoleApp2;

class Student // Student Class
{

    // Declare Fields Here
    private string _name;
    private string _rollNumber;


    // Define Properties here
    public string Name
    {
        set
        {
            this._name = value;
        }
        get
        {
            return this._name;
        }
    }

    public string RollNumber
    {
        set
        {
            this._rollNumber = value;
        }
        get
        {
            return this._rollNumber;
        }
    }

}

class Program2 
{
    // public static void Main()
    // {
    //     //Uncomment the below to test your implementation
    //     Student student = new Student();
    //     student.Name = "John";
    //     student.RollNumber = "20";
    //     System.Console.WriteLine(student.Name + " " + student.RollNumber);
    //
    //     // In an Encapsulated implementation the following should return an error
    //     // student._name = "John";
    //     // student._rollNumber = "20";
    // }
}
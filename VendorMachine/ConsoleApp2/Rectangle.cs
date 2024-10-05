namespace ConsoleApp2;

// Rectangle Class
class Rectangle {

    // Declare Fields Here
    private int _length;
    private int _width;
  
    public Rectangle(int length, int width) {

        this._length = length;
        this._width = width;

    }

    public int GetArea() {

        return this._length * this._width;
    }
  
}

class Program {
    public static void Main(){
        Rectangle obj = new Rectangle(2,2);
        Console.WriteLine(obj.GetArea());
    }
}
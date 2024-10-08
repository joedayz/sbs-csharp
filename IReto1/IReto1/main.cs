using System.Reflection.Metadata.Ecma335;

abstract class Book {
          private string _name;
          private string _author;
          private string _price;

          protected string Name {
                    get { return _name; }
          }
          protected string Author {
                    get { return _author; }
          }
          protected string Price {
                    get { return _price; }
          }

          public Book(string name, string author, string price) {
                    _name = name;
                    _author = author;
                    _price = price;
          }

          public abstract string GetDetails();
}

class MyBook: Book {
          public MyBook(string name, string author, string price): base(name, author, price) {
          }

          public override string GetDetails() {
                    return Name + ", " + Author + ", " + Price;
          }
}

class Demo {
          static void Main() {
                    MyBook myBook = new MyBook("The Alchemist", "Paulo Coelho", "$10");
                    System.Console.WriteLine(myBook.GetDetails());
          }
}
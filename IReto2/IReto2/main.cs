interface IAddition {
          int AddTwo(int num1, int num2);
}

class Calculator: IAddition {
          public int AddTwo(int num1, int num2) {
                    return num1 + num2;
          }
}

class Demo {
          static void Main() {
                    Calculator calc = new Calculator();
                    int result = calc.AddTwo(10, 20);
                    System.Console.WriteLine("The result is: " + result);
          }
}
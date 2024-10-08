using System;
using System.Threading;
namespace VendingMachineProject
{
    class VendingMachine 
    {
        private Item[,] _shelve; // Shelve to store products
        private Display _machineDisplay; // Display to display messages
        private Transactor _machineTransactor; // Transactor to handle the transactions
        private KeyPad _machineKeypad; // Keypad to read the used inputs
        private int userAmount; // Field to keep track of the user's money

        // Parameterized constructor
        public VendingMachine(Item[,] items)
        {
            this._shelve = items;
            this._machineDisplay = new Display();
            this._machineTransactor = new Transactor();
            this._machineKeypad = new KeyPad();
            this.userAmount = 0;
        }
        // The method to start the vending machine
        public void TurnOn()
        {
            // Display the welcome message
            _machineDisplay.WelcomeMessage();
            // Variable to store the input
            int input = 0;
            
            while (true)
            {
                _machineDisplay.DisplayMethod();
                _machineDisplay.DisplayMethod("\nPlease Enter Your Selection:");
                input = _machineKeypad.readKey();
                // Perform corresponding action after reading input
                switch (input)
                {
                    // Feed money
                    case 1:

                        int bill;
                        _machineDisplay.DisplayMethod("Enter a Valid $ Bill:");
                        bill = _machineKeypad.readKey();
                        if (_machineTransactor.AddAmount(bill))
                        {
                            userAmount += bill;
                            _machineDisplay.DisplayMethod(("\nYour Current Balance is: $" + userAmount + "\n"));
                        }
                        else
                        {
                            Console.WriteLine("\nYou've Entered an Invalid $ Bill\n");
                            _machineDisplay.DisplayMethod(("Your Current Balance is: $" + userAmount + "\n"));
                        }
                        break;

                    // Select product
                    case 2:

                        int slot;
                        _machineDisplay.DisplayMethod(this._shelve);
                        _machineDisplay.DisplayMethod(("\nYour Current Balance is: $" + userAmount + "\n"));
                        _machineDisplay.DisplayMethod("Enter Product Slot #:");
                        slot = _machineKeypad.readKey();
                        BuyProduct(slot);
                        break;
                    // Get change
                    case 3:

                        if (_machineTransactor.GetChange(userAmount))
                        {
                            _machineDisplay.DisplayMethod(("\nPlease Collect Your Change $" + userAmount  +" from the Cash Dispenser\n"));
                            userAmount = 0;
                        }
                        else
                        {
                            _machineDisplay.DisplayMethod("\nSorry You don't have any Change\n");
                        }
                        break;
                    //  Quit
                    case 4:
                        if (userAmount == 0)
                        {
                            _machineDisplay.DisplayMethod("Thank You for Using the Vendy!\n");
                            Thread.Sleep(2000);
                            Console.Clear();
                            _machineDisplay.WelcomeMessage();
                        }
                        else
                        {
                            _machineDisplay.DisplayMethod("OOPS! You Forgot to Collect your change");
                            _machineDisplay.DisplayMethod(("Please Collect Your Change $" + userAmount + " from the Cash Dispenser\n"));
                            _machineDisplay.DisplayMethod("Thank You for Using the Vendy!\n");
                            userAmount = 0;
                            Thread.Sleep(4000);
                            Console.Clear();
                            _machineDisplay.WelcomeMessage();
                        }
                       
                        break;

                    default:
                        Console.Clear();
                        _machineDisplay.DisplayMethod("Please Make a Valid Selection\n");
                        Thread.Sleep(1000);
                        break;
                }


            }
        }

        private void BuyProduct(int slot)
        {

            int column = (slot % 10) - 1;
            int row = (slot / 10) - 1;
            if ((row >= 0 && row <= 2) && (column >= 0 && column <= 3))
            {
                if (_shelve[row, column] != null)
                {
                    if (_shelve[row, column].Price <= userAmount)
                    {
                        Console.Clear();
                        _machineDisplay.DisplayMethod("You've Bought:");
                        _machineDisplay.DisplayMethod(_shelve[row, column].DisplayMessage() + "\n");
                        _machineDisplay.DisplayMethod("Please Pick your " + _shelve[row, column].ItemName + " from the Dispenser\n");
                        userAmount -= this._shelve[row, column].Price;
                        _shelve[row, column] = null;

                        Thread.Sleep(1000);
                    }
                    else
                    {
                        _machineDisplay.DisplayMethod("\nSorry You don't have Enough Balance to buy: " + _shelve[row, column].ItemName + "\n");
                    }
                }
                else
                {
                    _machineDisplay.DisplayMethod("\nThe Selected Slot # is Empty\n");
                }
            }
            else
            {
                _machineDisplay.DisplayMethod("\nYou've Entered an Invalid Slot Number\n");
            }
        }


    }
}
namespace VendingMachineProject
{
    class Transactor{
          private int _amountAvailable;

          public Transactor()
          {
                    this._amountAvailable = 100;
          }

          public bool AddAmount(int bill)
          {
                    if(ValidateBill(bill))
                    {
                              this._amountAvailable += bill;
                              return true;
                    }
                    return false;
          }

          public void SubAmount(int change)
          {
                    this._amountAvailable -= change;
          }

          public bool GetChange(int userAmount)
          {
                    if(userAmount>0)
                    {
                              SubAmount(userAmount);
                              return true;
                    }
                    else return false;
          }

          private bool ValidateBill(int bill)
          {
                    if(bill == 1 || bill == 2 || bill == 5 || bill == 10 || bill == 20 || bill == 50 || bill == 100)
                    {
                              return true;
                    }
                    return false;
          }
    }


}
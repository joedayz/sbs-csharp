

namespace VendingMachineProject
{

          class SnackItem: Item
          {
                    public SnackItem(string itemName, int price): base(itemName, price, "Snack")
                    {
                    }

                    public override string DisplayMessage()
                    {
                              return "Name: " + base.ItemName + " Price: " + base.Price + "$" + " Type:" + base.Type;
                    }
          }

}
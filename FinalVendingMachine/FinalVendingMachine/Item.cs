

namespace VendingMachineProject
{

          abstract class Item
          {
                    private string _itemName;
                    private int _price;
                    private readonly string _type;

                    public string ItemName
                    {
                              get { return _itemName; }
                    }
                    public int Price
                    {
                              get { return _price; }
                    }

                    public string Type
                    {
                              get { return _type; }
                    }

                    public Item(string itemName, int price, string type)
                    {
                              _itemName = itemName;
                              _price = price;
                              _type = type;
                    }

                    public abstract string DisplayMessage();

          }

}
namespace VendingMachineProject
{
    class DrinkItem : Item
    {
        public DrinkItem(string name, int price)
            : base(name, price, "Drink")
        {

        }

        public override string DisplayMessage()
        {
            return "Name: " + base.ItemName + " Price: " + base.Price + "$" + " Type: " + base.Type;
        }
    }
}
namespace VendingMachineProject
{
    class ChocolateItem : Item
    {
        public ChocolateItem(string name, int price)
            : base(name, price, "Chocolate")
        {

        }

        public override string DisplayMessage()
        {
            return "Name: " + base.ItemName + " Price: " + base.Price + "$" + " Type: " + base.Type;
        }
    }
}
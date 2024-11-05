using Microsoft.AspNetCore.Components;

namespace HelloWebAssembly.Pages;

public partial class Counter
{
    [Parameter] public int? Increment { get; set; }

    private int increment = 1;

    private int currentCount = 0;
    
    private void IncrementCount()
    {
        currentCount += increment;
    }

    protected override void OnParametersSet()
    {
        if(Increment.HasValue)
        {
            increment = Increment.Value;
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using RecipesApi.Models;

namespace RecipesApi.Controllers;

[ApiController]
// api will be available at this route
[Route("api/[controller]")]
public class RecipesController:  ControllerBase
{
    private RecipeContext _recipeContext;
        
    public RecipesController(RecipeContext context){
        _recipeContext = context;
    }
    
    /// <summary>
    /// Post a new recipe
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Recipe>> PostRecipes(Recipe recipe)
    {
        _recipeContext.Recipes.Add(recipe);
        await _recipeContext.SaveChangesAsync();
        string url = "/api/recipes/" + recipe.Id;
        return CreatedAtAction(null, null, recipe, "The resource has been created successfully at "+ url);
    }
}
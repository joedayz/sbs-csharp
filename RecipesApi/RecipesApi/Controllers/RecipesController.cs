using System.Text.Json;
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
    
    ///summary
    ///Retrieve all recipes
    ///summary 
    [HttpGet]
    public ActionResult<IEnumerable<Recipe>> GetRecipes()
    {
        var recipes = _recipeContext.Recipes.ToList();
        return Ok(recipes);
    }

    /// <summary>
    /// Search recipes by ingredients
    /// </summary>
    [HttpGet("/recipes/searchByIngredients/{ingredient}")]
    public ActionResult<IEnumerable<Recipe>> GetFilterRecipesByIngredients(string ingredient)
    {
        var recipes = _recipeContext.Recipes
            .AsEnumerable()
            .Where(recipe =>
                {
                    var ingredientsList = string.IsNullOrEmpty(recipe.IngredientsJson) ? new List<Recipe.Ingredient>() : JsonSerializer.Deserialize<List<Recipe.Ingredient>>(recipe.IngredientsJson, new JsonSerializerOptions());
                    return ingredientsList != null && ingredientsList.Any(ingred => ingred.name == ingredient);
                }
            )
            .ToList();
        if (!recipes.Any()) { return NotFound(); }
        return Ok(recipes);
    }

    /// <summary>
    /// Search recipes by cuisine
    /// </summary>
    [HttpGet("/recipes/searchByCuisine/{cuisine}")]
    public ActionResult<IEnumerable<Recipe>> GetFilterRecipesByCuisine(string cuisine)
    {
        var recipes = _recipeContext.Recipes.Where(s => s.Cuisine != null && s.Cuisine.Contains(cuisine)).ToList();
        if (!recipes.Any()) { return NotFound(); }
        return Ok(recipes);
    }


    /// <summary>
    /// Search a recipe by its title.
    /// </summary>
    [HttpGet("/recipes/searchByTitle/{title}")]
    public ActionResult<IEnumerable<Recipe>> GetFilterRecipesByTitle(string title)
    {
        var recipes = _recipeContext.Recipes.Where(s => s.Title != null && s.Title.Contains(title)).ToList();
        if (!recipes.Any()) { return NotFound(); }
        return Ok(recipes);
    }
}
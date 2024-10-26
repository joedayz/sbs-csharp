using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RecipesApi.Models;

var builder = WebApplication.CreateBuilder(args);

var connectionstring = "User ID=sa;password=Perusalen123$;server=localhost;Database=recipes;TrustServerCertificate=True;";
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<RecipeContext>(opt =>opt.UseSqlServer(connectionstring));
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("_myPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin();
    });
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "RecipesApi", Version = "v1" });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("_myPolicy");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.Run();

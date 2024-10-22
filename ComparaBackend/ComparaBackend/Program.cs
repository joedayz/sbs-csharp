using ComparaBackend.DataAccess;
using ComparaBackend.Interfaces;
using ComparaBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ComparaDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddTransient<IOpcionService, OpcionDataAccessLayer>();
builder.Services.AddTransient<IDepartamentoService, DepartamentoDataAccessLayer>();
builder.Services.AddTransient<IConsultaProductoService, ConsultaProductoDataAccessLayer>();
builder.Services.AddTransient<IProspectoService, ProspectoDataAccessLayer>();

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("_myPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin();
    });
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ComparaBackend", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ComparaBackend v1"));
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();
app.UseCors("_myPolicy");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.Run();
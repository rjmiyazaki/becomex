using Microsoft.EntityFrameworkCore;
using Becomex.api.Models;

namespace Becomex.api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Links> Links { get; set; }
    }
}


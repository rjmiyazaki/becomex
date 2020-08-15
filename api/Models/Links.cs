using System.ComponentModel.DataAnnotations;

namespace Becomex.api.Models
{
    public class Links
    {
        [Key]
        public string HyperLink { get; set; }

        public string jsonData { get; set; }
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System.Net.Http.Headers;
using Becomex.api.Data;
using Becomex.api.Models;

namespace Becomex.api.Controllers
{
    [ApiController]
    [Route("v1/countries")]
    public class LinkController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<string>> Get([FromServices] DataContext context)
        {
            string url = "https://restcountries.eu/rest/v2/all?fields=name";
            
            var links = await context.Links
                .Include(x => x)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.HyperLink == url);
                
            if (links == null)
            {
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Accept.Clear();

                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.GetAsync(url).Result;
                    string conteudo = response.Content.ReadAsStringAsync().Result;

                    Links model = new Links();
                    model.HyperLink = url;
                    model.jsonData = conteudo;

                    context.Links.Add(model);
                    await context.SaveChangesAsync();

                    links = model;
                }
            }
            
            return links.jsonData;
        }

        [HttpGet]
        [Route("name/{name}")]
        public async Task<ActionResult<string>> GetByName([FromServices] DataContext context, string name)
        {        
            string baseurl = "https://restcountries.eu/rest/v2/name/";
            string fields =  "?fields=name;alpha2Code;alpha3Code;currencies;flag;regionalBlocs";
            string url = baseurl + name + fields;
            
            var links = await context.Links
                .Include(x => x)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.HyperLink == url);
                
            if (links == null)
            {
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Accept.Clear();

                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.GetAsync(url).Result;
                    string conteudo = response.Content.ReadAsStringAsync().Result;

                    Links model = new Links();
                    model.HyperLink = url;
                    model.jsonData = conteudo;

                    context.Links.Add(model);
                    await context.SaveChangesAsync();

                    links = model;
                }
            }
            
            return links.jsonData;
        }

        [HttpGet]
        [Route("currency/{name}")]
        public async Task<ActionResult<string>> GetByCurrency([FromServices] DataContext context, string name)
        {        
            string baseurl = "https://restcountries.eu/rest/v2/currency/";
            string fields =  "?fields=name;alpha2Code;alpha3Code;currencies;flag;regionalBlocs";
            string url = baseurl + name + fields;
            
            var links = await context.Links
                .Include(x => x)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.HyperLink == url);
                
            if (links == null)
            {
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Accept.Clear();

                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.GetAsync(url).Result;
                    string conteudo = response.Content.ReadAsStringAsync().Result;

                    Links model = new Links();
                    model.HyperLink = url;
                    model.jsonData = conteudo;

                    context.Links.Add(model);
                    await context.SaveChangesAsync();

                    links = model;
                }
            }
            
            return links.jsonData;
        }

        [HttpGet]
        [Route("alpha/{name}")]
        public async Task<ActionResult<string>> GetByAlpha([FromServices] DataContext context, string name)
        {        
            string baseurl = "https://restcountries.eu/rest/v2/alpha/";
            string fields =  "?fields=name;alpha2Code;alpha3Code;currencies;flag;regionalBlocs";
            string url = baseurl + name + fields;
            
            var links = await context.Links
                .Include(x => x)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.HyperLink == url);
                
            if (links == null)
            {
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Accept.Clear();

                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.GetAsync(url).Result;
                    string conteudo = '[' + response.Content.ReadAsStringAsync().Result + ']';

                    Links model = new Links();
                    model.HyperLink = url;
                    model.jsonData = conteudo;

                    context.Links.Add(model);
                    await context.SaveChangesAsync();

                    links = model;
                }
            }
            
            return links.jsonData;
        }

        [HttpGet]
        [Route("info/{name}")]
        public async Task<ActionResult<string>> GetInfo([FromServices] DataContext context, string name)
        {        
            string baseurl = "https://restcountries.eu/rest/v2/name/";
            string fields =  "?fields=name;alpha2Code;alpha3Code;currencies;flag;regionalBlocs;population;timezones;languages;capital;borders";
            string url = baseurl + name + fields;
            
            var links = await context.Links
                .Include(x => x)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.HyperLink == url);
                
            if (links == null)
            {
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Accept.Clear();

                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    HttpResponseMessage response = client.GetAsync(url).Result;
                    string conteudo = response.Content.ReadAsStringAsync().Result;

                    Links model = new Links();
                    model.HyperLink = url;
                    model.jsonData = conteudo;

                    context.Links.Add(model);
                    await context.SaveChangesAsync();

                    links = model;
                }
            }
            
            return links.jsonData;
        }
    }

    
}
import { fetchSerapiImages } from '@/actions/serapi/fetch-serapi-images'
import type { ImageSearchRepository, ImgMealData, SerpApiData } from '@/types'

export class FetchImageSearchRepository implements ImageSearchRepository {
  mapSerpApiData = (data: SerpApiData): ImgMealData[] => {
    return data.images_results.map((result) => ({
      imgSrc: result.original,
      title: result.title
    }))
  }

  getByQuery = async (query: string) => {
    const result = await fetchSerapiImages(query)
    return this.mapSerpApiData(result)
  }

  getByQuery_ = async (query: string) => {
    console.log('fake fetch with query', query)
    const data = fakeData
    return this.mapSerpApiData(data)
  }
}

export const fakeData: SerpApiData = {
  search_metadata: {
    id: '64e7c4f0f26ac60f8b85f85a',
    status: 'Success',
    json_endpoint: 'https://serpapi.com/searches/40f5870fffaaeba0/64e7c4f0f26ac60f8b85f85a.json',
    created_at: '2023-08-24 21:00:32 UTC',
    processed_at: '2023-08-24 21:00:32 UTC',
    google_images_url:
      'https://www.google.com/search?q=lomo+saltado&oq=lomo+saltado&uule=w+CAIQICINQXJlcXVpcGEsUGVydQ&hl=es&gl=pe&tbm=isch',
    raw_html_file: 'https://serpapi.com/searches/40f5870fffaaeba0/64e7c4f0f26ac60f8b85f85a.html',
    total_time_taken: 1.5
  },
  search_parameters: {
    engine: 'google_images',
    q: 'lomo saltado',
    location_requested: 'Arequipa, Peru',
    location_used: 'Arequipa,Peru',
    google_domain: 'google.com',
    hl: 'es',
    gl: 'pe',
    device: 'mobile'
  },
  search_information: {
    menu_items: [
      {
        position: 1,
        title: 'Todo',
        link: 'https://www.google.com/search?q=lomo+saltado&source=lmns&gl=pe&hl=es&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ0pQJKAB6BAgAEAY',
        serpapi_link:
          'https://serpapi.com/search.json?device=desktop&engine=google&gl=pe&google_domain=google.com&hl=es&q=lomo+saltado'
      },
      {
        position: 2,
        title: 'Imágenes'
      },
      {
        position: 3,
        title: 'Vídeos',
        link: 'https://www.google.com/search?q=lomo+saltado&source=lmns&tbm=vid&gl=pe&hl=es&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ0pQJKAJ6BAgAEAo',
        serpapi_link:
          'https://serpapi.com/search.json?device=desktop&engine=google_videos&gl=pe&google_domain=google.com&hl=es&q=lomo+saltado'
      },
      {
        position: 4,
        title: 'Noticias',
        link: 'https://www.google.com/search?q=lomo+saltado&source=lmns&tbm=nws&gl=pe&hl=es&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ0pQJKAN6BAgAEAw',
        serpapi_link:
          'https://serpapi.com/search.json?device=desktop&engine=google&gl=pe&google_domain=google.com&hl=es&q=lomo+saltado&tbm=nws'
      },
      {
        position: 5,
        title: 'Maps',
        link: 'https://maps.google.com/maps?q=lomo+saltado&source=lmns&entry=mc&gl=pe&hl=es&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ0pQJKAR6BAgAEA4'
      },
      {
        position: 6,
        title: 'Libros',
        link: 'https://www.google.com/search?q=lomo+saltado&source=lmns&tbm=bks&gl=pe&hl=es&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ0pQJKAV6BAgAEBA'
      },
      {
        position: 7,
        title: 'Vuelos',
        link: 'https://www.google.com/travel/flights?q=lomo+saltado&source=lmns&tbm=flm&gl=pe&hl=es&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ0pQJKAZ6BAgAEBI'
      }
    ]
  },
  suggested_searches: [
    {
      name: 'peruano',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:peruano:agyxhbyyUQc%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoAHoECAEQBQ',
      chips: 'q:lomo+saltado,g_1:peruano:agyxhbyyUQc%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aperuano%3AagyxhbyyUQc%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/8b2a5c443fa2b4d844d40b64a52aa56301e68227706dbe9218d7bb86f66d37c0.jpeg'
    },
    {
      name: 'receta',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:receta:s4zkf_c2_-0%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoAXoECAEQBw',
      chips: 'q:lomo+saltado,g_1:receta:s4zkf_c2_-0%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Areceta%3As4zkf_c2_-0%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/8b2a5c443fa2b4d844d40b64a52aa563fadcf43d5d668e78a1745cbb24721953.jpeg'
    },
    {
      name: 'plato',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:plato:ZuM-_SC7OWs%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoAnoECAEQCQ',
      chips: 'q:lomo+saltado,g_1:plato:ZuM-_SC7OWs%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aplato%3AZuM-_SC7OWs%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/8b2a5c443fa2b4d844d40b64a52aa5630d2cd26ab81f6a0a83e82a7b6943082a.jpeg'
    },
    {
      name: 'gourmet',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:gourmet:hCN6yyDY9ys%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoA3oECAEQCw',
      chips: 'q:lomo+saltado,g_1:gourmet:hCN6yyDY9ys%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Agourmet%3AhCN6yyDY9ys%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/8b2a5c443fa2b4d844d40b64a52aa56385f13e701899489c73790732f38bd27d.jpeg'
    },
    {
      name: 'presentacion',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:presentacion:xu9JqhX-XOw%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoBHoECAEQDQ',
      chips: 'q:lomo+saltado,g_1:presentacion:xu9JqhX-XOw%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Apresentacion%3Axu9JqhX-XOw%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NPztfmNZmrf7hc5otU_IphxzY5uRZ-79vNCyhqQdfgHSsMhzRb2a84g&usqp=CAU'
    },
    {
      name: 'dibujo',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:dibujo:xrw5Xp0Jtwg%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoBXoECAEQDw',
      chips: 'q:lomo+saltado,g_1:dibujo:xrw5Xp0Jtwg%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Adibujo%3Axrw5Xp0Jtwg%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7bTAnjRMIyXe2V_17wu2xVmS0vRao8hFkt-ZPjq_oYWgZ-OuO8yJdI4&usqp=CAU'
    },
    {
      name: 'gaston acurio',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:gaston+acurio:YRtdy1Ki_gc%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoBnoECAEQEQ',
      chips: 'q:lomo+saltado,g_1:gaston+acurio:YRtdy1Ki_gc%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Agaston%2Bacurio%3AYRtdy1Ki_gc%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqAEVYrrdIo_wFjQWSsN_PyfAg2h0e8fo_SdKkZgEe-mh1pA8fQgxXcM&usqp=CAU'
    },
    {
      name: 'ceviche',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:ceviche:mhM-61OU05I%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoB3oECAEQEw',
      chips: 'q:lomo+saltado,g_1:ceviche:mhM-61OU05I%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aceviche%3AmhM-61OU05I%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMAbGNY_1H96JQm0CwkluMzYSi_UNxw3tOTelSKHSIk1B4vmwWZWl97o&usqp=CAU'
    },
    {
      name: 'chaufa',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:chaufa:jqHiITzedus%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoCHoECAEQFQ',
      chips: 'q:lomo+saltado,g_1:chaufa:jqHiITzedus%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Achaufa%3AjqHiITzedus%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZCcHZAD_eYo5jNvQwTULK2iRqsHz5mou1H1xl0evVrwxJcKkEJjqAdg&usqp=CAU'
    },
    {
      name: 'pollo',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:pollo:9Lc5PeRs0kI%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoCXoECAEQFw',
      chips: 'q:lomo+saltado,g_1:pollo:9Lc5PeRs0kI%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Apollo%3A9Lc5PeRs0kI%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvP62Dmy_50BWD73HRkaQXxGNKfqV_zzPcNg1M0jIq3w-dOdPHcnHo08g&usqp=CAU'
    },
    {
      name: 'preparacion',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:preparacion:VpU-02Vu2n8%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoCnoECAEQGQ',
      chips: 'q:lomo+saltado,g_1:preparacion:VpU-02Vu2n8%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Apreparacion%3AVpU-02Vu2n8%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6k4gBQktX9fMeoPu00NZNvCHpVlZzbDhV0PKk5n3PaMvFE6llMYvNHA&usqp=CAU'
    },
    {
      name: 'emplatado',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:emplatado:_1EXSCVN6XA%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoC3oECAEQGw',
      chips: 'q:lomo+saltado,g_1:emplatado:_1EXSCVN6XA%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aemplatado%3A_1EXSCVN6XA%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wAvixXX17ZHcrG5k1VJCmqhYbjvwbjKxiXgaaurbZKc2x6VB8YrHrFE&usqp=CAU'
    },
    {
      name: 'carne',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:carne:--JIm4MDREg%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoDHoECAEQHQ',
      chips: 'q:lomo+saltado,g_1:carne:--JIm4MDREg%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Acarne%3A--JIm4MDREg%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME2uruPiGPJGRjGwL_R6k5icbm--GcHlfWrov4r_1koJIUf4f8OnDvi4&usqp=CAU'
    },
    {
      name: 'comida',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:comida:KIPyXi9FMS0%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoDXoECAEQHw',
      chips: 'q:lomo+saltado,g_1:comida:KIPyXi9FMS0%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Acomida%3AKIPyXi9FMS0%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6hERFZDFGP8cyIaTkEyU0FxiKzlpQOLqcJam0ChYsGel9p03qldhUdw&usqp=CAU'
    },
    {
      name: 'decoracion',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:decoracion:dBwvnQSOz8g%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoDnoECAEQIQ',
      chips: 'q:lomo+saltado,g_1:decoracion:dBwvnQSOz8g%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Adecoracion%3AdBwvnQSOz8g%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuFc5ejDR8L6I4lSE5N--yllt5v4mdqN5kO_RVi9y-YRGoyqCcU5Q42o&usqp=CAU'
    },
    {
      name: 'chifa',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:chifa:v9XkwI_C43g%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoD3oECAEQIw',
      chips: 'q:lomo+saltado,g_1:chifa:v9XkwI_C43g%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Achifa%3Av9XkwI_C43g%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKGb2VdclvbE2OCteeDJRgr5foYwIUVcXXLMoGUrmUktDtgQwf4BxkkQ&usqp=CAU'
    },
    {
      name: 'criollo',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:criollo:GWdhtikF2ts%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoEHoECAEQJQ',
      chips: 'q:lomo+saltado,g_1:criollo:GWdhtikF2ts%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Acriollo%3AGWdhtikF2ts%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1haRWOof6gA32mvAOgfxMNgm96xlSsFMFru2-VcgU7fVf-slMJHQNpg&usqp=CAU'
    },
    {
      name: 'fino',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:fino:RBTU6KbiIuY%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoEXoECAEQJw',
      chips: 'q:lomo+saltado,g_1:fino:RBTU6KbiIuY%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Afino%3ARBTU6KbiIuY%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4BSLe4zFJNckOBcC2IemFSsKceER37iiJnEDlzsn0Nl-mxUA5YbphRU&usqp=CAU'
    },
    {
      name: 'animado',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:animado:kr5phEeNxn0%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoEnoECAEQKQ',
      chips: 'q:lomo+saltado,g_1:animado:kr5phEeNxn0%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aanimado%3Akr5phEeNxn0%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjTwMUmI_c-zPSk21Ai6ihPDJZwj8phgMbeQPCwEBAMlolVrsTyvdLz8&usqp=CAU'
    },
    {
      name: 'caricatura',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:caricatura:KdjGpViYPgs%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoE3oECAEQKw',
      chips: 'q:lomo+saltado,g_1:caricatura:KdjGpViYPgs%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Acaricatura%3AKdjGpViYPgs%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZwKiZnqxjHx9Vo_AqoZQPpFWMISmSynAdBb_h8EORusCC1Q1pMxcibE&usqp=CAU'
    },
    {
      name: 'papas fritas',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:papas+fritas:Gi_JSk5GU9U%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoFHoECAEQLQ',
      chips: 'q:lomo+saltado,g_1:papas+fritas:Gi_JSk5GU9U%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Apapas%2Bfritas%3AGi_JSk5GU9U%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBmREZ_5P_HOcPtMxXXFRo8OSMRlYirEJv1ApZwWfs3MX4DCTiZGOUUs&usqp=CAU'
    },
    {
      name: 'sandwich',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:sandwich:Sz6y2vRsTXU%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoFXoECAEQLw',
      chips: 'q:lomo+saltado,g_1:sandwich:Sz6y2vRsTXU%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Asandwich%3ASz6y2vRsTXU%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFO1U3OI3zf_WZQMg2s5VrHZbKCJH5yEa2G_ZkMn-A0Cmnbrad_cEFQ4&usqp=CAU'
    },
    {
      name: 'rico',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:rico:va-A0fxPi9A%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoFnoECAEQMQ',
      chips: 'q:lomo+saltado,g_1:rico:va-A0fxPi9A%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Arico%3Ava-A0fxPi9A%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYsijKtC6fdABHwnJu2KPZ3rylL0U-3SJOIvJRk5x9u8gcu_24-po0Xs&usqp=CAU'
    },
    {
      name: 'vector',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:vector:eVCjeXz7wMY%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoF3oECAEQMw',
      chips: 'q:lomo+saltado,g_1:vector:eVCjeXz7wMY%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Avector%3AeVCjeXz7wMY%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJR5DHGdsksV5KpoDOqgmwQRjQQOkuRH6AuHkNfbrgJAB-bRSeoqcnwc&usqp=CAU'
    },
    {
      name: 'risotto',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:risotto:8Y6T2rhTmlA%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoGHoECAEQNQ',
      chips: 'q:lomo+saltado,g_1:risotto:8Y6T2rhTmlA%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Arisotto%3A8Y6T2rhTmlA%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-6U3wDhQc4qlIGNZ_aJ3-OHxfoxrfC9iaALL0gOYvr13kopt-d3-FbA&usqp=CAU'
    },
    {
      name: 'historia',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:historia:reaE-dgmPQY%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoGXoECAEQNw',
      chips: 'q:lomo+saltado,g_1:historia:reaE-dgmPQY%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Ahistoria%3AreaE-dgmPQY%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTda0VVtpko-7ohMIamOsIBPgiU1DDbHzWZ7zYR7LJb3dtTBnKDsRhsPGU&usqp=CAU'
    },
    {
      name: 'elegante',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:elegante:ptGuSX4WVKw%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoGnoECAEQOQ',
      chips: 'q:lomo+saltado,g_1:elegante:ptGuSX4WVKw%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aelegante%3AptGuSX4WVKw%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wih39ujzPDQMPhIwX3ogTRnED0GkHHoWCOcFTo3Q2c9x_S_7eku8cx4&usqp=CAU'
    },
    {
      name: 'cebolla',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:cebolla:YfmrdQA5AXo%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoG3oECAEQOw',
      chips: 'q:lomo+saltado,g_1:cebolla:YfmrdQA5AXo%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Acebolla%3AYfmrdQA5AXo%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9D_GNS7OgNj7DMBS9J_B-PlJad0AoFtERsOuuqUk6tflxVQrOHtTaAlE&usqp=CAU'
    },
    {
      name: 'arroz',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:arroz:z1eCyitorhk%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoHHoECAEQPQ',
      chips: 'q:lomo+saltado,g_1:arroz:z1eCyitorhk%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Aarroz%3Az1eCyitorhk%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qSjRa0_Z3xZJL2ofNlRVHGK9_yEtK3z-nzmv8ifUnQjLYE90AV2XV18&usqp=CAU'
    },
    {
      name: 'salsa',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:salsa:H4JPopyAW9Y%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoHXoECAEQPw',
      chips: 'q:lomo+saltado,g_1:salsa:H4JPopyAW9Y%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Asalsa%3AH4JPopyAW9Y%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDMTfKqUlDcaRjbDyki9Kjif613KRDaIbh4bjPlHGN4Szk8sJGx2uvIU&usqp=CAU'
    },
    {
      name: 'hikari',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:hikari:xIK7zVx4Zxg%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoHnoECAEQQQ',
      chips: 'q:lomo+saltado,g_1:hikari:xIK7zVx4Zxg%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Ahikari%3AxIK7zVx4Zxg%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvAOt_hhnJtfYj6bNiqa6WnwpLoLyZLamO1Byp-evmXURuJ5yr_6p-6k&usqp=CAU'
    },
    {
      name: 'sarten',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:sarten:-H6KieIIWho%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoH3oECAEQQw',
      chips: 'q:lomo+saltado,g_1:sarten:-H6KieIIWho%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Asarten%3A-H6KieIIWho%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXq5KD9pDr7C7o0B5SA8hOdHwEPoiSCJWcilvfboZ0gT90OoRWPBlO-Ck&usqp=CAU'
    },
    {
      name: 'publicidad',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,g_1:publicidad:ePoKBJtmhvo%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoIHoECAEQRQ',
      chips: 'q:lomo+saltado,g_1:publicidad:ePoKBJtmhvo%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Cg_1%3Apublicidad%3AePoKBJtmhvo%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjsbeHCCkQKkOUFrJSkGaixgVH2cFIA5lSKQR3or2KXIMS4WVdu7IgfA&usqp=CAU'
    },
    {
      name: 'receta de',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:receta+de:gbL5rrA35c8%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoIXoECAEQRw',
      chips: 'q:lomo+saltado,online_chips:receta+de:gbL5rrA35c8%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Areceta%2Bde%3AgbL5rrA35c8%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60u9GWkkMJVo2bxxF79MBmTrBAdoVGF6J2NouP6c&usqp=CAU'
    },
    {
      name: 'comida peruana',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:comida+peruana:agyxhbyyUQc%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoInoECAEQSQ',
      chips: 'q:lomo+saltado,online_chips:comida+peruana:agyxhbyyUQc%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Acomida%2Bperuana%3AagyxhbyyUQc%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMDStdSJceg7k5_AAerQDD1LbcGSpiED2LUP57m25eKr6pYy-&usqp=CAU'
    },
    {
      name: 'lomo fino',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:lomo+fino:MB98b1fT0Mo%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoI3oECAEQSw',
      chips: 'q:lomo+saltado,online_chips:lomo+fino:MB98b1fT0Mo%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Alomo%2Bfino%3AMB98b1fT0Mo%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemgXf8PljxNs70TXFeO86Kirg77-Y-D7gwAq_bK0&usqp=CAU'
    },
    {
      name: 'plato típico',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:plato+t%C3%ADpico:2YVo1CD2eDI%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoJHoECAEQTQ',
      chips: 'q:lomo+saltado,online_chips:plato+t%C3%ADpico:2YVo1CD2eDI%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Aplato%2Bt%25C3%25ADpico%3A2YVo1CD2eDI%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyswOn2TpsSQyUKG-SBxYFo70VL8rYRiTUPdzt3OgdjRXojjO&usqp=CAU'
    },
    {
      name: 'de pollo saltado',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:de+pollo+saltado:ZuM-_SC7OWs%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoJXoECAEQTw',
      chips: 'q:lomo+saltado,online_chips:de+pollo+saltado:ZuM-_SC7OWs%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Ade%2Bpollo%2Bsaltado%3AZuM-_SC7OWs%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUxDMYGiZDQBpqxE95gs2wuSw2KtbNZ7SkcLVoeWZo94luuRD&usqp=CAU'
    },
    {
      name: 'cocina peruana',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:cocina+peruana:-SZJCA0SqK4%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoJnoECAEQUQ',
      chips: 'q:lomo+saltado,online_chips:cocina+peruana:-SZJCA0SqK4%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Acocina%2Bperuana%3A-SZJCA0SqK4%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQif7tdos8LLPyPEenQ5aqZ3FgCkswo3pd0EIJ_Yt5AacDBSxsC&usqp=CAU'
    },
    {
      name: 'saltado receta peruana',
      link: 'https://www.google.com/search?q=lomo+saltado&tbm=isch&hl=es&gl=pe&chips=q:lomo+saltado,online_chips:saltado+receta+peruana:7Xo6w1gaFwE%3D&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQ4lYoJ3oECAEQUw',
      chips: 'q:lomo+saltado,online_chips:saltado+receta+peruana:7Xo6w1gaFwE%3D',
      serpapi_link:
        'https://serpapi.com/search.json?chips=q%3Alomo%2Bsaltado%2Conline_chips%3Asaltado%2Breceta%2Bperuana%3A7Xo6w1gaFwE%253D&device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVQiBuR_AbgnBM_MnRrDXotXWKIBA5Rc6drJAt1XvWoacjmNN&usqp=CAU'
    }
  ],
  images_results: [
    {
      position: 1,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e922964647497046d19c68ca81a36a73a7af67a81b7862f1b26fef.jpeg',
      related_content_id: 'QVJjYVdNTTZldTJqbU1cIixcInhONUlpX1lvRDJSMEdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=QVJjYVdNTTZldTJqbU1cIixcInhONUlpX1lvRDJSMEdN',
      source: 'BUENAZO',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e922964647497046d19c684a645ebc56379aa60a2c5662d0cd83c2.png',
      title: 'Lomo saltado: receta paso a paso | Recetas Buenazo',
      link: 'https://buenazo.pe/recetas/platos-de-fondolomo-saltado-receta-paso-paso-893',
      original:
        'https://buenazo.cronosmedia.glr.pe/original/2022/06/20/62aea00d119a8801813a563b.jpg',
      original_width: 1200,
      original_height: 660,
      is_product: false
    },
    {
      position: 2,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e922962dee1a82570c99727e162d7a6170fcfe237f27a3a7bb5a81.jpeg',
      related_content_id: 'VHg4V3NYYTliWDFEYk1cIixcIjQ1VkpQU0lLYTVEaU1N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=VHg4V3NYYTliWDFEYk1cIixcIjQ1VkpQU0lLYTVEaU1N',
      source: 'El Olivar',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e922962dee1a82570c9972c190ea978e4634c877a0d2f4656b19f0.png',
      title: 'Lomo saltado – El Olivar',
      link: 'https://www.elolivar.com.pe/cocina-con-el-olivar/lomo-saltado/',
      original: 'https://www.elolivar.com.pe/wp-content/uploads/2021/08/lomo-saltado.png',
      original_width: 870,
      original_height: 635,
      is_product: false
    },
    {
      position: 3,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f767cf243eab0f4e227076b913877ff6db.jpeg',
      related_content_id: 'TFRGRkwxN3lneWkweE1cIixcIlhkVUhCRFY5NjRTRktN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=TFRGRkwxN3lneWkweE1cIixcIlhkVUhCRFY5NjRTRktN',
      source: 'Comidas Peruanas',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f796cef8560cd8cb13a5f70cf42e39262b.png',
      title: 'Lomo Saltado LA MEJOR RECETA - Comidas Peruanas',
      link: 'https://decomidaperuana.com/lomo-saltado/',
      original: 'https://decomidaperuana.com/wp-content/uploads/2020/10/lomo-saltado.jpg',
      original_width: 750,
      original_height: 430,
      is_product: false
    },
    {
      position: 4,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229674dcc633024ccb0a700d51bcec6fdf252b0eef73c65794b4.jpeg',
      related_content_id: 'RldWa1FWdnVLVllDbk1cIixcIjJqRl92MFc4cS1WSzFN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=RldWa1FWdnVLVllDbk1cIixcIjJqRl92MFc4cS1WSzFN',
      source: 'QueRicaVida.com',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229674dcc633024ccb0afc180e2aafb03ec6767a42d2eb1e304f.png',
      title: 'Receta de Lomo Saltado | QueRicaVida.com',
      link: 'https://www.quericavida.com/recetas/lomo-saltado/5ea8ace7-4c81-4bf7-930d-fe69322febaf',
      original:
        'https://images-gmi-pmc.edge-generalmills.com/912d285a-5205-4f15-aef6-8eeb025b496f.jpg',
      original_width: 806,
      original_height: 453,
      is_product: false
    },
    {
      position: 5,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e92296dce9ef54add2541a7c419be9bf8caf365d0f590f011a94d6.jpeg',
      related_content_id: 'azVOdjVlOXVKTXMyME1cIixcInlLN0NRT2hHUHNMZGFN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=azVOdjVlOXVKTXMyME1cIixcInlLN0NRT2hHUHNMZGFN',
      source: 'Wikipedia',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e92296dce9ef54add2541a401971d12ce0b55d54a5aa0bf8a12ea1.png',
      title: 'Lomo saltado - Wikipedia, la enciclopedia libre',
      link: 'https://es.wikipedia.org/wiki/Lomo_saltado',
      original:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lomo-saltado-perudelights.jpg/640px-Lomo-saltado-perudelights.jpg',
      original_width: 640,
      original_height: 414,
      is_product: false
    },
    {
      position: 6,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUzndZSAWxlN6n5GQ3VFmVHoJmG6DNAtEig&usqp=CAU',
      related_content_id: 'ei1VM3NLNzVzb0hsTE1cIixcIjBJRUptRlUtbS0wV3lN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=ei1VM3NLNzVzb0hsTE1cIixcIjBJRUptRlUtbS0wV3lN',
      source: 'Recetas - Enfemenino',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://recetas.enfemenino.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado : Receta de Lomo saltado - enfemenino',
      link: 'https://recetas.enfemenino.com/recipes/recipe_lomo-saltado_374671.html',
      original: 'https://assets.afcdn.com/recipe/20210416/119490_w1024h1024c1cx363cy240.jpg',
      original_width: 1024,
      original_height: 1024,
      is_product: false
    },
    {
      position: 7,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyfXPafkIa_zK3FfcvSDmBy1kvK0mfCMjSw&usqp=CAU',
      related_content_id: 'N2Y4MjkzX2tqTE1wWE1cIixcIllfMDlJWmRKWVZtcHpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=N2Y4MjkzX2tqTE1wWE1cIixcIllfMDlJWmRKWVZtcHpN',
      source: 'Directo al Paladar',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://directoalpaladar.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Cómo hacer lomo saltado, la receta peruana más auténtica',
      link: 'https://www.directoalpaladar.com/recetas-de-carnes-y-aves/como-hacer-lomo-saltado-receta-peruana-autentica/amp',
      original: 'https://i.blogs.es/5620ff/lomo-saltado-dap/840_560.jpg',
      original_width: 840,
      original_height: 560,
      is_product: false
    },
    {
      position: 8,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBve9rwDSKmN7b_5cQIRd4FJZ5Ktx660SSg&usqp=CAU',
      related_content_id: 'X3NiV2xaWnMxUWhxTk1cIixcIlh2dk5vWXZxN29IM01N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=X3NiV2xaWnMxUWhxTk1cIixcIlh2dk5vWXZxN29IM01N',
      source: 'Bon Viveur',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://bonviveur.es&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado, auténtica y sencilla receta peruana para cocinar en casa',
      link: 'https://www.bonviveur.es/recetas/lomo-saltado',
      original: 'https://imag.bonviveur.com/lomo-saltado.jpg',
      original_width: 1200,
      original_height: 794,
      is_product: false
    },
    {
      position: 9,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwkLi2XqzURPtGr9eZRIzbxq8gNKRj2ZyGA&usqp=CAU',
      related_content_id: 'YmVSdHBxdTc3c3RFTU1cIixcIkZEWi1STjJySVpLWFNN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=YmVSdHBxdTc3c3RFTU1cIixcIkZEWi1STjJySVpLWFNN',
      source: 'Comida Peruana Web',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comidaperuanaweb.org&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: '▷ Receta de LOMO SALTADO de CARNE o POLLO »【2023】',
      link: 'https://comidaperuanaweb.org/receta/lomo-saltado-de-carne-pollo/',
      original:
        'https://comidaperuanaweb.org/wp-content/uploads/2018/10/Receta-de-Lomo-Saltado-de-Carne-Pollo-1-1.jpg',
      original_width: 699,
      original_height: 406,
      is_product: false
    },
    {
      position: 10,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO2ViTq3pEh7T7yYUFIM7WGSfo-CSRdGn5g&usqp=CAU',
      related_content_id: 'dGxnZEs2QTY2N3JoOE1cIixcIk9PUVEySktKZ3V3NVdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=dGxnZEs2QTY2N3JoOE1cIixcIk9PUVEySktKZ3V3NVdN',
      source: 'PQS',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://pqs.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'El lomo saltado está 49% más caro que hace un año para limeños',
      link: 'https://pqs.pe/actualidad/economia/el-lomo-saltado-esta-49-mas-caro-que-hace-un-ano-para-limenos/',
      original: 'https://pqs.pe/wp-content/uploads/2022/10/Lomo-saltado.jpg',
      original_width: 1000,
      original_height: 665,
      is_product: false
    },
    {
      position: 11,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7wucx6iEAnCs2iGRPChJJkBKm3U2L7kPJA&usqp=CAU',
      related_content_id: 'ZVBIakphVWs0d1RjOU1cIixcIi1haFVKLXh4Y3RveUpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=ZVBIakphVWs0d1RjOU1cIixcIi1haFVKLXh4Y3RveUpN',
      source: 'Tasty',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://tasty.co&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Peruvian Lomo Saltado Recipe by Tasty',
      link: 'https://tasty.co/recipe/peruvian-lomo-saltado',
      original:
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d9673a70e9a2403b884df8eeec467b6b/Fries_FB.jpg?resize=1200:*',
      original_width: 1200,
      original_height: 1200,
      is_product: false
    },
    {
      position: 12,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVxT3WRPGm1K264WIxCeYn4b4qeCSQC_U5g&usqp=CAU',
      related_content_id: 'Wlk1WVdlT29majJoUU1cIixcIk5QQ0lYRmpLUDNMYUZN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Wlk1WVdlT29majJoUU1cIixcIk5QQ0lYRmpLUDNMYUZN',
      source: 'Chewing Happiness',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://chewinghappiness.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - Plato Fusion - Chino Peruano | Plato Peruano',
      link: 'https://chewinghappiness.com/es/lomo-saltado/',
      original: 'https://chewinghappiness.com/wp-content/uploads/2019/08/Lomo-Saltado-scaled.jpg',
      original_width: 2560,
      original_height: 1704,
      is_product: false
    },
    {
      position: 13,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRyAY2aPVTbUO6yns9sEzOF71V_Q1j7ciCw&usqp=CAU',
      related_content_id: 'V09iTjZVdzIxNGtQc01cIixcImtmYVZoWlp6Zm9QdGdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=V09iTjZVdzIxNGtQc01cIixcImtmYVZoWlp6Zm9QdGdN',
      source: 'plazaVea',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://blog.plazavea.com.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'La mejor receta de lomo saltado en 8 pasos | plazaVea',
      link: 'https://blog.plazavea.com.pe/receta-lomo-saltado/',
      original:
        'https://blog.plazavea.com.pe/wp-content/uploads/2023/05/receta-de-lomo-saltado.jpg',
      original_width: 1200,
      original_height: 800,
      is_product: false
    },
    {
      position: 14,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3T42Xm_tgWVmInLZbkimL4oXS6MqsoGCAQ&usqp=CAU',
      related_content_id: 'X1BqdGZ0OE9Vd2Vjak1cIixcImEwQXMtcEJUZS0tdEJN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=X1BqdGZ0OE9Vd2Vjak1cIixcImEwQXMtcEJUZS0tdEJN',
      source: 'La Comarca',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://lacomarca.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - La Comarca',
      link: 'https://www.lacomarca.pe/product/lomo-saltado/',
      original: 'https://www.lacomarca.pe/wp-content/uploads/2023/02/Lomo-Saltado.jpg',
      original_width: 1000,
      original_height: 1000,
      is_product: false
    },
    {
      position: 15,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0haB4pZE4W4Ay_1klgW0HyaFqCFU7SKifQ&usqp=CAU',
      related_content_id: 'eUI2SHl5UmlTVE1qaE1cIixcIlRiY2pHM3BpNnNEX0RN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=eUI2SHl5UmlTVE1qaE1cIixcIlRiY2pHM3BpNnNEX0RN',
      source: 'YouTube',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://youtube.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Haz el LOMO SALTADO PERUANO perfecto! - YouTube',
      link: 'https://www.youtube.com/watch?v=r2oGrH__hT0',
      original: 'https://i.ytimg.com/vi/r2oGrH__hT0/maxresdefault.jpg',
      original_width: 1280,
      original_height: 720,
      is_product: false
    },
    {
      position: 16,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TZTRXa9kJny86-9Hs-t_8Grwevu9lT6Zog&usqp=CAU',
      related_content_id: 'cjgyci0taF82QkVGV01cIixcIm10RU5tTHZDX0dMUjZN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=cjgyci0taF82QkVGV01cIixcIm10RU5tTHZDX0dMUjZN',
      source: 'Recetas De Comidas Peruanas.',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://recetascocinaperuana.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Cómo Preparar Lomo saltado Peruano】Receta Peruana.',
      link: 'https://recetascocinaperuana.com/lomo-saltado-receta-peruana',
      original: 'https://recetascocinaperuana.com/wp-content/uploads/2020/05/lomo-saltado.jpg',
      original_width: 700,
      original_height: 429,
      is_product: false
    },
    {
      position: 17,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XPOACMQbOy3GXcC0CwLE4IVcEfy-mrz15g&usqp=CAU',
      related_content_id: 'UEY0S1hEMk5ld1Z4aU1cIixcIlBaaV9rbWYyNFZBRnJN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=UEY0S1hEMk5ld1Z4aU1cIixcIlBaaV9rbWYyNFZBRnJN',
      source: 'Cuponidad',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://cuponidad.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Mr. Leña: Combo para tres. Lomo Saltado, Arroz Chaufa, Tallarín ...',
      link: 'https://cuponidad.pe/combo-para-tres-lomo-saltado-arroz-chaufa-tallarin-saltado-en-mr-lena-39881',
      original: 'https://cdn.cuponidad.pe/images/Deals/Mrlena-salteados2.jpg',
      original_width: 666,
      original_height: 400,
      is_product: false
    },
    {
      position: 18,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7gE1uE_9x3z3vF70K8llgE6MUbJv7VHnew&usqp=CAU',
      related_content_id: 'SkV1TDBESUxSOFRiVk1cIixcIkhvNnFnWWR0MUxEbTBN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=SkV1TDBESUxSOFRiVk1cIixcIkhvNnFnWWR0MUxEbTBN',
      source: 'Recetas de Venezuela',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://recetas-venezolanas.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado - Recetas de Venezuela',
      link: 'https://www.recetas-venezolanas.com/recetas/plato-principal/lomo-saltado',
      original:
        'https://www.recetas-venezolanas.com/base/stock/Recipe/205-image/205-image_web.jpg.webp',
      original_width: 600,
      original_height: 336,
      is_product: false
    },
    {
      position: 19,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqXn8t9YqTqJNepYCMUcYGYCvbJfH0j2W6A&usqp=CAU',
      related_content_id: 'YjNaVGlKaFh2WjhZTk1cIixcImFhZ3hBR2Q3RTZVdGRN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=YjNaVGlKaFh2WjhZTk1cIixcImFhZ3hBR2Q3RTZVdGRN',
      source: 'Una Comida Peruana',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://unacomidaperuana.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado de Carne +VIDEO | RECETA PASO A PASO',
      link: 'https://unacomidaperuana.com/recetas/lomo-saltado-de-carne/',
      original: 'https://unacomidaperuana.com/wp-content/uploads/Lomo-Saltado-de-Carne.jpg',
      original_width: 680,
      original_height: 450,
      is_product: false
    },
    {
      position: 20,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qWJkwmqF0dC7Oye68OZxP-2dZnXZohazQg&usqp=CAU',
      related_content_id: 'SFFBNllSTndfeURLTU1cIixcIlJyemlSOW4zZTY0SG9N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=SFFBNllSTndfeURLTU1cIixcIlJyemlSOW4zZTY0SG9N',
      source: 'COMO COCINAR -',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comococinar.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Los 100 platos más representativos de las comidas peruanas, según ...',
      link: 'https://comococinar.pe/los-100-platos-mas-representativos-de-las-comidas-peruanas-y-sus-recetas/amp/',
      original: 'https://comococinar.pe/wp-content/uploads/2021/06/Lomo-saltado-1.jpg',
      original_width: 700,
      original_height: 465,
      is_product: false
    },
    {
      position: 21,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERTz7cOCYhW_cYu7GMdEFmD-Y11H7DMEZEw&usqp=CAU',
      related_content_id: 'eUtTaWY2c0lEQURNME1cIixcIldjNHBjYU55X1lzdlJN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=eUtTaWY2c0lEQURNME1cIixcIldjNHBjYU55X1lzdlJN',
      source: 'Antigua Taberna Queirolo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://antiguatabernaqueirolo.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Dónde probar un buen lomo saltado? - Taberna Queirolo',
      link: 'https://antiguatabernaqueirolo.com/gastronomia/donde-probar-un-buen-lomo-saltado/',
      original:
        'https://antiguatabernaqueirolo.com/wp-content/uploads/2018/10/donde-probar-un-buen-lomo-saltado.jpg',
      original_width: 1260,
      original_height: 660,
      is_product: false
    },
    {
      position: 22,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Cr-K4RM1kthj76cVSVAyayjTrwJEEIAa0w&usqp=CAU',
      related_content_id: 'U3pRMGp2X2s5eWwyZE1cIixcIkVNVmcwWEJyLVJ6NFlN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=U3pRMGp2X2s5eWwyZE1cIixcIkVNVmcwWEJyLVJ6NFlN',
      source: 'cookpad.com',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://cookpad.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado Receta de romagalagarza- Cookpad',
      link: 'https://cookpad.com/pe/recetas/15929804-lomo-saltado',
      original: 'https://img-global.cpcdn.com/recipes/53d75a8e4b5a1cae/1200x630cq70/photo.jpg',
      original_width: 1200,
      original_height: 630,
      is_product: false
    },
    {
      position: 23,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqjsxduZEQVbi9VFO_KX2MbisdzWdTsuNTg&usqp=CAU',
      related_content_id: 'b0NvZDBfMktCUkJFWU1cIixcIlRpSlgzRk9qZWdBeFhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=b0NvZDBfMktCUkJFWU1cIixcIlRpSlgzRk9qZWdBeFhN',
      source: 'Snack Boulevard',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://snack24horas.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado Montado | Snack Boulevard',
      link: 'https://snack24horas.pe/lomo-saltado-montado/',
      original: 'https://snack24horas.pe/wp-content/uploads/2022/05/lomo-saltado-a-lo-pobre.jpg',
      original_width: 800,
      original_height: 600,
      is_product: false
    },
    {
      position: 24,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcTDgWHscnfJFVIb4wLg4kVT3xzlETSDJbQ&usqp=CAU',
      related_content_id: 'eUhUX3N0bWgxRWc3TE1cIixcIkxobkEwUzV1c1BaeFVN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=eUhUX3N0bWgxRWc3TE1cIixcIkxobkEwUzV1c1BaeFVN',
      source: 'Comida Vegana Peruana',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comidaveganaperuana.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Cómo hacer un saludable y riquísimo lomo saltado vegano?',
      link: 'https://www.comidaveganaperuana.com/comida-vegana/recetas/segundo/lomo-saltado-vegano/',
      original:
        'https://www.comidaveganaperuana.com/wp-content/uploads/2021/03/LomoSaltadoVegano.jpg',
      original_width: 850,
      original_height: 550,
      is_product: false
    },
    {
      position: 25,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYQUP66_tFHGStrNurn9rnIu-6gpZY1xskw&usqp=CAU',
      related_content_id: 'U21NYWdaaEN6cUVIQU1cIixcIlVTZE1RWUg2T1Nha3VN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=U21NYWdaaEN6cUVIQU1cIixcIlVTZE1RWUg2T1Nha3VN',
      source: 'rokys',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://rokys.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: "LOMO SALTADO | Roky's",
      link: 'https://rokys.com/carta/fusion-criolla/lomo-saltado.html',
      original:
        'https://s3-rokys-pro.s3.amazonaws.com/media/catalog/product/l/o/lomo-saltado-agosto-nuevo-500x500.jpg',
      original_width: 501,
      original_height: 501,
      is_product: false
    },
    {
      position: 26,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f706e435570e1d2be8fff8ea845e7dd5d6.jpeg',
      related_content_id: 'TnNXOGVFTmhpZWhCTk1cIixcIlNzbEwxUFB1Vy1hb0ZN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=TnNXOGVFTmhpZWhCTk1cIixcIlNzbEwxUFB1Vy1hb0ZN',
      source: 'Cravings Journal',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f7c2f04508dbb1f94293f1a6aa6c490bce.png',
      title: 'Lomo saltado peruano - Cravings Journal',
      link: 'https://es.cravingsjournal.com/lomo-saltado/',
      original: 'https://es.cravingsjournal.com/wp-content/uploads/2021/08/lomo-saltado-2.jpg',
      original_width: 1600,
      original_height: 2400,
      is_product: false
    },
    {
      position: 27,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f70bb8c6df7ea685fde97a2e7e67d681fc.jpeg',
      related_content_id: 'V0JqTkdOTlk1R21qTU1cIixcIjJKaGxCNlYtWENKRndN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=V0JqTkdOTlk1R21qTU1cIixcIjJKaGxCNlYtWENKRndN',
      source: 'Barrio Santo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://barriosantobcn.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Los secretos detrás de la preparación del lomo saltado, un plato ...',
      link: 'https://www.barriosantobcn.com/post/los-secretos-detr%C3%A1s-de-la-preparaci%C3%B3n-del-lomo-saltado-un-plato-t%C3%ADpico-de-la-gastronom%C3%ADa-peruana',
      original:
        'https://static.wixstatic.com/media/8fb78d_c77b22a3f89744a4bb1329a8d5c4e2a5~mv2.jpg/v1/fill/w_640,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8fb78d_c77b22a3f89744a4bb1329a8d5c4e2a5~mv2.jpg',
      original_width: 640,
      original_height: 616,
      is_product: false
    },
    {
      position: 28,
      thumbnail:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f7497d7ac716b99c9960a58d3b1e816198.jpeg',
      related_content_id: 'QjFHeXZJV3hER285Tk1cIixcIlp0cmZWVVdhcHdsYUhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=QjFHeXZJV3hER285Tk1cIixcIlp0cmZWVVdhcHdsYUhN',
      source: 'Comedera',
      source_logo:
        'https://serpapi.com/searches/64e7c4f0f26ac60f8b85f85a/images/316b2dc330e9229604ff9b84658940f75619722ef04c300e6e038e1e95abce93.png',
      title: 'Receta de lomo saltado peruano - Comedera - Recetas, tips y ...',
      link: 'https://www.comedera.com/receta-de-lomo-saltado/',
      original:
        'https://www.comedera.com/wp-content/uploads/2013/05/lomo-saltado-peruano-plato.jpg',
      original_width: 1200,
      original_height: 788,
      is_product: false
    },
    {
      position: 29,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72qo-QG3ZzvUkYZoVDpRlKzDpAnFrDeTKJA&usqp=CAU',
      related_content_id: 'cnFnU0RRaEpKdm1URk1cIixcIjIzeXJpUnNfOEphYVhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=cnFnU0RRaEpKdm1URk1cIixcIjIzeXJpUnNfOEphYVhN',
      source: 'Sabrosísimo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://sabrosisimo.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo Saltado fácil y económica - Sabrosísimo',
      link: 'https://www.sabrosisimo.com/receta/lomo-saltado/',
      original: 'https://www.sabrosisimo.com/wp-content/uploads/2023/07/lomo-saltado.jpg',
      original_width: 1080,
      original_height: 1250,
      is_product: false
    },
    {
      position: 30,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYns2NO2IRq9TaPQGKXyu0orb9BmiE_fLJA&usqp=CAU',
      related_content_id: 'YXptN0lQMC00MmJQUU1cIixcIjAwd3V5eXMxU1VXZTlN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=YXptN0lQMC00MmJQUU1cIixcIjAwd3V5eXMxU1VXZTlN',
      source: 'Jamea Perú',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://jameaperu.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado de Pollo - Receta Rápida » Jamea Perú - 2023',
      link: 'https://jameaperu.com/recetas/platos/lomo-saltado-de-pollo/',
      original:
        'https://jameaperu.com/wp-content/uploads/2020/03/lomo-saltado-de-pollo_700x465.jpg',
      original_width: 700,
      original_height: 465,
      is_product: false
    },
    {
      position: 31,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsR8Sbos0F_5pUZWG67SNBRFy26hbkAJcTg&usqp=CAU',
      related_content_id: 'aDZLa2NuVXBCLUZRR01cIixcIkZHUkRhdnBaUUtIczlN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=aDZLa2NuVXBCLUZRR01cIixcIkZHUkRhdnBaUUtIczlN',
      source: 'Gourmet.cl',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://gourmet.cl&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta Lomo Saltado Peruano Picante | Gourmet',
      link: 'https://www.gourmet.cl/recetas/lomo-saltado-picante/',
      original: 'https://www.gourmet.cl/wp-content/uploads/2012/07/lomo-saltado-picante.jpg',
      original_width: 570,
      original_height: 330,
      is_product: false
    },
    {
      position: 32,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9o_chQlvl0dUOfwOO7aUQuBhTEQbM6QqHvw&usqp=CAU',
      related_content_id: 'MXhpTHBYdm5GSDB5Sk1cIixcIm9hdkpPSi1kNk04ZXdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MXhpTHBYdm5GSDB5Sk1cIixcIm9hdkpPSi1kNk04ZXdN',
      source: 'Serious Eats',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://seriouseats.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado (Peruvian Stir-Fried Beef With Onion, Tomatoes, and ...',
      link: 'https://www.seriouseats.com/lomo-saltado-peruvian-stir-fried-beef-with-onion-tomatoes-and-french-fries',
      original:
        'https://www.seriouseats.com/thmb/ph7YTcuM0eygiNrWanOhPRqKE4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__03__20190321-lomo-saltado-vicky-wasik-28-68ac118a03324091afed4205428ddf4e.jpg',
      original_width: 1500,
      original_height: 1125,
      is_product: false
    },
    {
      position: 33,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkq1ka6fDdufwWkkb2kApfkBpbiYbUzXyR5Q&usqp=CAU',
      related_content_id: 'MkRSU3VrUmgtVVkycU1cIixcInJBSV91OXd0V3BJVUJN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MkRSU3VrUmgtVVkycU1cIixcInJBSV91OXd0V3BJVUJN',
      source: 'Comidas Peruanas',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comidastipicasperuanas.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo Saltado - Comidas Peruanas',
      link: 'https://www.comidastipicasperuanas.com/receta-de-lomo-saltado/',
      original:
        'https://www.comidastipicasperuanas.com/wp-content/uploads/2023/04/Lomo-saltado.jpg',
      original_width: 700,
      original_height: 460,
      is_product: false
    },
    {
      position: 34,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_mKHCDfS4njZ5B5TaQR3ZNlCUMD1ytDJyQ&usqp=CAU',
      related_content_id: 'OWVITDNOMkV0N0JWQ01cIixcIjVGT01MeThkUThjRnBN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=OWVITDNOMkV0N0JWQ01cIixcIjVGT01MeThkUThjRnBN',
      source: 'Buenazo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://buenazo.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado: ver aquí receta paso a paso [VIDEO] | Recetas Buenazo',
      link: 'https://buenazo.pe/recetas/platos-de-fondo/lomo-saltado-ingredientes-preparacion-61',
      original:
        'https://buenazo.cronosmedia.glr.pe/original/2020/09/04/5f52b708fee0115b680be9d9.jpg',
      original_width: 1476,
      original_height: 999,
      is_product: false
    },
    {
      position: 35,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXWOf8tpD2z_PYdr4sOcnP20FeodhIb-47A&usqp=CAU',
      related_content_id: 'Z2YzU3BScElWLXNmLU1cIixcIlVLam1NZWhRcWRiMkhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Z2YzU3BScElWLXNmLU1cIixcIlVLam1NZWhRcWRiMkhN',
      source: 'El Verídico de Fidel',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://veridicodefidel.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Fino Saltado - El Verídico de Fidel - Pescados y Mariscos',
      link: 'https://www.veridicodefidel.com/pedir/category/RkY85WbbpzMsp2PTn?productId=g9ebX6hFnRB27PgRx&page=1',
      original: 'https://tofuu.getjusto.com/orioneat-prod-resized/BBZSTvTBSPZGytHwu-1200-1200.webp',
      original_width: 1200,
      original_height: 1200,
      is_product: false
    },
    {
      position: 36,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqq_wjgmlQ3ihAv-wWWg3tDYYBlhzscPoPuw&usqp=CAU',
      related_content_id: 'RDFwNWNMTFNzclYzVE1cIixcInFKSjZRYmVYTHVCS3BN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=RDFwNWNMTFNzclYzVE1cIixcInFKSjZRYmVYTHVCS3BN',
      source: 'Comidas Del Perú',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comidasdelperu.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo saltado Paso a Paso | Comidas Del Perú',
      link: 'https://comidasdelperu.com/recetas/receta-de-lomo-saltado-paso-a-paso/',
      original: 'https://comidasdelperu.com/wp-content/uploads/2021/06/Receta-de-Lomo-saltado-.jpg',
      original_width: 1280,
      original_height: 720,
      is_product: false
    },
    {
      position: 37,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6ywJ2Yc8Tm6CXYfe-gca04sAEEfgf44BSg&usqp=CAU',
      related_content_id: 'OW01bVkxOWR6OWtCaU1cIixcInVJSzJrcHNrbFhjQlFN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=OW01bVkxOWR6OWtCaU1cIixcInVJSzJrcHNrbFhjQlFN',
      source: 'Couple in the Kitchen',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://coupleinthekitchen.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado Recipe | Couple in the Kitchen',
      link: 'https://coupleinthekitchen.com/lomo-saltado-recipe/',
      original:
        'https://coupleinthekitchen.com/wp-content/uploads/2021/05/Lomo-Saltado-Recipe-5.jpg',
      original_width: 1007,
      original_height: 1507,
      is_product: false
    },
    {
      position: 38,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1KHi3uWQvcFJTcYCvxYhKz7MzLl5gWwqNQ&usqp=CAU',
      related_content_id: 'T3gtby1SSVdGb0tXY01cIixcInVjU2dnMU45UTVFSXFN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=T3gtby1SSVdGb0tXY01cIixcInVjU2dnMU45UTVFSXFN',
      source: 'Irene Mercadal',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://irenemercadal.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado a la peruana - Irene Mercadal',
      link: 'https://irenemercadal.com/lomo-saltado/',
      original:
        'https://irenemercadal.com/wp-content/uploads/2021/12/lomo-saltado-irenemercadal.com_-500x500.jpeg',
      original_width: 500,
      original_height: 500,
      is_product: false
    },
    {
      position: 39,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aJSPniV3S0rFbz9Byfq0-Yt5tJJL7i7Eqw&usqp=CAU',
      related_content_id: 'OHBzdEVReFZabnEwcE1cIixcImhlZjcxejhiSDQ1ZnBN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=OHBzdEVReFZabnEwcE1cIixcImhlZjcxejhiSDQ1ZnBN',
      source: 'El Sabor',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://elsabor.com.ec&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado | El Sabor',
      link: 'https://elsabor.com.ec/recetas/lomo-saltado/',
      original: 'https://elsabor.com.ec/wp-content/uploads/2022/02/lomo-saltado.jpg',
      original_width: 1000,
      original_height: 742,
      is_product: false
    },
    {
      position: 40,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iFrumXgZPq-bwno4eGWYcAUaWYW66v8LKg&usqp=CAU',
      related_content_id: 'MjlvRktiWmhaeGtPaU1cIixcIlZodUU0aG1Ha25sWUJN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MjlvRktiWmhaeGtPaU1cIixcIlZodUU0aG1Ha25sWUJN',
      source: 'Perú Info',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://peru.info&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Perfecta fusión!: conoce la historia del lomo saltado',
      link: 'https://peru.info/es-pe/gastronomia/noticias/2/13/-perfecta-fusion---conoce-la-historia-del-lomo-saltado',
      original: 'https://peru.info/archivos/publicacion/102-imagen-1529441632020.jpg',
      original_width: 900,
      original_height: 504,
      is_product: false
    },
    {
      position: 41,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHs_9SpTZUkzqKyuZgARO3jOS6taRuBxXpMA&usqp=CAU',
      related_content_id: 'bDJTRlFwcjlfdjEzSk1cIixcIjV6cGpRV2xLVXpLX0FN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=bDJTRlFwcjlfdjEzSk1cIixcIjV6cGpRV2xLVXpLX0FN',
      source: 'Sazonadores Batán',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://sazonadoresbatan.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado » Sazonadores Batán » 1',
      link: 'https://sazonadoresbatan.com/lomo-saltado/',
      original: 'https://sazonadoresbatan.com/wp-content/uploads/2020/11/lomo-saltado.png',
      original_width: 850,
      original_height: 424,
      is_product: false
    },
    {
      position: 42,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GFq6hONl9mcBc9lIXPgEPr-PtIQShPW6Eg&usqp=CAU',
      related_content_id: 'VkFmUHd1SUdLM0ZUc01cIixcIlpQb1B5UVFfa2piOE9N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=VkFmUHd1SUdLM0ZUc01cIixcIlpQb1B5UVFfa2piOE9N',
      source: 'El cocinero casero',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://elcocinerocasero.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado para 2 personas · El cocinero casero - Carnes',
      link: 'https://elcocinerocasero.com/amp/receta/lomo-saltado-para-2-personas',
      original:
        'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-03-23-11-53-35/lomo-saltado.jpeg',
      original_width: 1000,
      original_height: 750,
      is_product: false
    },
    {
      position: 43,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBVbPkEATY4Wq41e7dShJWJuh3JFreMESMw&usqp=CAU',
      related_content_id: 'dkZzZTc0SDl2YnFmOE1cIixcIkJUeDVka0FKaEgtNVBN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=dkZzZTc0SDl2YnFmOE1cIixcIkJUeDVka0FKaEgtNVBN',
      source: 'veggienoob - recetas veganas fáciles y deliciosas',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://veggienoob.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Una receta de lomo saltado vegano buenísima! - veggienoob',
      link: 'https://veggienoob.com/lomo-saltado-vegano/',
      original: 'https://veggienoob.com/wp-content/uploads/2019/09/lomo-saltdo-vegano.jpg',
      original_width: 1920,
      original_height: 2560,
      is_product: false
    },
    {
      position: 44,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwxkh2UVAJivJ0pfAJtd9sFPdy1Suy2tTzA&usqp=CAU',
      related_content_id: 'bkdPUTJfeTdSTzIxN01cIixcInplYjdONUVPOTA5UmtN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=bkdPUTJfeTdSTzIxN01cIixcInplYjdONUVPOTA5UmtN',
      source: 'Comedera',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comedera.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de lomo al jugo peruano - Comedera - Recetas, tips y ...',
      link: 'https://www.comedera.com/receta-de-lomo-al-jugo-peruano/',
      original:
        'https://www.comedera.com/wp-content/uploads/2023/05/Lomo-en-su-jugo-peruano-shutterstock_1993679156.jpg',
      original_width: 1200,
      original_height: 800,
      is_product: false
    },
    {
      position: 45,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FX9StUkn6hHGwa4vh9uoogWotRI24VtNTw&usqp=CAU',
      related_content_id: 'aHd0Vmd4UU45LVF3WU1cIixcIjdldGpLd3g5elUxTzhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=aHd0Vmd4UU45LVF3WU1cIixcIjdldGpLd3g5elUxTzhN',
      source: 'cookpad.com',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://cookpad.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado casero 🇵🇪✨ Receta de Betto Gómez Ballon- Cookpad',
      link: 'https://cookpad.com/pe/recetas/15946791-lomo-saltado-casero',
      original:
        'https://img-global.cpcdn.com/recipes/f0df8b2753b622e2/680x482cq70/lomo-saltado-casero-foto-principal.jpg',
      original_width: 680,
      original_height: 482,
      is_product: false
    },
    {
      position: 46,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfpdI4Mmoz74Ad4FgJlMe7z6XRowZ-pS8Ww&usqp=CAU',
      related_content_id: 'Q0o1Y08tTkJtaThzeU1cIixcIkJRWF95MzZaM05KWmhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Q0o1Y08tTkJtaThzeU1cIixcIkJRWF95MzZaM05KWmhN',
      source: 'YouTube',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://m.youtube.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - Mr. Wagyu - YouTube',
      link: 'https://m.youtube.com/watch?v=Q0dzq2jfi3w',
      original: 'https://i.ytimg.com/vi/Q0dzq2jfi3w/maxresdefault.jpg',
      original_width: 1280,
      original_height: 720,
      is_product: false
    },
    {
      position: 47,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-2Ji6EKLRIyllvjOCmL4uOzxu9FPK9EiEw&usqp=CAU',
      related_content_id: 'VDVfQzVmakJsUkxocU1cIixcIjZfaGpnMVlBV2FXRzNN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=VDVfQzVmakJsUkxocU1cIixcIjZfaGpnMVlBV2FXRzNN',
      source: 'TÍPIKA',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://tipika.com.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado – TÍPIKA',
      link: 'https://tipika.com.pe/producto/lomo-saltado/',
      original: 'https://tipika.com.pe/wp-content/uploads/2020/06/lomo-saltado-1.jpg',
      original_width: 600,
      original_height: 600,
      is_product: false
    },
    {
      position: 48,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13OzUP3UL0JzhXHt9M35ZSJNyXjlPN9NWNw&usqp=CAU',
      related_content_id: 'NTY2SFpYVjVLU0k5a01cIixcIjdGZFFvYm1YQkljQTVN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=NTY2SFpYVjVLU0k5a01cIixcIjdGZFFvYm1YQkljQTVN',
      source: 'Deliciosi.com',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://deliciosi.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado de pollo - Deliciosi.com',
      link: 'https://www.deliciosi.com/lomo-saltado-de-pollo/',
      original: 'https://www.deliciosi.com/images/1200/1219/lomo-saltado-de-pollo.jpg',
      original_width: 1024,
      original_height: 683,
      is_product: false
    },
    {
      position: 49,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9mb-jTA0NRsYGd4P7Vwfh3wuWj0g7vHiWw&usqp=CAU',
      related_content_id: 'QVVtcEo5cF81LXVVLU1cIixcIk41V0xlSGkwZEppeHdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=QVVtcEo5cF81LXVVLU1cIixcIk41V0xlSGkwZEppeHdN',
      source: 'Facebook',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://facebook.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: "NORKY'S - Prueba nuestro rico LOMO SALTADO 👌😋😋 #norkys ...",
      link: 'https://www.facebook.com/norkysperu/photos/a.745712192116005/6424358514251316/?type=3',
      original: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=6424358514251316',
      original_width: 1080,
      original_height: 1080,
      is_product: false
    },
    {
      position: 50,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrBclcUZXhljLYDBJWHbvkeLoIliHQIQv8w&usqp=CAU',
      related_content_id: 'UktOYXR4cXhvZlNrVU1cIixcIjBySkZ0aDJkek1SSFhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=UktOYXR4cXhvZlNrVU1cIixcIjBySkZ0aDJkek1SSFhN',
      source: 'La Nacional Carnicería',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://lanacional.co&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo Saltado Peruano',
      link: 'https://www.lanacional.co/post/lomo-saltado',
      original:
        'https://static.wixstatic.com/media/91fc24_03ed736eb3c147ebbdcc3f00bd965e95~mv2.png/v1/fill/w_640,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/91fc24_03ed736eb3c147ebbdcc3f00bd965e95~mv2.png',
      original_width: 640,
      original_height: 480,
      is_product: false
    },
    {
      position: 51,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIOzXQfcR0UsAxbPm8df_9-bp5ZVLuXPeeA&usqp=CAU',
      related_content_id: 'SDNyNWRLUHNpLVRQQk1cIixcIk9xd1k0WlJGWE16cnhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=SDNyNWRLUHNpLVRQQk1cIixcIk9xd1k0WlJGWE16cnhN',
      source: 'Mui Kitchen',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://mui.kitchen&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de lomo saltado: trozos de carne al estilo chifa | MUI KITCHEN',
      link: 'https://mui.kitchen/Receta-de-lomo-saltado-trozos-de-carne-al-estilo-chifa-r202105310002.html',
      original:
        'https://mui.kitchen/__export/1622466929644/sites/muikitchen/img/2021/05/31/lomo_saltado.jpg_1960889292.jpg',
      original_width: 1200,
      original_height: 675,
      is_product: false
    },
    {
      position: 52,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyduSn1OPGY0q4qqKlyAKxn9m6fcAm2nYZA&usqp=CAU',
      related_content_id: 'MXdsc3l6bmZyazR0VU1cIixcInJlLWc4c2RjSXJ2cC1N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MXdsc3l6bmZyazR0VU1cIixcInJlLWc4c2RjSXJ2cC1N',
      source: 'Diariamente Ali',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://diariamenteali.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo Saltado de carne | Diariamente Ali',
      link: 'https://www.diariamenteali.com/receta/receta-de-lomo-saltado-de-carne',
      original:
        'https://www.diariamenteali.com/medias/cover-receta-lomosaltado-carne-2022-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxMjg2NTV8aW1hZ2UvanBlZ3xoOTEvaGI3Lzk2NTIzMTIxNzg3MTgvY292ZXItcmVjZXRhLWxvbW9zYWx0YWRvLWNhcm5lLTIwMjJfMTkwMFd4NTAwSHw4NTljZTljZjczOWJiZjdlN2RiNGY3MTU2NjE5ODVmZjJlZDhlMmQ2YTY4NzY0YWE4ZWZiMTIyZDFkZGJlMGRj',
      original_width: 1900,
      original_height: 861,
      is_product: false
    },
    {
      position: 53,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUdgzMr_uYxig2m7eMuVXnK78I-l_QULlDg&usqp=CAU',
      related_content_id: 'UDY0dTRrOS1wcmo1aU1cIixcImdiVFpGc1Z6Z0JFY3dN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=UDY0dTRrOS1wcmo1aU1cIixcImdiVFpGc1Z6Z0JFY3dN',
      source: 'Recetas de Perú',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comida-peruana.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado - Recetas de Perú',
      link: 'https://www.comida-peruana.com/recetas/plato-principal/lomo-saltado',
      original: 'https://www.comida-peruana.com/base/stock/Recipe/32-image/32-image_web.jpg.webp',
      original_width: 600,
      original_height: 401,
      is_product: false
    },
    {
      position: 54,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gdNskIZmU0CFpDI6GT5gaS_JtG52hxbzMw&usqp=CAU',
      related_content_id: 'b0NWWTcyTldDSDJTNE1cIixcImRvMXNJVV9zRE01WWpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=b0NWWTcyTldDSDJTNE1cIixcImRvMXNJVV9zRE01WWpN',
      source: 'Akipa Restaurant',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://akiparestaurant.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - Akipa Salaverry',
      link: 'https://akiparestaurant.com/salaverry/producto/lomo-saltado/',
      original:
        'https://akiparestaurant.com/salaverry/wp-content/uploads/2020/06/LomoSaltado-4-1-scaled.jpg',
      original_width: 2560,
      original_height: 1709,
      is_product: false
    },
    {
      position: 55,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFUGZjUxhBE7-wA_jBs9iQuIgdEQM8fm7lg&usqp=CAU',
      related_content_id: 'SDhrQ19CSHdHck1YZE1cIixcIktoMVJtenBINU9Pa0lN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=SDhrQ19CSHdHck1YZE1cIixcIktoMVJtenBINU9Pa0lN',
      source: 'Recetas de Cocina Casera',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://cocina-casera.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado peruano. Receta sencilla - Recetas de Cocina Casera',
      link: 'https://cocina-casera.com/lomo-saltado-peruano/',
      original: 'https://i.ytimg.com/vi/JeVY6pThpQM/maxresdefault.jpg',
      original_width: 1280,
      original_height: 720,
      is_product: false
    },
    {
      position: 56,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFqNU0aInQTyG0MGj9-LB-xeVkdraawuSQA&usqp=CAU',
      related_content_id: 'ZFR0V3NMVzV5Z3hkUE1cIixcImpzbnNhREF1a3dYQWlN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=ZFR0V3NMVzV5Z3hkUE1cIixcImpzbnNhREF1a3dYQWlN',
      source: 'Hazlo Vegan',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://hazlovegan.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado vegano de seitán | Hazlo Vegan',
      link: 'https://hazlovegan.com/recetas/lomo-saltado-vegano-de-seitan/',
      original:
        'https://hazlovegan.com/wp-content/uploads/2021/07/lomo-saltado-vegano-6-500x375.jpg',
      original_width: 500,
      original_height: 375,
      is_product: false
    },
    {
      position: 57,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZVUsdmLOwEz1Zl09TZPtEXKKGaHxg4Q-JA&usqp=CAU',
      related_content_id: 'RVVYcXBtbGxRSmpUSE1cIixcInZFQmRjVzN6VzBEV2dN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=RVVYcXBtbGxRSmpUSE1cIixcInZFQmRjVzN6VzBEV2dN',
      source: 'No Recipes',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://norecipes.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado Recipe (Peruvian Beef & Potato Stir-Fry)',
      link: 'https://norecipes.com/lomo-saltado-recipe/',
      original: 'https://norecipes.com/wp-content/uploads/2018/12/lomo-saltado-sq.jpg',
      original_width: 1920,
      original_height: 1920,
      is_product: false
    },
    {
      position: 58,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRd0g6NL-Z2TPQ2DTgSFHBxCBTb05caFw2Gw&usqp=CAU',
      related_content_id: 'QWlobUFDZ0V2eXZ5Qk1cIixcImZYQkFCZ3hCbjZXdmtN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=QWlobUFDZ0V2eXZ5Qk1cIixcImZYQkFCZ3hCbjZXdmtN',
      source: 'Grupo Jhosef Arias',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://grupojhosefarias.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Cómo se prepara el Lomo Saltado peruano? | GRUPO JHOSEF ARIAS',
      link: 'https://grupojhosefarias.com/como-se-prepara-el-lomo-saltado-peruano/',
      original:
        'https://i0.wp.com/grupojhosefarias.com/wp-content/uploads/2022/04/Lomo_saltado_arroz_comida_criolla_peru_salteados_oriental_gastronomia_peruana_carnes_grupo_jhosef_arias.png?fit=2240%2C1260&ssl=1',
      original_width: 2240,
      original_height: 1260,
      is_product: false
    },
    {
      position: 59,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiTVje013CIhQ66jXMRT1TKMUyeNNj7Q7Vw&usqp=CAU',
      related_content_id: 'YVU3RUtpMENhcmJyME1cIixcIjRhNTc1OGt5X1hLdkNN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=YVU3RUtpMENhcmJyME1cIixcIjRhNTc1OGt5X1hLdkNN',
      source: 'Washington Post',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://washingtonpost.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado (Sauteed Beef Tenderloin) Recipe - The Washington Post',
      link: 'https://www.washingtonpost.com/recipes/lomo-saltado-sauteed-beef-tenderloin/',
      original:
        'https://www.washingtonpost.com/resizer/f4QrnqxuRaljIyfJrYdyCAaYRLk=/arc-anglerfish-washpost-prod-washpost/public/HP647TGBTUI6ZGYKHCUYHIXNZM.jpg',
      original_width: 5000,
      original_height: 3362,
      is_product: false
    },
    {
      position: 60,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBeYARUK45-aXRrXk2io6f0xuHdBwrP3vg&usqp=CAU',
      related_content_id: 'eDFWMDhXZ1ZZVUc3OE1cIixcInYxaTZ3YnNubV8wa1FN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=eDFWMDhXZ1ZZVUc3OE1cIixcInYxaTZ3YnNubV8wa1FN',
      source: 'Movistar Plus',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://movistarplus.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Aprende a preparar un delicioso lomo saltado al estilo Más Rico ...',
      link: 'https://movistarplus.pe/aprende-a-preparar-un-delicioso-lomo-saltado-al-estilo-mas-rico/',
      original: 'https://movistarplus.pe/wp-content/uploads/sites/3/2022/07/NW-15.jpg',
      original_width: 1280,
      original_height: 720,
      is_product: false
    },
    {
      position: 61,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSRcdU9ArZW8U7hk2AAztc50RDELsKBLX-w&usqp=CAU',
      related_content_id: 'SThLS0lBTlNNZC1hYk1cIixcIlB0X3ktb3B3NWJpaTdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=SThLS0lBTlNNZC1hYk1cIixcIlB0X3ktb3B3NWJpaTdN',
      source: 'RECORD®️ Perú',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://record.com.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - RECORD®️ Perú',
      link: 'https://www.record.com.pe/receta/lomo-saltado/',
      original: 'https://www.record.com.pe/wp-content/uploads/2021/07/Lomo-Saltado-1.png',
      original_width: 960,
      original_height: 635,
      is_product: false
    },
    {
      position: 62,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMq8CxbDkWIXq7kfMQBudUea_hKkhRu0C4Q&usqp=CAU',
      related_content_id: 'aXJKN202MDd2aW5qT01cIixcImZwR040V3NZMTFsT01N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=aXJKN202MDd2aW5qT01cIixcImZwR040V3NZMTFsT01N',
      source: 'viena',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://viena.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'LOMO SALTADO | Viena',
      link: 'https://viena.pe/carta/platos-de-fondo-y-pastas/lomo-saltado.html',
      original:
        'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/a/r/arroz_chaufa_de_carne_0003_lomo_saltado.jpg',
      original_width: 500,
      original_height: 500,
      is_product: false
    },
    {
      position: 63,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA2Xd_RsWd3O0OahTyt3z3f3i_Dw3vJzOqg&usqp=CAU',
      related_content_id: 'ZHJidmFWYWtURGlDUU1cIixcIlJPeW1UdkJUaDYyVVhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=ZHJidmFWYWtURGlDUU1cIixcIlJPeW1UdkJUaDYyVVhN',
      source: '196 flavors',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://196flavors.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - Receta Tradicional Peruana | 196 flavors',
      link: 'https://www.196flavors.com/es/lomo-saltado/',
      original: 'https://www.196flavors.com/wp-content/uploads/2016/07/lomo-saltado-1-FP.jpg',
      original_width: 900,
      original_height: 900,
      is_product: false
    },
    {
      position: 64,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5tL9r89Jy4HOQ8BoXxA2dUQB4E6qphtr1Q&usqp=CAU',
      related_content_id: 'RTUxOEpXZWJPU0F3QU1cIixcInhEVFMxQjloYlpabEZN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=RTUxOEpXZWJPU0F3QU1cIixcInhEVFMxQjloYlpabEZN',
      source: 'Agraria.pe',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://agraria.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Un plato de lomo saltado gourmet a 65 soles desata intenso debate',
      link: 'https://agraria.pe/noticias/un-plato-de-lomo-saltado-gourmet-a-65-soles-desata-intenso-d-15847',
      original:
        'https://agraria.pe/imgs/a/lx/un-plato-de-lomo-saltado-gourmet-a-65-soles-desata-intenso-d-15847.jpg',
      original_width: 800,
      original_height: 756,
      is_product: false
    },
    {
      position: 65,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpurC1hnbfnp3XiH9phnN4NKzKeJb8xpag&usqp=CAU',
      related_content_id: 'WllrdFU3UEVHamJnS01cIixcIlE1YkxFWUg4V0hkUURN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=WllrdFU3UEVHamJnS01cIixcIlE1YkxFWUg4V0hkUURN',
      source: 'Comidas Peruanas',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://decomidaperuana.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado de Pollo Receta Casera - Comidas Peruanas',
      link: 'https://decomidaperuana.com/lomo-saltado-de-pollo/',
      original: 'https://decomidaperuana.com/wp-content/uploads/2020/10/lomo-saltado-de-pollo.jpg',
      original_width: 750,
      original_height: 419,
      is_product: false
    },
    {
      position: 66,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMmTy4I2AHVODZnAjTByOX68H5UbtYvsPZw&usqp=CAU',
      related_content_id: 'dmtwaXVjRFVKenc2R01cIixcIkNsM2s5dHFOYnI5Ym1N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=dmtwaXVjRFVKenc2R01cIixcIkNsM2s5dHFOYnI5Ym1N',
      source: 'Recetas Nestlé',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://recetasnestle.com.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Saltado de pollo | Recetas Nestlé',
      link: 'https://www.recetasnestle.com.pe/recetas/saltado-de-pollo',
      original:
        'https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/be7057462ff0e9c87a9465d31083dd44.jpg',
      original_width: 1270,
      original_height: 849,
      is_product: false
    },
    {
      position: 67,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQSpnvIk-IAsnL4OHQ_Chu85Bn_a96W7deA&usqp=CAU',
      related_content_id: 'OFBGMXkydmRobUpwaE1cIixcIjJPSUFRVWRNX1NwanhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=OFBGMXkydmRobUpwaE1cIixcIjJPSUFRVWRNX1NwanhN',
      source: 'Recetas gratis',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://recetasgratis.net&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado de pollo jugoso - Receta PERUANA',
      link: 'https://www.recetasgratis.net/receta-de-lomo-saltado-de-pollo-jugoso-75793.html',
      original:
        'https://cdn0.recetasgratis.net/es/posts/3/9/7/lomo_saltado_de_pollo_jugoso_75793_600_square.jpg',
      original_width: 600,
      original_height: 600,
      is_product: false
    },
    {
      position: 68,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHOWwIXXoM6Md9iDIpNUZrowzeCUUNRHXTw&usqp=CAU',
      related_content_id: 'Qm85OG1oX0hfRDZZN01cIixcIkxzTm9NTzRWSThLS0pN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Qm85OG1oX0hfRDZZN01cIixcIkxzTm9NTzRWSThLS0pN',
      source: 'Diario Correo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://diariocorreo.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Aprende cómo preparar lomo saltado | receta para invierno ...',
      link: 'https://diariocorreo.pe/gastronomia/aprende-como-preparar-lomo-saltado-receta-para-invierno-noticia/?outputType=amp',
      original:
        'https://diariocorreo.pe/resizer/9jV2Jb1UdbMDWUpXpTmq31HHJ5E=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JYXAR5RK55FB5MCOLKTEJKDGPQ.jpg',
      original_width: 1200,
      original_height: 900,
      is_product: false
    },
    {
      position: 69,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUS1dETUKwKMRlGki2IcsFT7Uy2WD6SOW8Sw&usqp=CAU',
      related_content_id: 'ODE4U0F5SHRUanlQak1cIixcIm0xa2RYN3Nta2JtdG1N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=ODE4U0F5SHRUanlQak1cIixcIm0xa2RYN3Nta2JtdG1N',
      source: 'Lee Kum Kee',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://csa.lkk.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado | Recetas | Lee Kum Kee para el hogar | Sudamérica ...',
      link: 'https://csa.lkk.com/es-mx/recipes/lomo-saltado',
      original:
        'https://csa.lkk.com/-/media/csa-site---homecook/csa600_lomo-saltado.jpg?bc=white&hash=C083CD29F5089DE4F0196C854A5DAC1E89AB0A73&v=638265379401759681',
      original_width: 600,
      original_height: 465,
      is_product: false
    },
    {
      position: 70,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTkM9waqe84PPj3Avga5ygamtkAADeEFG7A&usqp=CAU',
      related_content_id: 'cXBDY21ZQ2FwY01TVU1cIixcInlnQzd2elJRZ01IRUxN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=cXBDY21ZQ2FwY01TVU1cIixcInlnQzd2elJRZ01IRUxN',
      source: 'Amigofoods',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://blog.amigofoods.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado, Peruvian Stir Fry Beef Dish Recipe',
      link: 'https://blog.amigofoods.com/index.php/peruvian-foods/lomo-saltado/',
      original: 'https://blog.amigofoods.com/wp-content/uploads/2019/04/lomo-saltado-735x490.jpg',
      original_width: 735,
      original_height: 490,
      is_product: false
    },
    {
      position: 71,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_bcIGkvn-ZyhEYWFp-I96MDYIMOcBTSCrA&usqp=CAU',
      related_content_id: 'VU5jZjJ5QkNXZm8zdE1cIixcIm1pXzg2YTRvVS0yYUFN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=VU5jZjJ5QkNXZm8zdE1cIixcIm1pXzg2YTRvVS0yYUFN',
      source: 'El Español',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://elespanol.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado, aprende a hacer esta receta peruana muy fácil',
      link: 'https://www.elespanol.com/cocinillas/recetas/carne/20210526/lomo-saltado-aprende-hacer-receta-peruana-facil/1002335816396_30.amp.html',
      original:
        'https://s1.eestatic.com/2021/05/25/cocinillas/recetas/583953822_186235743_1706x960.jpg',
      original_width: 1706,
      original_height: 960,
      is_product: false
    },
    {
      position: 72,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-AowMQcOsTotpgx8PzwFF3pPhMSnLTeLsw&usqp=CAU',
      related_content_id: 'R3VUQW4yeEdkSFhEU01cIixcIkFNdjZxaDJHWVNlSHdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=R3VUQW4yeEdkSFhEU01cIixcIkFNdjZxaDJHWVNlSHdN',
      source: 'Infobae',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://infobae.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'La historia del lomo saltado: el origen de la sabrosa fusión - Infobae',
      link: 'https://www.infobae.com/america/peru/2022/08/19/la-historia-del-lomo-saltado-el-origen-de-la-sabrosa-fusion/?outputType=amp-type',
      original:
        'https://www.infobae.com/new-resizer/SNp9qPBkdts58CS50w5vqMPOgJw=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/F2U3JERSPVG57HXAVSI7GQXXL4.png',
      original_width: 1200,
      original_height: 900,
      is_product: false
    },
    {
      position: 73,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMz6-3GxJlkMe9SZAMN0GJSs6GPQPOkdL9-g&usqp=CAU',
      related_content_id: 'c0VLQ0hTMG5GMUlKS01cIixcIkdDUnJucEFOWXF1QUhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=c0VLQ0hTMG5GMUlKS01cIixcIkdDUnJucEFOWXF1QUhN',
      source: 'Salpicado',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://salpicado.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado receta - cocina Peruana - Salpicado',
      link: 'https://www.salpicado.com/lomo-saltado/',
      original:
        'https://www.salpicado.com/wp-content/uploads/2021/04/lomo-saltado-500x500-1-500x375.jpg',
      original_width: 500,
      original_height: 375,
      is_product: false
    },
    {
      position: 74,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xLAxHza-AqEu5hUxEHAoYmcLCAlVz9cF1g&usqp=CAU',
      related_content_id: 'VG12R1dTWlIzaWh4U01cIixcIno4a3pjcnloNEJXaERN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=VG12R1dTWlIzaWh4U01cIixcIno4a3pjcnloNEJXaERN',
      source: 'Tasting Table',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://tastingtable.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Tender Lomo Saltado Recipe',
      link: 'https://www.tastingtable.com/1199453/tender-lomo-saltado-recipe/',
      original:
        'https://www.tastingtable.com/img/gallery/tender-lomo-saltado-recipe/intro-1676402507.jpg',
      original_width: 780,
      original_height: 438,
      is_product: false
    },
    {
      position: 75,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8jJsrewOt5l3OXDXNkOlarGMvbL7CCewhQ&usqp=CAU',
      related_content_id: 'eGJaU0tYbnV0NWRZNU1cIixcIm9ycGlReEFwMS1ZR05N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=eGJaU0tYbnV0NWRZNU1cIixcIm9ycGlReEFwMS1ZR05N',
      source: 'Perú 21',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://peru21.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Conoce los 8 mejores lugares para disfrutar un lomo saltado en ...',
      link: 'https://peru21.pe/vida/gastronomia/fiestas-patrias-conoces-8-mejores-lugares-disfrutar-lomo-saltado-416958-noticia/?outputType=amp',
      original:
        'https://peru21.pe/resizer/JfcjPvOGDPpK28-lXGH6jCTWFbY=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TPRZ2ZYYIRBDXKQFEFGOWYJ5WQ.jpg',
      original_width: 1200,
      original_height: 675,
      is_product: false
    },
    {
      position: 76,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vvfiH3cna3mESztGIyc2xPocScOGgKM0Dg&usqp=CAU',
      related_content_id: 'Ql82aVVzdGRHMkYwa01cIixcIlRGVC1xT1p3UWY4VWNN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Ql82aVVzdGRHMkYwa01cIixcIlRGVC1xT1p3UWY4VWNN',
      source: 'Finde | La Tercera',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://finde.latercera.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de lomo saltado de Gastón Acurio, el chef más famoso de Perú',
      link: 'https://finde.latercera.com/recetas/receta-de-lomo-saltado-gaston-acurio/amp/',
      original:
        'http://finde.latercera.com/wp-content/uploads/2020/04/Lomo-saltado-gaston-acurio-2-listo-.jpg',
      original_width: 900,
      original_height: 600,
      is_product: false
    },
    {
      position: 77,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipodS3_dRtmZVbx8rRYOGWKN4Bb_bWD7HSA&usqp=CAU',
      related_content_id: 'WlgwLUhRNFhrbWJHRU1cIixcIlhtUS1RTlJuUDJXS0pN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=WlgwLUhRNFhrbWJHRU1cIixcIlhtUS1RTlJuUDJXS0pN',
      source: 'En su punto',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://ensupunto.com.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado al Jugo - En su punto',
      link: 'https://ensupunto.com.pe/producto/lomo-saltado-al-jugo/',
      original:
        'https://ensupunto.com.pe/wp-content/uploads/2022/11/ESP_lomo.saltado.al_.jugo_.png',
      original_width: 1023,
      original_height: 728,
      is_product: false
    },
    {
      position: 78,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhbl_4nSNbfbdm7rFAu6vKgzQz3BaqIlL1Q&usqp=CAU',
      related_content_id: 'V1hZellNdEl3NHBqMU1cIixcIlFXbVhtZi1MdGx5ZUpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=V1hZellNdEl3NHBqMU1cIixcIlFXbVhtZi1MdGx5ZUpN',
      source: 'El Comercio Perú',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://elcomercio.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta | El paso a paso del lomo saltado, uno de los favoritos de ...',
      link: 'https://elcomercio.pe/viu/receta-el-paso-a-paso-del-lomo-saltado-uno-de-los-favoritos-de-la-gastronomia-peruana-video-noticia/?outputType=amp',
      original:
        'https://elcomercio.pe/resizer/S3cyQJh1dIpVKKTHm_o3YEpVmIs=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NNTV2OZSENGLNC7N3S4L4Q2OPY.jpg',
      original_width: 1200,
      original_height: 900,
      is_product: false
    },
    {
      position: 79,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3VTvak6SWeDjAJ7H4xLW8QW6RP9xaHULow&usqp=CAU',
      related_content_id: 'NnpJV0RhUXg0YjI1c01cIixcIjdFSkNPTW44N1F1TGpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=NnpJV0RhUXg0YjI1c01cIixcIjdFSkNPTW44N1F1TGpN',
      source: 'antojos peruanos',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://antojosperuanos.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: '▷ 【 Receta Lomo Saltado: Carne salteada al estilo peruano 】',
      link: 'https://antojosperuanos.com/lomo-saltado/',
      original: 'https://antojosperuanos.com/wp-content/uploads/lomo-salteado.jpg',
      original_width: 700,
      original_height: 467,
      is_product: false
    },
    {
      position: 80,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR_wPty-xSvr9S93WD4PKsWOKXstRCgl4Cg&usqp=CAU',
      related_content_id: 'dW9BT3JGc0x4eTRwQ01cIixcIlNzbEwxUFB1Vy1hb0ZN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=dW9BT3JGc0x4eTRwQ01cIixcIlNzbEwxUFB1Vy1hb0ZN',
      source: 'Cravings Journal',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://es.cravingsjournal.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado peruano - Cravings Journal',
      link: 'https://es.cravingsjournal.com/lomo-saltado/',
      original: 'https://es.cravingsjournal.com/wp-content/uploads/2021/08/lomo-saltado-6.jpg',
      original_width: 1600,
      original_height: 2400,
      is_product: false
    },
    {
      position: 81,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4u5kUed6LEFstYbyVF3Rf2zY7vyl1IrdgQ&usqp=CAU',
      related_content_id: 'Mk9RbHAtbkYxSTdCQ01cIixcIlpwMHlCeVllWVk4U0NN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Mk9RbHAtbkYxSTdCQ01cIixcIlpwMHlCeVllWVk4U0NN',
      source: 'Restaurant Palermo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://restaurantpalermo.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado – Restaurant Palermo',
      link: 'https://www.restaurantpalermo.com/product/lomo-saltado/',
      original: 'https://www.restaurantpalermo.com/wp-content/uploads/2022/09/DSC_0720-scaled.jpg',
      original_width: 2560,
      original_height: 1709,
      is_product: false
    },
    {
      position: 82,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfP32aAbyop25AIX3mMCCkjjiFDP4Q3CGd4A&usqp=CAU',
      related_content_id: 'a0xpSk5FVndUbElUck1cIixcIkJ1aXVLU3Rjam93TUVN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=a0xpSk5FVndUbElUck1cIixcIkJ1aXVLU3Rjam93TUVN',
      source: 'Clarin.com',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://clarin.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo saltado - Clarín.com',
      link: 'https://www.clarin.com/platos-principales/lomo-saltado_7_2pm0katPR.amp.html',
      original: 'https://clarin.com/img//2021/06/16/RwZQdRJlx_1200x630__1.jpg',
      original_width: 1200,
      original_height: 630,
      is_product: false
    },
    {
      position: 83,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ-xtckXvwKXy0c-DM4N4YoflpiPiZdEWmQ&usqp=CAU',
      related_content_id: 'NklHM2I2cmM3NUFib01cIixcIkltM3BOWl9DTWQ5a1JN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=NklHM2I2cmM3NUFib01cIixcIkltM3BOWl9DTWQ5a1JN',
      source: 'HOLA',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://hola.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado peruano',
      link: 'https://www.hola.com/cocina/recetas/20200601169156/receta-lomo-saltado-peruano/?viewas=amp',
      original:
        'https://images.hola.com/imagenes/cocina/recetas/20200601169156/receta-lomo-saltado-peruano/0-830-660/lomo-saltado-m.jpg',
      original_width: 745,
      original_height: 745,
      is_product: false
    },
    {
      position: 84,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgXPY4I_7ZTISlWGOVNlUQLVk80db-QtjhA&usqp=CAU',
      related_content_id: 'c2twNXpyMy00a0tWT01cIixcInVjZzgySUtuZkk1Nk9N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=c2twNXpyMy00a0tWT01cIixcInVjZzgySUtuZkk1Nk9N',
      source: 'Koketo',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://koketo.es&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado, plato peruano representativo de la cocina chifa. Koketo',
      link: 'https://koketo.es/lomo-saltado/amp',
      original: 'https://koketo.es/wp-content/uploads/2017/10/Lomo_saltado_koketo.jpg',
      original_width: 1200,
      original_height: 900,
      is_product: false
    },
    {
      position: 85,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp74KpzZOQ39nMQZhRjff8m2UY0wAg7ZpV5w&usqp=CAU',
      related_content_id: 'QTh0VFFNRjBKVXExdE1cIixcInhTY21kX0JmTEdzLVpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=QTh0VFFNRjBKVXExdE1cIixcInhTY21kX0JmTEdzLVpN',
      source: 'Recetas Gratis',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://recetasgratis.net&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado Peruano - Receta ORIGINAL (la Tradicional)',
      link: 'https://www.recetasgratis.net/receta-de-lomo-saltado-peruano-11475.html',
      original: 'https://cdn0.recetasgratis.net/es/posts/5/7/4/lomo_saltado_peruano_11475_orig.jpg',
      original_width: 2318,
      original_height: 1652,
      is_product: false
    },
    {
      position: 86,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7W10Hw5thFVn_SwWQII4X9qhruZNmTUVKXQ&usqp=CAU',
      related_content_id: 'UkxvdnlTZkdRd2tPdk1cIixcIldiblNiTVZsVmU4YVhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=UkxvdnlTZkdRd2tPdk1cIixcIldiblNiTVZsVmU4YVhN',
      source: 'Getty Images',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://gettyimages.es&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: '101 fotos e imágenes de Lomo Saltado - Getty Images',
      link: 'https://www.gettyimages.es/fotos/lomo-saltado',
      original:
        'https://media.gettyimages.com/id/1344822917/es/foto/lomo-saltado-sofrito-carne-de-res-comida-peruana.jpg?s=170667a&w=gi&k=20&c=snANDqt1Wlb7Ia82iezfVLTi8OZASFaTy7DTp-5_5VA=',
      original_width: 509,
      original_height: 339,
      is_product: false
    },
    {
      position: 87,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgs-O0f4KNq7bILXy7jpz-6aHIl45HYhFwtQ&usqp=CAU',
      related_content_id: 'QXAtQXZTSm5LbE9MRk1cIixcIjJFUWdEWmR6d2N5djlN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=QXAtQXZTSm5LbE9MRk1cIixcIjJFUWdEWmR6d2N5djlN',
      source: 'La Ruta Gastro',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://larutagastro.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - La Ruta Gastro',
      link: 'https://larutagastro.com/lomo-saltado/',
      original: 'https://larutagastro.com/wp-content/uploads/2020/06/Lomosaltado-scaled.jpg',
      original_width: 2560,
      original_height: 2427,
      is_product: false
    },
    {
      position: 88,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxjAxqpwu3-ULSZ4mhYMYDJieiYUrZP-p9A&usqp=CAU',
      related_content_id: 'N2txclJNOVJzcWM1LU1cIixcIkdQbUdxYWVZMlpuaFVN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=N2txclJNOVJzcWM1LU1cIixcIkdQbUdxYWVZMlpuaFVN',
      source: 'MIS COSTILLITAS',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://miscostillitas.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'LOMO SALTADO – MIS COSTILLITAS',
      link: 'https://www.miscostillitas.com/inicio/producto/lomo-saltado/',
      original:
        'https://www.miscostillitas.com/inicio/wp-content/uploads/2022/03/1LOMO-SALTADO.jpg',
      original_width: 600,
      original_height: 400,
      is_product: false
    },
    {
      position: 89,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWfhiFs-JlUxfAOJ64oG6Xu9kMVkUbBMcyg&usqp=CAU',
      related_content_id: 'MXpidkowM3NmaHdLNE1cIixcIklRTXR2ZC1GZExXbWpN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MXpidkowM3NmaHdLNE1cIixcIklRTXR2ZC1GZExXbWpN',
      source: 'Goya Foods',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://goya.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - Carne y Papas Fritas al Estilo Peruano',
      link: 'https://www.goya.com/es/recipes/lomo-saltado',
      original:
        'https://www.goya.com/media/3950/lomo-saltado-peruvian-beef-stir-fry-and-potatoes.jpg?quality=80',
      original_width: 1463,
      original_height: 975,
      is_product: false
    },
    {
      position: 90,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9y0EuXRy-GpSzfx2q-JeBdMgVVyM3_11-Nw&usqp=CAU',
      related_content_id: 'RVY5MndsVDVHbG9vUE1cIixcImFfd0RrVllIQlQ4NlZN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=RVY5MndsVDVHbG9vUE1cIixcImFfd0RrVllIQlQ4NlZN',
      source: 'Cocinista',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://cocinista.es&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado peruano | www.cocinista.es',
      link: 'https://www.cocinista.es/web/es/recetas/cocina-internacional/america/lomo-saltado-peruano.html',
      original:
        'https://www.cocinista.es/download/bancorecursos/recetas/receta-lomo-saltado-peruano.jpg',
      original_width: 800,
      original_height: 800,
      is_product: false
    },
    {
      position: 91,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-u5zD1PRxm5WL43dy8vD8sw7W-jp4nFeukQ&usqp=CAU',
      related_content_id: 'UnhrakhEcFQxWm1Lek1cIixcIkpFS2RGd0Y0RzdPaW5N',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=UnhrakhEcFQxWm1Lek1cIixcIkpFS2RGd0Y0RzdPaW5N',
      source: 'Perú 21',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://peru21.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo saltado: esta es la receta perfecta para que tu preparación ...',
      link: 'https://peru21.pe/vida/lomo-saltado-receta-perfecta-preparacion-quede-espectacular-nndc-470110-noticia/?outputType=amp',
      original:
        'https://peru21.pe/resizer/MUupA6-bfrJjaYYRZR-1QQ117Z8=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BIGOCKFLLZD7LCAAIATJR37G44.png',
      original_width: 1200,
      original_height: 1200,
      is_product: false
    },
    {
      position: 92,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sn5x18OfAWseCS8hS2rNZL3iewlh1qw7Yg&usqp=CAU',
      related_content_id: 'dnpzRDNEeXY0TzFocE1cIixcIm9NSU9YUDV6aWpEYjNN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=dnpzRDNEeXY0TzFocE1cIixcIm9NSU9YUDV6aWpEYjNN',
      source: 'Las Comidas Peruanas',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://lascomidasperuanas.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo saltado de pollo - COMIDAS PERUANAS 🥇【 2023 】🍽️',
      link: 'https://lascomidasperuanas.com/receta-de-lomo-saltado-de-pollo/',
      original:
        'https://lascomidasperuanas.com/wp-content/uploads/2022/09/Receta-de-lomo-saltado-de-pollo.jpg',
      original_width: 800,
      original_height: 450,
      is_product: false
    },
    {
      position: 93,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUz4L8B0ut3InepdjClX5nFXTYpufEBtfQw&usqp=CAU',
      related_content_id: 'SzRGV0J3cWVkSG9DWU1cIixcIk5jRFFoSHkyeGVsZEdN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=SzRGV0J3cWVkSG9DWU1cIixcIk5jRFFoSHkyeGVsZEdN',
      source: 'Olive & Mango',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://oliveandmango.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado (Peruvian Beef Stir Fry) | Olive & Mango',
      link: 'https://www.oliveandmango.com/lomo-saltado-peruvian-beef-stir-fry/',
      original: 'https://www.oliveandmango.com/images/uploads/2022_07_18_lomo_saltado_1.jpg',
      original_width: 1500,
      original_height: 1000,
      is_product: false
    },
    {
      position: 94,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrcwjKOOtbW1ETSKpWmEiOcp6d0HVfbufzw&usqp=CAU',
      related_content_id: 'elZmUmNRaVZaTHh4RE1cIixcImt3N1J2Z2Q2clp2cFVN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=elZmUmNRaVZaTHh4RE1cIixcImt3N1J2Z2Q2clp2cFVN',
      source: 'Diariamente Ali',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://diariamenteali.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Receta de Lomo Saltado del Recetario de Nicolini | Diariamente Ali',
      link: 'https://www.diariamenteali.com/receta/receta_de_lomo_saltado_del_recetario_de_nicolini',
      original:
        'https://www.diariamenteali.com/medias/Receta-de-Lomo-Saltado-del-Recetario-de-Nicolini-1900Wx500H?context=bWFzdGVyfGltYWdlc3wyNDM4NzZ8aW1hZ2UvanBlZ3xoNTMvaGU2LzkwNzQxMzU1OTcwODYvUmVjZXRhLWRlLUxvbW8tU2FsdGFkby1kZWwtUmVjZXRhcmlvLWRlLU5pY29saW5pXzE5MDBXeDUwMEh8ZjEyZTUxOTAwYTQ0Nzg4YTE5NjI1ZGVhMjMyNTVhNzJjMGQ3NzI1MWU3NmU3NTA2ZjIxYWNiMWNiMGMwYzU5Nw',
      original_width: 1900,
      original_height: 854,
      is_product: false
    },
    {
      position: 95,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGdEGAV7f-o4jWkEEywfyFz6VhIn08jZdTA&usqp=CAU',
      related_content_id: 'a1Q2SkMycEc3Y2FldE1cIixcIm8xU01UV0NpSlhscndN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=a1Q2SkMycEc3Y2FldE1cIixcIm8xU01UV0NpSlhscndN',
      source: 'peru delicias',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://perudelicias.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'LunesSinCarne – Portobellos Saltados (lomo saltado vegetariano ...',
      link: 'https://perudelicias.com/lunessincarne-portobellos-saltados-lomo-saltado-vegetariano/',
      original: 'https://perudelights.com/wp-content/uploads/2012/07/100_6112.jpg',
      original_width: 2048,
      original_height: 1536,
      is_product: false
    },
    {
      position: 96,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJlIOEZhBR8JxZBmvrD5LiWx83yEhzakLWg&usqp=CAU',
      related_content_id: 'MmhIVDB5dXBYbEY5T01cIixcInRfNW5QOU52T3VNNFRN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MmhIVDB5dXBYbEY5T01cIixcInRfNW5QOU52T3VNNFRN',
      source: 'Venturists',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://venturists.net&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado Peruano - Lomo Saltado Receta',
      link: 'https://www.venturists.net/es/lomo-saltado-receta/',
      original:
        'https://www.venturists.net/wp-content/uploads/2015/07/Peruvian-Lomo-Saltado-Recipe-1-735x560.jpg.webp',
      original_width: 735,
      original_height: 560,
      is_product: false
    },
    {
      position: 97,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hb9Bg68reXKfGNlz1a6zZDNqd8lRhWwdaA&usqp=CAU',
      related_content_id: 'MFRtblJ5N3oxcUtQTE1cIixcIktIaW1mTTFXeWFHTDhN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=MFRtblJ5N3oxcUtQTE1cIixcIktIaW1mTTFXeWFHTDhN',
      source: 'Facebook',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://facebook.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'LOMO SALTADO A LO POBRE RICO Y FACIL | LOMO SALTADO A LO POBRE ...',
      link: 'https://www.facebook.com/AbelcanchoA/videos/lomo-saltado-a-lo-pobre-rico-y-facil/251861583434778/',
      original:
        'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=251861583434778&get_thumbnail=1',
      original_width: 1000,
      original_height: 1500,
      is_product: false
    },
    {
      position: 98,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyV-YbvcOfw8v8-mq42BmXN6BRXECo3VMXJA&usqp=CAU',
      related_content_id: 'Zlotd1FVX1J2QjBfRU1cIixcIlh4OGQ1VkxqVEI1ZEJN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=Zlotd1FVX1J2QjBfRU1cIixcIlh4OGQ1VkxqVEI1ZEJN',
      source: 'Allrecipes',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://allrecipes.com&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Peruvian Lomo Saltado Recipe',
      link: 'https://www.allrecipes.com/recipe/40083/peruvian-lomo-saltado/',
      original:
        'https://www.allrecipes.com/thmb/WaOLRbZs7xjLegsfOqgBMMIotFI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4459131-45fa6a5ad961445a88b4eea8dd9c4cb1.jpg',
      original_width: 960,
      original_height: 960,
      is_product: false
    },
    {
      position: 99,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUkRPXEz8z8eVrzjanUkT_SGIrvYx4PNBBQ&usqp=CAU',
      related_content_id: 'UnBmY2ljbTdseF9GdU1cIixcIlhEOUVVQTAzcXBHLXlN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=UnBmY2ljbTdseF9GdU1cIixcIlhEOUVVQTAzcXBHLXlN',
      source: 'Comidas Peruanas',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://comidasperuanas.net&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'POLLO SALTADO | Receta Fácil y Deliciosa + 3 TIPS',
      link: 'https://comidasperuanas.net/pollo-saltado/',
      original: 'https://comidasperuanas.net/wp-content/uploads/2020/11/Pollo-saltado-peruano.jpg',
      original_width: 680,
      original_height: 450,
      is_product: false
    },
    {
      position: 100,
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiGkYM6otC6XsCudjHjAkZwrsbEtKv6DlTw&usqp=CAU',
      related_content_id: 'OGhHX09aQ19zLUp2ZE1cIixcIlZ0TkYzOVVUdnJsNXBN',
      serpapi_related_content_link:
        'https://serpapi.com/search.json?engine=google_images_related_content&gl=pe&hl=es&q=lomo+saltado&related_content_id=OGhHX09aQ19zLUp2ZE1cIixcIlZ0TkYzOVVUdnJsNXBN',
      source: 'Acomer.pe',
      source_logo:
        'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://acomer.pe&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2',
      title: 'Lomo Saltado - A Comer',
      link: 'https://acomer.pe/lomo-saltado/',
      original: 'https://acomer.pe/wp-content/uploads/2020/10/lomo-perfil-1.jpg',
      original_width: 2000,
      original_height: 2000,
      is_product: false
    }
  ],
  related_searches: [
    {
      link: 'https://www.google.com/search?q=lomo+saltado+hd&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPEB',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+hd',
      query: 'lomo saltado hd',
      highlighted_words: ['hd'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DKqy2IG0KZyIZqFXImrKJQDlB_YJgKopQP0JimGln4B97-q7Kjnbsps&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+animado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPMB',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+animado',
      query: 'lomo saltado animado',
      highlighted_words: ['animado'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkO6RhDFo8G_5mbCd8iGUs0pjR32iu6sR35GSldEc6dBKTLFL86i8MBk&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=estandar+receta+de+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPUB',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=estandar+receta+de+lomo+saltado',
      query: 'estandar receta de lomo saltado',
      highlighted_words: ['estandar receta de'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7wYO8ACYmtLgsPGyhhMfn0bYlsCCa0PudLWyVzFdYQj3ehoY9f7zrpw&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=tallarin+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPcB',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=tallarin+saltado',
      query: 'tallarin saltado',
      highlighted_words: ['tallarin'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2i9QokhW9ANKorSv7O9e8wODTqvu6dJ_NpAtYw_uTCxPpr7EUqNp67Q&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=gaston+acurio+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEIUC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=gaston+acurio+lomo+saltado',
      query: 'gaston acurio lomo saltado',
      highlighted_words: ['gaston acurio'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemfp8dmNAbOn3RUcXWaLMXebcIsa9qOgoSVJE8eeXSRLe8LDrkxwBEdY&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=plato+lomo+saltado+peruano&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEIcC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=plato+lomo+saltado+peruano',
      query: 'plato lomo saltado peruano',
      highlighted_words: ['plato', 'peruano'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaT3TwTcSUAXCgTrfnedYBIMpdoWhX6jAAAGKnDq3fTxHybWryeb2EwPI&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=presentacion+lomo+saltado+gourmet&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEIkC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=presentacion+lomo+saltado+gourmet',
      query: 'presentacion lomo saltado gourmet',
      highlighted_words: ['presentacion', 'gourmet'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSd-wb_ynV6NdKmLW-a-M3oTqJPcup4ISNMxuAKa34FFPiszqb5zGapQ&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=preparacion+receta+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEIsC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=preparacion+receta+lomo+saltado',
      query: 'preparacion receta lomo saltado',
      highlighted_words: ['preparacion receta'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGbTTuLOfY4-tqYFo-v9EyLmGCXrAG4ATSp2EQu1JmpzjIIXW9UD74Es&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+gourmet&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPQC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+gourmet',
      query: 'lomo saltado gourmet',
      highlighted_words: ['gourmet'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjm6Y1jZUql7jwYi2tui6Td8Jq7Cd6JOIOjqHkH140khDBIjAkWctvmk0&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=receta+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPYC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=receta+lomo+saltado',
      query: 'receta lomo saltado',
      highlighted_words: ['receta'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUz5GUDVvIIL4KQ41Z3MIz2UJK22NsGyw3Pu2ZL54qXa3mazbDyGXNoE&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+de+pollo&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPgC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+de+pollo',
      query: 'lomo saltado de pollo',
      highlighted_words: ['de pollo'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAeFKF_FpWMSIS6jXsGu5n5owRxIzJ_l43qjLQcaqZXzAvt00CCmahX0&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=presentacion+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEPoC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=presentacion+lomo+saltado',
      query: 'presentacion lomo saltado',
      highlighted_words: ['presentacion'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4SlankTcVQuMJ3dPXddyOjAGF82gC6fSTh3odug0wZkfFDOy7JJrLEQ&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+casero&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEIwD',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+casero',
      query: 'lomo saltado casero',
      highlighted_words: ['casero'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYO3T8uFmzDwd72CB9Jz94uYAfFreC6ywBhRKtgu_g9DImaLTK3MOZX2I&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+dibujo&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEI4D',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+dibujo',
      query: 'lomo saltado dibujo',
      highlighted_words: ['dibujo'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4uBSHMPTP9CUEzvSOUOh6ThmuEWaj2YRuXFSShsJfgVMwlTdSCV1MsU&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+png&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEJAD',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+png',
      query: 'lomo saltado png',
      highlighted_words: ['png'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8D5ZeBmwLYEtG-U0_jVgmH3a18fIt8JrbslfVE8Fm4WarY81SQomdrY&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+a+lo+pobre&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEJID',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+a+lo+pobre',
      query: 'lomo saltado a lo pobre',
      highlighted_words: ['a lo pobre'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp60-89GLCRLnwKkEN-oVplc9BHRfx08eKPJRxJ31OI78zpWpgvFOexXA&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=receta+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BAgBEG4',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=receta+lomo+saltado',
      query: 'receta lomo saltado',
      highlighted_words: ['receta'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbFiIIE_nID1KcDJmC-xI2pSfGTTj68Fpyj7rO0wAzF5adyP2&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+peruano+receta&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BAgBEHA',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+peruano+receta',
      query: 'lomo saltado peruano receta',
      highlighted_words: ['peruano receta'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RehSuqtOJrsVvQTm1tqsmC4-c3lE8MvSMfIrhFi4L3QRdQyV&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+png&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BAgBEHI',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+png',
      query: 'lomo saltado png',
      highlighted_words: ['png'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVS08m1wnY5WtOwURwuA-D4wftvo7HOsGwza9aaDX3jtCnUQK&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+gourmet&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BAgBEHQ',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+gourmet',
      query: 'lomo saltado gourmet',
      highlighted_words: ['gourmet'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ABQacq0kDFUwBYQ6Cg_LNHydxYd-2f4ItIBHU3M5l1awAQr8&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=Tallar%C3%ADn+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEKsB',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=Tallar%C3%ADn+saltado',
      query: 'Tallarín saltado',
      highlighted_words: ['Tallarín'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3Bjr9xb2U6cLRT0lOUzM3vncqQR6c53BlMBDTCTMAsDY2Rnh&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+casero&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBELAC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+casero',
      query: 'lomo saltado casero',
      highlighted_words: ['casero'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BzWbB9aymYqDUYwUydhA0Yh_9EouQ9Yp4HjTTjo&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+fino&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBELIC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+fino',
      query: 'lomo saltado fino',
      highlighted_words: ['fino'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9RT1TDcMLnYI1LsIwZzri_pKWUOkgLb1hQZ8ts4&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=presentacion+lomo+saltado&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBELQC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=presentacion+lomo+saltado',
      query: 'presentacion lomo saltado',
      highlighted_words: ['presentacion'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aGCEOt3Gc_JYwATx8tapecq7FJFsAwvKCZ5oTioq2Y5IuXMo&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+de+carne&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBELYC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+de+carne',
      query: 'lomo saltado de carne',
      highlighted_words: ['de carne'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-u3lM67z_gt-0hieiRwF1XLqBoSLaq_N3M0vPqhpU5EH9FfAD&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+sin+arroz&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEMUC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+sin+arroz',
      query: 'lomo saltado sin arroz',
      highlighted_words: ['sin arroz'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9nqZNOSnUJFMQo9KCK0zHjYKf7J1swRXrQZZwktPbNazoCcT&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+hd&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEMcC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+hd',
      query: 'lomo saltado hd',
      highlighted_words: ['hd'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPe52laWqBYNnEWk8VW1HqUIw8uw-RYTphw53roefRQjgCQqF&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+wok&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEMkC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+wok',
      query: 'lomo saltado wok',
      highlighted_words: ['wok'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsDH9QhM4138qO1980kPKKkHK529MNvkVxONUlkxXm7Q9LwgG&usqp=CAU'
    },
    {
      link: 'https://www.google.com/search?q=lomo+saltado+vegano&tbm=isch&hl=es&gl=pe&sa=X&ved=2ahUKEwi1qeCmmPaAAxX7uIkEHQ2kB0QQrNwCKAB6BQgBEMsC',
      serpapi_link:
        'https://serpapi.com/search.json?device=mobile&engine=google_images&gl=pe&google_domain=google.com&hl=es&location=Arequipa%2C+Peru&q=lomo+saltado+vegano',
      query: 'lomo saltado vegano',
      highlighted_words: ['vegano'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSnM4IGevUt-Na8iku1gLS0oi_W_ru_Cvf9kJRkcuI-QNKd3X&usqp=CAU'
    }
  ]
}

  <template>
    <div class="rounded-md md:rounded-l-lg md:rounded-r-none p-2">
      <h2 class="text-2xl font-extrabold typewriter" v-typewriter>{{ $t('gallery.title') }}</h2>
      <div class="text-base typewriter mb-6" v-typewriter v-html="$t('gallery.gal_txt')" />
      <div ref="gallery" class="gallery">
        <a
          v-for="(item, index) in galleryItems"
          :key="index"
          :data-lg-size="item.size"
          :data-pinterest-text="item.pinterestText"
          :data-tweet-text="item.tweetText"
          class="gallery__item"
          :data-src="item.src"
          :data-sub-html="item.subHtml"
        >
          <img :src="item.thumb" class="img-responsive" />
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import fjGallery from 'flickr-justified-gallery';
  import lightGallery from 'lightgallery';
  import lgZoom from 'lightgallery/plugins/zoom';
  import lgVideo from 'lightgallery/plugins/video';
  import lgThumbnail from 'lightgallery/plugins/thumbnail';
  
  export default {
    setup() {
      const gallery = ref(null);
  
      const galleryItems = [
        {
          size: "1600-2398",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        },
        {
          size: "1600-1067",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        },
        {
          size: "1600-2400",
          pinterestText: "Pin it2",
          tweetText: "lightGallery slide 1",
          src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        },
        {
          size: "1600-2400",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  5",
          src: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        },
        {
          size: "1600-1067",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        },
        {
          size: "1600-2398",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        },
        {
          size: "1600-1067",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        },
        {
          size: "1600-2400",
          pinterestText: "Pin it2",
          tweetText: "lightGallery slide 1",
          src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        },
        {
          size: "1600-2400",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  5",
          src: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        },
        {
          size: "1600-1067",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        },
        {
          size: "1600-2398",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        },
        {
          size: "1600-1067",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        },
        {
          size: "1600-2400",
          pinterestText: "Pin it2",
          tweetText: "lightGallery slide 1",
          src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        },
        {
          size: "1600-2400",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  5",
          src: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        },
        {
          size: "1600-1067",
          pinterestText: "Pin it3",
          tweetText: "lightGallery slide  4",
          src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          thumb: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
          subHtml: "<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        }
        // Agrega más elementos de la galería aquí...
      ];
  
      onMounted(async() => {
        if (process.client) {
          await nextTick();
          // Inicializar flickr-justified-gallery
        fjGallery(gallery.value, {
          itemSelector: '.gallery__item',
          rowHeight: window.innerWidth < 768 ? 260 : 180,
          lastRow: 'start',
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
  
        // Inicializar lightgallery
        lightGallery(gallery.value, {
          plugins: [lgZoom, lgVideo, lgThumbnail],
          mode: 'lg-fade',
          pager: false,
          thumbnail: true,
          galleryId: 'nature',
          autoplayFirstVideo: false,
          mobileSettings: {
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false,
          },
        });
        }
      });
  
      return {
        gallery,
        galleryItems,
      };
    },
  };
  </script>
  
  <style>
  /* Copia y pega los estilos CSS que proporcionaste aquí */
  /*
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.4.0/css/lightgallery.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.4.0/css/lg-zoom.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.4.0/css/lg-video.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.4.0/css/lg-thumbnail.css');
  */

  @import url('public/styles/lightgallery.css');
  @import url('public/styles/lg-zoom.css');
  @import url('public/styles/lg-video.css');
  @import url('public/styles/lg-thumbnail.css');
  
  .gallery {
    max-width: 800px;
    margin: 0 auto;
  }
  .gallery__item img {
    width: 100%;
  }
  </style>
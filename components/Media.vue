  <template>
    <div class="rounded-md md:rounded-l-lg md:rounded-r-none p-2">
      <RandomText class="text-3xl font-extrabold mb-4" type="h1" :texts="texts" />
      <div class="text-base typewriter mb-6" v-typewriter v-html="$t('gallery.description')" />
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
  
  <script setup>
import { ref, onMounted } from 'vue'
import fjGallery from 'flickr-justified-gallery'
import lightGallery from 'lightgallery'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-thumbnail.css'
import RandomText from '~/components/RandomText.vue'
import { useI18n } from 'vue-i18n' // Import useI18n
  const { t } = useI18n()

  const texts = [
    t('gallery.title_1'),
    t('gallery.title_2'),
    t('gallery.title_3'),
    t('gallery.title_4'),
    t('gallery.title_5'),
    t('gallery.title_6'),
    t('gallery.title_7'),
    t('gallery.title_8'),
    t('gallery.title_9'),
    t('gallery.title_10')
  ]

// Define reactive references
const gallery = ref(null)
const galleryItems = ref([])

// Function to fetch gallery items
const fetchGalleryItems = async () => {
  try {
    const response = await fetch('/data/gallery.json') // Fetch from public folder
    galleryItems.value = await response.json()
  } catch (error) {
    console.error('Error fetching gallery items:', error)
  }
}

// Initialize galleries when the component is mounted
onMounted(async () => {
  await fetchGalleryItems() // Load gallery items on mount

  // Initialize Justified Gallery
  fjGallery(gallery.value, {
    itemSelector: '.gallery__item',
    rowHeight: 140,
    lastRow: 'nojustify',
    margins: 5,
  })

  // Initialize LightGallery
  lightGallery(gallery.value, {
    plugins: [lgZoom, lgVideo, lgThumbnail],
    speed: 500,
    download: false,
  })
})
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
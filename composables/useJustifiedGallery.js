import { onMounted, onUnmounted } from 'vue'

export function useJustifiedGallery(containerRef, options = {}) {
  const defaults = {
    rowHeight: 200,
    maxRowHeight: 300,
    lastRow: 'justify',
    margins: 10,
  }

  const settings = { ...defaults, ...options }

  function resizeGallery() {
    if (!containerRef.value) return

    const items = Array.from(containerRef.value.children)
    let row = []
    let rowWidth = 0
    let containerWidth = containerRef.value.clientWidth - settings.margins

    items.forEach((item, index) => {
      const img = item.querySelector('img')
      if (!img || !img.naturalWidth) return

      const imgWidth = (settings.rowHeight / img.naturalHeight) * img.naturalWidth
      row.push({ item, img, imgWidth })
      rowWidth += imgWidth

      if (rowWidth > containerWidth || index === items.length - 1) {
        const scaleFactor = containerWidth / rowWidth
        row.forEach(({ item, img, imgWidth }) => {
          item.style.width = `${imgWidth * scaleFactor}px`
          item.style.height = `${settings.rowHeight}px`
          img.style.width = '100%'
          img.style.height = '100%'
        })
        row = []
        rowWidth = 0
      }
    })
  }

  onMounted(() => {
    resizeGallery()
    window.addEventListener('resize', resizeGallery)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeGallery)
  })

  return {
    resizeGallery,
  }
}

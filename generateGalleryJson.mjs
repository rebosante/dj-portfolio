import fs from "fs-extra";
import path from "path";
import glob from "fast-glob";
import { imageSize } from "image-size";

async function generateGalleryJson() {
    const imagesPath = "public/images/gallery/";
    const outputJson = "gallery.json";

    // Buscar imágenes dentro de la carpeta
    const files = await glob(`${imagesPath}*.{jpg,png,jpeg,gif,webp}`);

    const galleryData = await Promise.all(
        files.map(async (file) => {
            const buffer = await fs.readFile(file); // Leer la imagen como buffer
            const dimensions = imageSize(buffer); // Obtener dimensiones
            const filename = path.basename(file);
            const thumbPath = `images/gallery/thumbnails/${filename}`;

            return {
                size: `${dimensions.width}-${dimensions.height}`,
                src: `${imagesPath}${filename}`,
                thumb: thumbPath,
                subHtml: "<h4>Title</h4><p>Description of the pic</p>",
            };
        })
    );

    // Guardar el JSON
    await fs.writeJson(outputJson, galleryData, { spaces: 4 });

    console.log(`✅ Archivo generado: ${outputJson}`);
}
// command: node generateGalleryJson.mjs
generateGalleryJson().catch(console.error);

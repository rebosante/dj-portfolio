export const useSiteMetaTags = () => {
    const { t, locale } = useI18n()
    const route = useRoute()
    const config = useRuntimeConfig()

    const baseMeta = {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        robots: 'index, follow'
    }

    // Cambiado a objeto reactivo (no función)
    const i18nMeta = reactive({
        title: t('meta.title'),
        description: t('meta.description'),
        keywords: t('meta.keywords'),
        ogTitle: t('meta.og.title'),
        ogDescription: t('meta.og.description'),
        ogImage: t('meta.og.image'),
        ogUrl: `${config.public.siteUrl}${route.path}`,
        ogType: 'website',
        ogLocale: locale.value,
        twitterCard: 'summary_large_image',
        twitterTitle: t('meta.twitter.title'),
        twitterDescription: t('meta.twitter.description'),
        twitterImage: t('meta.twitter.image'),
        link: [
            {
                rel: 'alternate',
                hreflang: 'en',
                href: `${config.public.siteUrl}/en${route.path.replace(/^\/[a-z]{2}-[A-Z]{2}/, '')}`
            },
            {
                rel: 'alternate',
                hreflang: 'es',
                href: `${config.public.siteUrl}/es${route.path.replace(/^\/[a-z]{2}-[A-Z]{2}/, '')}`
            }
        ]
    })

    return {
        baseMeta,
        i18nMeta
    }
}

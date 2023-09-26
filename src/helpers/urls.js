// Categories

export const categoriesListUrl = '/categories'

// Banners
export const bannerListUrl = 'extra/sliders'


// Products

export const productOfTheDayUrl = '/product-of-the-day'
export const productsSaleList = '/products?is_sale=true'
export const productWithSlug = (slug) => `/products/view?alias=${slug}`

// Compare

export const compareProductsUrl = (query) => `/products/compare?${query}`
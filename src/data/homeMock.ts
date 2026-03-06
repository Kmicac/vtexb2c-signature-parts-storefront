export type HeroSlide = {
  id: string
  title: string
  ctaLabel: string
  ctaHref: string
  image: string
}

export type BrandItem = {
  id: string
  name: string
  logo: string
  cover: string
  href: string
}

export type CategoryItem = {
  id: string
  name: string
  image: string
  href: string
}

export type ProductItem = {
  id: string
  name: string
  priceArs: number
  badge: 'Nuevo' | 'Oferta'
  tag: 'OEM' | 'Equivalente'
  stock: number
  image: string
  href: string
}

export type FooterSection = {
  title: string
  links: Array<{ label: string; href: string }>
}

export const homeMock = {
  brand: {
    name: 'Signature Parts',
    tagline: 'Repuestos premium para Mercedes-Benz y BMW',
  },
  topbar: {
    text: 'Envío a todo el país • Soporte especializado • Garantía de calidad',
    ctaLabel: 'Ver ofertas',
    ctaHref: '#ofertas',
  },
  header: {
    searchPlaceholder:
      'Buscar por pieza, código o modelo (ej: pastillas, A000, filtro)',
  },
  navbar: {
    categories: [
      { name: 'Frenos', href: '#frenos' },
      { name: 'Suspensión', href: '#suspension' },
      { name: 'Motor', href: '#motor' },
      { name: 'Accesorios', href: '#accesorios' },
      { name: 'Rines', href: '#rines' },
      { name: 'Baterías', href: '#baterias' },
      { name: 'Partes de carro', href: '#partes-carro' },
    ],
  },
  logos: {
    mercedes: '/images/brands/mercedes-logo.svg',
    bmw: '/images/brands/bmw-logo.svg',
  },
  hero: {
    slides: [
      {
        id: 'hero-1',
        title: 'Repuestos premium para tu Mercedes o BMW',
        ctaLabel: 'Explorar catálogo',
        ctaHref: '#catalogo',
        image: '/images/home/hero-premium.svg',
      },
      {
        id: 'hero-2',
        title: 'Calidad alemana para tu vehículo',
        ctaLabel: 'Ver categorías',
        ctaHref: '#categorias',
        image: '/images/home/hero-quality.svg',
      },
      {
        id: 'hero-3',
        title: 'Encuentra el repuesto exacto',
        ctaLabel: 'Buscar repuestos',
        ctaHref: '#busqueda',
        image: '/images/home/hero-find.svg',
      },
    ] as HeroSlide[],
  },
  brands: {
    title: 'Compra por marca',
    items: [
      {
        id: 'mercedes',
        name: 'Mercedes-Benz',
        logo: '/images/brands/mercedes-logo.svg',
        cover: '/images/brands/mercedes-cover.svg',
        href: '#mercedes-benz',
      },
      {
        id: 'bmw',
        name: 'BMW',
        logo: '/images/brands/bmw-logo.svg',
        cover: '/images/brands/bmw-cover.svg',
        href: '#bmw',
      },
    ] as BrandItem[],
  },
  categories: {
    title: 'Explora por categoría',
    items: [
      {
        id: 'frenos',
        name: 'Frenos',
        image: '/images/categories/frenos.svg',
        href: '#frenos',
      },
      {
        id: 'suspension',
        name: 'Suspensión',
        image: '/images/categories/suspension.svg',
        href: '#suspension',
      },
      {
        id: 'motor',
        name: 'Motor',
        image: '/images/categories/motor.svg',
        href: '#motor',
      },
      {
        id: 'accesorios',
        name: 'Accesorios',
        image: '/images/categories/accesorios.svg',
        href: '#accesorios',
      },
      {
        id: 'rines',
        name: 'Rines',
        image: '/images/categories/rines.svg',
        href: '#rines',
      },
      {
        id: 'baterias',
        name: 'Baterías',
        image: '/images/categories/baterias.svg',
        href: '#baterias',
      },
      {
        id: 'partes-carro',
        name: 'Partes de carro',
        image: '/images/categories/partes-carro.svg',
        href: '#partes-carro',
      },
    ] as CategoryItem[],
  },
  featuredProducts: {
    title: 'Más buscados',
    items: [
      {
        id: 'prod-1',
        name: 'Disco de freno ventilado delantero',
        priceArs: 289500,
        badge: 'Oferta',
        tag: 'OEM',
        stock: 12,
        image: '/images/products/brake-disc.svg',
        href: '#producto-disco-freno',
      },
      {
        id: 'prod-2',
        name: 'Juego de pastillas de freno premium',
        priceArs: 164900,
        badge: 'Nuevo',
        tag: 'Equivalente',
        stock: 18,
        image: '/images/products/brake-pads.svg',
        href: '#producto-pastillas-freno',
      },
      {
        id: 'prod-3',
        name: 'Filtro de aceite de alto rendimiento',
        priceArs: 38900,
        badge: 'Nuevo',
        tag: 'OEM',
        stock: 34,
        image: '/images/products/oil-filter.svg',
        href: '#producto-filtro-aceite',
      },
      {
        id: 'prod-4',
        name: 'Brazo de control reforzado',
        priceArs: 237800,
        badge: 'Oferta',
        tag: 'OEM',
        stock: 9,
        image: '/images/products/control-arm.svg',
        href: '#producto-brazo-control',
      },
      {
        id: 'prod-5',
        name: 'Amortiguador trasero deportivo',
        priceArs: 312000,
        badge: 'Nuevo',
        tag: 'Equivalente',
        stock: 7,
        image: '/images/products/shock-absorber.svg',
        href: '#producto-amortiguador',
      },
    ] as ProductItem[],
  },
  newArrivals: {
    title: 'Nuevos ingresos',
    subtitle: 'Las últimas piezas disponibles.',
    items: [
      {
        id: 'new-1',
        name: 'Batería AGM 12V alta duración',
        priceArs: 198500,
        badge: 'Nuevo',
        tag: 'OEM',
        stock: 11,
        image: '/images/products/battery-agm.svg',
        href: '#producto-bateria-agm',
      },
      {
        id: 'new-2',
        name: 'Llanta de aleación 19" Sport Line',
        priceArs: 451700,
        badge: 'Nuevo',
        tag: 'Equivalente',
        stock: 6,
        image: '/images/products/alloy-wheel.svg',
        href: '#producto-llanta-aleacion',
      },
      {
        id: 'new-3',
        name: 'Kit de bobinas de encendido',
        priceArs: 145300,
        badge: 'Nuevo',
        tag: 'OEM',
        stock: 15,
        image: '/images/products/ignition-coils.svg',
        href: '#producto-bobinas',
      },
      {
        id: 'new-4',
        name: 'Bieleta de suspensión delantera',
        priceArs: 72900,
        badge: 'Oferta',
        tag: 'Equivalente',
        stock: 20,
        image: '/images/products/suspension-link.svg',
        href: '#producto-bieleta',
      },
    ] as ProductItem[],
  },
  promoBanner: {
    title: 'Repuestos premium sin complicaciones',
    ctaLabel: 'Ver catálogo',
    ctaHref: '#catalogo',
    image: '/images/home/promo-banner.svg',
  },
  newsletter: {
    title: 'Recibe ofertas exclusivas',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    ctaLabel: 'Suscribirme',
  },
  footer: {
    sections: [
      {
        title: 'Empresa',
        links: [
          { label: 'Quiénes somos', href: '#quienes-somos' },
          { label: 'Nuestra historia', href: '#nuestra-historia' },
          { label: 'Contacto', href: '#contacto' },
        ],
      },
      {
        title: 'Compras',
        links: [
          { label: 'Cómo comprar', href: '#como-comprar' },
          { label: 'Medios de pago', href: '#medios-de-pago' },
          { label: 'Envíos', href: '#envios' },
        ],
      },
      {
        title: 'Soporte',
        links: [
          { label: 'Centro de ayuda', href: '#centro-de-ayuda' },
          { label: 'Garantías', href: '#garantias' },
          { label: 'Devoluciones', href: '#devoluciones' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Términos y condiciones', href: '#terminos' },
          { label: 'Política de privacidad', href: '#privacidad' },
          { label: 'Cookies', href: '#cookies' },
        ],
      },
    ] as FooterSection[],
    disclaimer:
      'Mercedes-Benz y BMW son marcas registradas de sus respectivos titulares.',
  },
}

export const formatArs = (amount: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount)

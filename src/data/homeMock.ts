export type HeroSlide = {
  id: string
  title: string
  ctaLabel: string
  ctaHref: string
}

export type BrandItem = {
  id: string
  name: string
  href: string
}

export type CategoryItem = {
  id: string
  name: string
  href: string
}

export type ProductItem = {
  id: string
  name: string
  priceArs: number
  badge: 'Nuevo' | 'Oferta'
  tag: 'OEM' | 'Equivalente'
  stock: number
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
  hero: {
    slides: [
      {
        id: 'hero-1',
        title: 'Repuestos premium para tu Mercedes o BMW',
        ctaLabel: 'Explorar catálogo',
        ctaHref: '#catalogo',
      },
      {
        id: 'hero-2',
        title: 'Calidad alemana para tu vehículo',
        ctaLabel: 'Ver categorías',
        ctaHref: '#categorias',
      },
      {
        id: 'hero-3',
        title: 'Encuentra el repuesto exacto',
        ctaLabel: 'Buscar repuestos',
        ctaHref: '#busqueda',
      },
    ] as HeroSlide[],
  },
  brands: {
    title: 'Compra por marca',
    items: [
      {
        id: 'mercedes',
        name: 'Mercedes-Benz',
        href: '#mercedes-benz',
      },
      {
        id: 'bmw',
        name: 'BMW',
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
        href: '#frenos',
      },
      {
        id: 'suspension',
        name: 'Suspensión',
        href: '#suspension',
      },
      {
        id: 'motor',
        name: 'Motor',
        href: '#motor',
      },
      {
        id: 'accesorios',
        name: 'Accesorios',
        href: '#accesorios',
      },
      {
        id: 'rines',
        name: 'Rines',
        href: '#rines',
      },
      {
        id: 'baterias',
        name: 'Baterías',
        href: '#baterias',
      },
      {
        id: 'partes-carro',
        name: 'Partes de carro',
        href: '#partes-carro',
      },
    ] as CategoryItem[],
  },
  featuredProducts: {
    title: 'Más buscados',
    items: [
      {
        id: 'prod-1',
        name: 'Disco de freno ventilado BMW Serie 3',
        priceArs: 289500,
        badge: 'Oferta',
        tag: 'OEM',
        stock: 12,
        href: '/disco-de-freno-ventilado-bmw-serie-3/p',
      },
      {
        id: 'prod-2',
        name: 'Tapetes interiores Mercedes Clase C',
        priceArs: 164900,
        badge: 'Nuevo',
        tag: 'Equivalente',
        stock: 18,
        href: '/tapetes-interiores-mercedes-clase-c/p',
      },
      {
        id: 'prod-3',
        name: 'Filtro de aceite BMW Serie 3',
        priceArs: 38900,
        badge: 'Nuevo',
        tag: 'OEM',
        stock: 34,
        href: '/filtro-de-aceite-bmw-serie-3/p',
      },
      {
        id: 'prod-4',
        name: 'Cremallera de dirección Mercedes Clase C',
        priceArs: 237800,
        badge: 'Oferta',
        tag: 'OEM',
        stock: 9,
        href: '/cremallera-de-direccion-mercedes-clase-c/p',
      },
      {
        id: 'prod-5',
        name: 'Soporte de transmisión Mercedes Clase E',
        priceArs: 312000,
        badge: 'Nuevo',
        tag: 'Equivalente',
        stock: 7,
        href: '/soporte-de-transmision-mercedes-clase-e/p',
      },
    ] as ProductItem[],
  },
  newArrivals: {
    title: 'Nuevos ingresos',
    subtitle: 'Las últimas piezas disponibles.',
    items: [
      {
        id: 'new-1',
        name: 'Batería AGM BMW Serie 5',
        priceArs: 198500,
        badge: 'Nuevo',
        tag: 'OEM',
        stock: 11,
        href: '/bateria-agm-bmw-serie-5/p',
      },
      {
        id: 'new-2',
        name: 'Llanta deportiva BMW 19 pulgadas',
        priceArs: 451700,
        badge: 'Nuevo',
        tag: 'Equivalente',
        stock: 6,
        href: '/llanta-deportiva-bmw-19-pulgadas/p',
      },
      {
        id: 'new-3',
        name: 'Alternador Mercedes Clase C',
        priceArs: 145300,
        badge: 'Nuevo',
        tag: 'OEM',
        stock: 15,
        href: '/alternador-mercedes-clase-c/p',
      },
      {
        id: 'new-4',
        name: 'Bieleta de suspensión delantera',
        priceArs: 72900,
        badge: 'Oferta',
        tag: 'Equivalente',
        stock: 20,
        href: '/bieleta-de-suspension-mercedes-clase-c/p',
      },
    ] as ProductItem[],
  },
  promoBanner: {
    title: 'Repuestos premium sin complicaciones',
    ctaLabel: 'Ver catálogo',
    ctaHref: '#catalogo',
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

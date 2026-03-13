import type { StaticImageData } from 'next/image'

import heroPremium from './home/hero-premium.jpg'
import heroQuality from './home/hero-quality.jpg'
import heroFind from './home/hero-find.jpg'
import promoBanner from './home/promo-banner.jpg'

import mercedesLogo from './brands/mercedes-logo.svg'
import bmwLogo from './brands/bmw-logo.svg'
import mercedesCover from './brands/mercedes-cover.jpg'
import bmwCover from './brands/bmw-cover.jpg'

import frenos from './categories/frenos.jpg'
import suspension from './categories/suspension.jpg'
import motor from './categories/motor.jpg'
import accesorios from './categories/accesorios.jpg'
import rines from './categories/rines.jpg'
import baterias from './categories/baterias.jpg'
import partesCarro from './categories/partes-carro.jpg'

import brakeDisc from './products/brake-disc.jpg'
import brakePads from './products/brake-pads.jpg'
import oilFilter from './products/oil-filter.jpg'
import controlArm from './products/control-arm.jpg'
import shockAbsorber from './products/shock-absorber.jpg'
import batteryAgm from './products/battery-agm.jpg'
import alloyWheel from './products/alloy-wheel.jpg'
import ignitionCoils from './products/ignition-coils.jpg'
import suspensionPart from './products/suspension.jpg'

export type HomeAssetImage = StaticImageData | string

export const homeAssets = {
  logos: {
    mercedes: mercedesLogo,
    bmw: bmwLogo,
  },
  heroSlides: {
    'hero-1': heroPremium,
    'hero-2': heroQuality,
    'hero-3': heroFind,
  },
  brands: {
    mercedes: {
      logo: mercedesLogo,
      cover: mercedesCover,
    },
    bmw: {
      logo: bmwLogo,
      cover: bmwCover,
    },
  },
  categories: {
    frenos,
    suspension,
    motor,
    accesorios,
    rines,
    baterias,
    'partes-carro': partesCarro,
  },
  products: {
    'prod-1': brakeDisc,
    'prod-2': brakePads,
    'prod-3': oilFilter,
    'prod-4': controlArm,
    'prod-5': shockAbsorber,
    'new-1': batteryAgm,
    'new-2': alloyWheel,
    'new-3': ignitionCoils,
    'new-4': suspensionPart,
  },
  promoBanner,
} as const

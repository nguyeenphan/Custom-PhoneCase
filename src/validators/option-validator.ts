// bg-zinc-900 border-zinc-900
// bg-blue-900 border-blue-900
// bg-rose-900 border-rose-900
// bg-yellow-600 border-yellow-600

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    { 
        label: 'Black', 
        value: 'black', 
        tw: 'zinc-900'
    },
    {
        label: 'Blue',
        value: 'blue',
        tw: 'blue-900'
    },
    {
        label: 'Rose',
        value: 'rose',
        tw: 'rose-900'
    },
    {
        label: 'Yellow',
        value: 'yellow',
        tw: 'yellow-600'
    }
] as const

export const MODELS = {
    name: "models",
    options: [
        {
            label: 'iPhone 12 Pro Max',
            value: 'iphone12',
        },
        {
            label: 'iPhone 13 Pro Max',
            value: 'iphone13',
        },
        {
            label: 'iPhone 14 Pro Max',
            value: 'iphone14',
        },
        {
            label: 'iPhone 15 Pro Max',
            value: 'iphone15',
        },
        {
            label: 'iPhone 16 Pro Max',
            value: 'iphone16',
        },
    ],
} as const

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: "Carbon Fiber",
            value: "carbonfiber",
            description: undefined,
            price: PRODUCT_PRICES.material.carbonfiber,
        },
    ],
} as const

export const FINISHES = {
    name: "finish",
    options: [
        {
            label: "Smooth Finish",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: "Texture Finish",
            value: "textured",
            description: "Chống trơn trượt",
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
} as const

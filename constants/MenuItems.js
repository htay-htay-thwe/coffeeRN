import affogato from "@/assets/images/menu/affogato.png"
import americano from "@/assets/images/menu/americano.png"
import cappuccino from "@/assets/images/menu/cappuccino.png"
import coldbrew from "@/assets/images/menu/coldbrew.png"
import cortado from "@/assets/images/menu/cortado.png"
import doppio from "@/assets/images/menu/doppio.jpg"
import espresso from "@/assets/images/menu/espresso.png"
import flatwhite from "@/assets/images/menu/flatwhite.png"
import latte from "@/assets/images/menu/latte.png"
import longblack from "@/assets/images/menu/longblack.jpg"
import macchiato from "@/assets/images/menu/macchiato.webp"
import mocha from "@/assets/images/menu/mocha.jpg"
import ristretto from "@/assets/images/menu/ristretto.jpg"

export const MENU_ITEMS = [
    {
        id: 1,
        name: "Espresso",
        description: "Strong, concentrated coffee.",
        type: "Hot",
        price: 2.5,
        image: espresso
    },
    {
        id: 2,
        name: "Americano",
        description: "Espresso diluted with hot water.",
        type: "Hot",
        price: 3,
        image: americano
    },
    {
        id: 3,
        name: "Latte",
        description: "Espresso with steamed milk and foam.",
        type: "Hot",
        price: 3.5,
        image: latte
    },
    {
        id: 4,
        name: "Cappuccino",
        description: "Equal parts espresso, milk, and foam.",
        type: "Hot",
        price: 3.5,
        image: cappuccino
    },
    {
        id: 5,
        name: "Macchiato",
        description: "Espresso with a dollop of foam.",
        type: "Hot",
        price: 3,
        image: macchiato
    },
    {
        id: 6,
        name: "Mocha",
        description: "Latte with chocolate flavor.",
        type: "Hot",
        price: 4,
        image: mocha
    },
    {
        id: 7,
        name: "Flat White",
        description: "Espresso with velvety steamed milk.",
        type: "Hot",
        price: 3.5,
        image: flatwhite
    },
    {
        id: 8,
        name: "Cortado",
        description: "Equal parts espresso and milk.",
        type: "Hot",
        price: 3,
        image: cortado
    },
    {
        id: 9,
        name: "Cold Brew",
        description: "Cold water brewed coffee.",
        type: "Cold",
        price: 4,
        image: coldbrew
    },
    {
        id: 10,
        name: "Affogato",
        description: "Espresso over ice cream.",
        type: "Cold",
        price: 4.5,
        image: affogato
    },
    {
        id: 11,
        name: "Ristretto",
        description: "Short shot of espresso, very strong.",
        type: "Hot",
        price: 2.5,
        image: ristretto
    },
    {
        id: 12,
        name: "Doppio",
        description: "Double shot of espresso.",
        type: "Hot",
        price: 3,
        image: doppio
    },
    {
        id: 13,
        name: "Long Black",
        description: "Espresso poured over hot water.",
        type: "Hot",
        price: 3,
        image: longblack
    }
];
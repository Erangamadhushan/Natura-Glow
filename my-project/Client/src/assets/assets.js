import menu from './menu.png';
import main from './home/main.jpg';
import cosmetics from './home/cosmetics.jpg';
import review from './home/review.jpg';

//load icons into the file
import cruelty from './home/icons/cruelty-free.png';
import ethical from './home/icons/ethical.png';
import labTest from './home/icons/lab-testing.png';
import noAlcohol from './home/icons/no-alcohol.png';
import noChemicals from './home/icons/no-chemical.png';
import organic from './home/icons/organic.png';
import sulface from './home/icons/sulface.png';
import mainCosmetics from './home/cosmetics.png';

//load main popular itme resources
import popular1 from './home/items/items1.jpg';
import popular2 from './home/items/items2.jpg';
import popular3 from './home/items/items3.jpg';

//import logo from './logo.png';
export const menuLogo = [menu];
export const mainImage = main;
export const cosmeticsImage = cosmetics;
export const reviewImage = review;
export const iconsImage = [ cruelty, ethical, labTest, noAlcohol, noChemicals, organic, sulface ];
export const cosmeticsMainImage = mainCosmetics;
export const cosmeticsDetails = [
    {
        name:'Organic',
        image:organic
    },
    {
        name:'Cruelty Free',
        image:cruelty
    },
    {
        name:'Lab Tested',
        image:labTest
    },
    {
        name:'No Alcohol',
        image:noAlcohol
    },
    {
        name:'No Chemicals',
        image:noChemicals
    },
    {
        name:'Ethical',
        image:ethical
    },
    {
        name:'Sulface Free',
        image:sulface
    }
];

export const popularItems = [
    {
        title:"Dewy Glow Highlighter",
        image:popular1,
        category:"category1",
        desc:"Our award-winning Luminous Silk Foundation delivers a second-skin effect with groundbreaking micro-fil technology.",
        price:42.99,
        size:"30ml / 1.0 fl oz",
        shade_range:"32 shades from Fair to Deep",
        skin_type:" All skin types",
        key_ingredients:[
            " Hyaluronic acid",
            "Vitamin E",
            "Light-reflecting pigments"
        ],
        benefits:[
            "Medium, buildable coverage with a natural finish",
            "Hydrates skin for up to 12 hours",
            "Minimizes the appearance of fine lines",
            "Non-comedogenic formula",
            "Oil-free and fragrance-free"
        ],
        description:"Our award-winning Luminous Silk Foundation delivers a second-skin effect with groundbreaking micro-fil technology. This lightweight formula evens out skin tone while maintaining a natural, radiant finish that never looks cakey or settles into fine lines. Infused with glycerin and hyaluronic acid for all-day hydration."
    },
    {
        title:"Dewy Glow Highlighter",
        image:popular2,
        category:"category2",
        desc:"Achieve that coveted lit-from-within glow with our revolutionary cream-to-powder highlighter.",
        price:28.50,
        size:"8g / 0.28 oz",
        shade_range:"5 shades (Pearl, Champagne, Golden, Bronze, Rose Gold)",
        skin_type:" All skin types",
        key_ingredients:[
            "Jojoba oil",
            "Vitamin E",
            "Microfine pearl pigments"
        ],
        benefits:[
            "Buildable intensity from subtle to dramatic",
            "Melts into skin for a natural finish",
            "Never emphasizes texture or pores",
            "Can be applied with fingers, brush, or beauty sponge",
            "Multi-use for face and body"
        ],
        description:" Achieve that coveted lit-from-within glow with our revolutionary cream-to-powder highlighter. The buttery formula glides onto skin and sets to a luminous finish that catches light beautifully without looking glittery. The unique formula contains light-reflecting pearls suspended in a moisturizing base for a dewy finish that lasts all day."
    },
    {
        title:"Velvet Matte Lipstick",
        image:popular3,
        category:"category3",
        desc:"Experience color that commands attention with our Velvet Matte Lipstick.",
        price:24.99,
        size:"3.5g / 0.12 oz",
        shade_range:"20 shades from nudes to bold colors",
        skin_type:"All lip types",
        key_ingredients:[
            "Shea butter",
            "Vitamin E",
            "Collagen peptides"
        ],
        benefits:[
            "Full coverage in one swipe",
            "Comfortable 8-hour wear",
            "Non-drying formula",
            "No bleeding or feathering",
            "Vegan and cruelty-free"
        ],
        description:" Experience color that commands attention with our Velvet Matte Lipstick. This luxurious formula delivers intense pigmentation with a sophisticated matte finish that never feels dry or tight. Enriched with a conditioning complex of shea butter and vitamin E, it keeps lips soft and supple while providing long-lasting, transfer-resistant color."
    }
]


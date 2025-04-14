import menu from './menu.png';
import main from './home/main.jpg';
import cosmetics from './home/cosmetics.jpg';

//load icons into the file
import cruelty from './home/icons/cruelty-free.png';
import ethical from './home/icons/ethical.png';
import labTest from './home/icons/lab-testing.png';
import noAlcohol from './home/icons/no-alcohol.png';
import noChemicals from './home/icons/no-chemical.png';
import organic from './home/icons/organic.png';
import sulface from './home/icons/sulface.png';

//import logo from './logo.png';
export const menuLogo = [menu];
export const mainImage = main;
export const cosmeticsImage = cosmetics;
export const iconsImage = [ cruelty, ethical, labTest, noAlcohol, noChemicals, organic, sulface ];

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
]


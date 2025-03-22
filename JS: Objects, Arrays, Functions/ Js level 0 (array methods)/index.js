const products = [
    { name: 'Անձեռոցիկ', price: '400դրամ', producer: 'Ախթամար ՍՊԸ', count: 300 }, 
    { name: 'Ատամի  մածուկ', price: '1250դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 234 }, 
    { name: 'Զուգարանի թուղթ', price: '200դրամ', producer: 'Զիվա ՍՊԸ', count: 120 }, 
    { name: 'Տուփ', price: '10դրամ', producer: 'Յունիփաք գրուփ', count: 1000 }, 
    { name: 'Թաց անձեռոցիկ', price: '600դրամ', producer: 'Ախթամար ՍՊԸ', count: 600 }, 
    { name: 'Ատամի խոզանակ', price: '960 դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 333 }, 
    { name: 'Սպունգ', price: '300դրամ', producer: 'Զիվա ՍՊԸ', count: 340 }, 
    { name: 'Գտդալ', price: '7դրամ', producer: 'Յունիփաք գրուփ', count: 2000 }
];

// Return the array of products, where the price is greater than 600
const priceGreater = (products, minValue) => products.filter(product => product.count > minValue);
console.log(priceGreater(products, 600));

// Return the first product where the producer is 'Զիվա ՍՊԸ' and the price is 200
const firstProduct = (products, producer) => products.find(product => product.producer === producer);
console.log(firstProduct(products, 'Զիվա ՍՊԸ'));

// Map over the array and add random ids to each product
const addIds = (products) => products.map(product => ({...product, id: Math.floor(Math.random() * 100)}));
console.log(addIds(products));

// Return the array which includes only item names and counts
const includesNamesAndCounts = (products) => products.map(product => ({name: product.name, count: product.count}));
console.log(includesNamesAndCounts(products));

// Find an element with price 7
const findPrice = (products, price) => products.find(product => +product.price.replace(/\D/g, "") === price);
console.log(findPrice(products, 7));

// Return elements grouped by the producer (like the following)
const groupByValue = (products, groupBy) => {
    const grouped = {};
    products.forEach(product => {
        if (!grouped[product[groupBy]]) {
            grouped[product[groupBy]] = [];
        } 
        grouped[product[groupBy]].push(product);

    });

    return grouped;
}

console.log(groupByValue(products, 'producer'));

// Return a new array where the namings are in English
// Create some kind of mapping from Armenian to English => 
// Ա => A
// Բ => B
// Ղ => ‘GH’ ..etc
// Level - Hard


const armToEngUpper = {
    'Ա': 'A',
    'Բ': 'B',
    'Գ': 'G',
    'Դ': 'D',
    'Ե': 'E',
    'Զ': 'Z',
    'Է': 'E',
    'Ը': 'Y',
    'Թ': 'T',
    'Ժ': 'ZH',
    'Ի': 'I',
    'Լ': 'L',
    'Խ': 'KH',
    'Ծ': 'TS',
    'Կ': 'K',
    'Հ': 'H',
    'Ձ': 'DZ',
    'Ղ': 'GH',
    'Ճ': 'CH',
    'Մ': 'M',
    'Յ': 'Y',
    'Ն': 'N',
    'Շ': 'SH',
    'Ո': 'VO',
    'Չ': 'CH',
    'Պ': 'P',
    'Ջ': 'J',
    'Ռ': 'R',
    'Ս': 'S',
    'Վ': 'V',
    'Տ': 'T',
    'Ր': 'R',
    'Ց': 'TS',
    'Ւ': 'U',
    'Փ': 'P',
    'Ք': 'K',  
    'և': 'EV',
    'Օ': 'O',
    'Ֆ': 'F'
};

const armToEngLower = {}
Object.entries(armToEngUpper).forEach(([key, value]) => {
    armToEngLower[key.toLowerCase()] = value.toLowerCase();
});
const armToEng = {...armToEngLower, ...armToEngUpper};

const armToEngString = (strArm) => strArm.split('').map(char => armToEng[char] || char).join('');
console.log(armToEngString('Անձեռոցիկ'));
console.log(armToEngString('Ատամի  մածուկ'));
console.log(armToEngString('Զուգարանի թուղթ'));
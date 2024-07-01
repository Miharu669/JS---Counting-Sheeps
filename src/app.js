export function countSheeps(list) {
    const sheepCount = list.filter(Boolean).length;

    if (sheepCount > 0) {
        console.log(`There are ${sheepCount} sheep in total`);
    } else {
        console.log('UPS!!! Wolfs eaten Sheeps');
    }
}
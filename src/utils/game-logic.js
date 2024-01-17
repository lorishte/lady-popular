import { GAME_ASSETS } from "../data/game-assets";
let ITEMS = []
const gameRoundsNumber = 6

const getRandomItem = (obj) => {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
}

const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffleArray.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


// Get 3 random assets
const getThreeRandomItems = () => {
    if (ITEMS.length === 3) return
    const asset = getRandomItem(GAME_ASSETS)
    if (!ITEMS.includes(asset)) ITEMS.push(asset)
    getThreeRandomItems()
}

// Fill the tiles with these 3 random assets, multiplied by 3 and then shuffled
getThreeRandomItems()
ITEMS = shuffleArray([...ITEMS, ...ITEMS, ...ITEMS])

export {
    getRandomItem,
    shuffleArray,
    ITEMS
}
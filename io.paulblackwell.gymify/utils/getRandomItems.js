
/**
 * This function will be used to get random items from an array,
 * Will work on ether items that are objects (must have id's) or
 * items that are strings
 * @param {array} array - the array you want to get the items from
 * @param {init} number - how many random items you want from the array, set to 1 if not defined 
 * @return {array} - return a new array of random items from the original array
 */
const getRandomItems = (array, number = 1) => {

    /**
     * Check number is not greater than array length, if it is, 
     * set number to the length of the array. We need to do this 
     * because we don't want this function to get more than one of each item
     * later on. As we don't want our while loop to go on forever.
     */
    if (array.length < number) {
        number = array.length
    }

    let items = [];
    let counter = 0;

    while (counter < number) {

        // Get random item from array
        const randomItem = array[Math.floor(Math.random() * array.length)];

        /**
         * We need to check randomItem is not already in the items array before 
         * adding it, but before this we must check if randomItem is an object or a string
         * as we will need to handle it differently
         */
        if (typeof randomItem === 'string') {

            /**
             * If random item has not already been added to the items array,
             * push it to items array an increment counter by one
             */
            if (!items.includes(randomItem)) {
                items.push(randomItem);
                counter++;
            }
        } else { // randomItem is an object

            /**
            * If random item has not already been added to the items array,
            * push it to items array an increment counter by one
            */
            if (!items.some(item => item.id === randomItem.id)) {
                items.push(randomItem);
                counter++;
            }

        }
    }

    return items;
}

export default getRandomItems;

const removeFromArray = function(originalArray, ...args) {
    // console.log("Elements to remove are: " + args);
    for (let i = 0; i < args.length; i++) {
        // console.log("Attempting to remove " + elementToRemove);
        let elementIndex = originalArray.indexOf(args[i]);
        // console.log(elementToRemove + " is at index " + elementIndex);
        if (elementIndex >= 0) {
            originalArray.splice(elementIndex, 1);
            // console.log("Element has been removed. New array is: " + originalArray);
        } 
    }
    return originalArray;
}

module.exports = removeFromArray

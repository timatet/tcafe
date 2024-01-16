/**
 * Generation of an identifier of specified length 
 * containing characters of the user alphabet
 * @param {number} length Identifier length
 * @param {string} alphabet Alphabet
 */
function makeid(length, alphabet) {
    var result = '';

    var counter = 0;
    while (counter < length) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        counter += 1;
    }

    return result;
};

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
console.log(makeid(7, alphabet));
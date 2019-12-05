function replace_char(str) {
    var newStr = '';

    for (let i = 0; i < str.length; i++) {
        let character = str.charCodeAt(i);
        let nextCharacter = character + 1;
        if (character === 122) {
            nextCharacter = 97;
        } if (character === 90) {
            nextCharacter = 65;
        }
        newStr += String.fromCharCode(nextCharacter);
    }

    return newStr;
}

console.log(replace_char('Hassan'));
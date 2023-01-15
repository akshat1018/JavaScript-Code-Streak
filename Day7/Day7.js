function shiftedStr(str, shift) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // handle uppercase letters
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // handle lowercase letters
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}
console.log(shiftedStr("CodeStreak", 2)); 
console.log(shiftedStr("javascript", 5)); 
console.log(shiftedStr("VITBHOPAL", 3)); 

function generateUniquePassword(charset, passLength) {
    let text = "";
    let possible = charset; //possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < passLength; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

//Regex
function isAlphaNumericRegex(str) {
    if (/[^a-zA-Z0-9]/.test(str)) {
        return false;
    }
    return true;
}

//Faster than Regex - https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
function isAlphaNumericLoop(str) {
    let code, i, len;
    len = str.length;

    for (i = 0; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};


function genPass(charset, length, postfix, prefix) {
    if (charset && charset.length > 0 && !isAlphaNumericLoop(charset)) {
        console.log('Set should be Aplhanumnberic only');
        return false
    }else{
        charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    pass = generateUniquePassword(charset, length);
    return pass;
}

charterSet = 'ABCZAAAAIIIalan909';
l = '20'
post = 'CR'
pre = 'ED'

pass = genPass(charterSet, l, post, pre);

console.log('Your Password is ==>  ',pass);
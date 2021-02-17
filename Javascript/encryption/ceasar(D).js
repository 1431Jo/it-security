//decryption

var cipherText = "Nhnvb";
var displacement = -3;
var plainText;

var charCodelittleA = "a".charCodeAt(0);
var charCodelittleZ = "z".charCodeAt(0);
var charCodebigA = "A".charCodeAt(0);
var charCodebigZ = "Z".charCodeAt(0);

function characterTransform(charCode, startAsciiCode) {
    var indexImAlphabet = charCode - startAsciiCode;
    var transformedCode = indexImAlphabet - displacement;

    if (transformedCode < 0) { transformedCode += 26; }

    else if (transformedCode > 25) { transformedCode -= 26; }

    return startAsciiCode + transformedCode;
}

function textTransform(outputText) {
    var result = "";

    for (var i = 0; i < outputText.length; i++) {
            var charCode = outputText.charCodeAt(i);
        
            if (charCode >= charCodebigA && charCode <= charCodebigZ) {
                    charCode = characterTransform(charCode, charCodebigA);
            }
            else if (charCode >= charCodelittleA && charCode <= charCodelittleZ) {
                    charCode = characterTransform(charCode, charCodelittleA);
            }

            result += String.fromCharCode(charCode);
    }

    return result;
}

plainText = textTransform(cipherText);

displacement *= -1;
plainText = textTransform(cipherText);

console.log("Aus '" + cipherText + "' wird '" + plainText + "'.");
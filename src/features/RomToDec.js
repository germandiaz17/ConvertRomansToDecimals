const CharToInt = (caracter) => {

    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    } 
    return romans[caracter]
};

const RomToDecFunc = (romano) => {
    if(typeof romano != 'string') {
        return null
    }

    let numero = CharToInt(romano.charAt(0));
    let anterior;
    let actual;

    for(let i = 1; i < romano.length; i++) {
        actual = CharToInt(romano.charAt(i));
        anterior = CharToInt(romano.charAt(i - 1));

        if(actual <= anterior) {
            numero += actual;
        }else {
            numero = numero - anterior * 2 + actual;
        }
    }
    return numero
    return null
}

export default RomToDecFunc
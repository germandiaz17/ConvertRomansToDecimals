const CharToInt = (caracter) => {
    switch(caracter) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default : return -1;
    }
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
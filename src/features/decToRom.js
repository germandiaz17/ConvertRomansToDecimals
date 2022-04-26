const decToRomFunc = (number) => {
    let data = Number(number)
    if(Number.isInteger(data)) {

        const ROMANOS = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
        '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
        '','I','II','III','IV','V','VI','VII','VIII','IX'];
    
        let digitos = String(number).split('');
        let romano = '';
        let i = 3;
    
        while (i--) {
            romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
            console.log(romano)
        }
    
        return Array(+digitos.join('') + 1).join('M') + romano;

    }else{
        return null
    }
}

export default decToRomFunc
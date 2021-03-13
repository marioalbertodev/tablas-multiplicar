const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
    
        let salida = '';
        let consola = '';
    
        let fileName = `./salida/tabla_${base}.txt`;
    
        for (let i = 1; i <= hasta; i++) {
            consola += `${colors.green.underline(base)} x ${colors.blue.underline(i)} = ${colors.yellow.underline(base * i)}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(colors.rainbow("=================="))
            console.log(colors.italic(`    Tabla de ${base}`))
            console.log(colors.rainbow("=================="))
            console.log(consola)
        }

        colors.disable()

        fs.writeFileSync(fileName, salida)

        return fileName;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
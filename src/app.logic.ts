import fs from 'fs';
import { yarg } from './config/plugins/yargs.pluugin';

// console.log(yarg);


const { b:base, l:limit, s:displayTable } = yarg

const tablaHeader = `
=====================
    Tabla del ${base}
=====================\n
`;

const tabla = () => {
    
    let tablaContent = ''
    tablaContent += tablaHeader

    for (let i = 1; i <= limit; i++) {
        tablaContent += `${base} X ${i}   = ${base * i}\n`
    }
    if (displayTable) console.log(tablaContent);

    const outputPath = 'outputs'
    
    fs.mkdirSync(outputPath, { recursive: true })
    fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, tablaContent)
    console.log('File created!');

}
tabla()


// console.log(tabla(base));


import { yarg } from "./config/plugins/yargs.pluugin";
import { ServerApp } from "./presentation/server-app";


// console.log(process.argv);

// console.log(argv);

(async() => {

    await main()
    
})()

async function main() {

    const { b:base, l:limit, n:fileName, d:fileDestination, s:showTable } = yarg

    ServerApp.run({ base, limit, fileName, fileDestination, showTable })
    
}
import { ethers } from 'ethers';
import fs from 'fs';

const main = async () => {
    const provider = new ethers.providers.InfuraProvider("kovan");
    const addresses = JSON.parse((fs.readFileSync("./contracts/addresses/kovan.json")).toString());
    const dsChiefABI = JSON.parse((fs.readFileSync("./contracts/abis/DSChief.abi.json")).toString());
    const humanReadableABI = new ethers.utils.Interface(dsChiefABI).format(ethers.utils.FormatTypes.full);
    console.log(humanReadableABI);
    
    const dsChief = new ethers.Contract(addresses['MCD_ADM'], humanReadableABI, provider);

    const owner = await dsChief.owner()
    console.log(owner);
}

main();

import { ethers } from 'ethers';
import fs from 'fs';

const main = async () => {
    const provider = new ethers.providers.InfuraProvider("kovan");
    const addresses = JSON.parse((fs.readFileSync("../contracts/addresses/kovan.json")).toString());
    const dssProxyActionsABI = JSON.parse((fs.readFileSync("../contracts/abis/DssProxyActions.abi.json")).toString());
    const humanReadableABI = new ethers.utils.Interface(dssProxyActionsABI).format(ethers.utils.FormatTypes.full);
    console.log(humanReadableABI);
    
    const dssProxyActions = new ethers.Contract(addresses['MCD_ADM'], humanReadableABI, provider);

    // const owner = await dssProxyActions.owner()
    // console.log(owner);
}

main();

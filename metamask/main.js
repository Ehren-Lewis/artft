import { MetaMaskSDK } from "@metamask/sdk";


// This code connects to the MetaMaskSDK, but it is having some issues 
// Namely, legacty octal escape is not permitted in strict mode
 
const MMSDK = new MetaMaskSDK();

const ethereumVar = MMSDK.getProvider();

export default ethereumVar;
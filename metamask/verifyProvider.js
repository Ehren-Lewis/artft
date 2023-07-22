'use client'
import detectEthereumProvider from "@metamask/detect-provider";

const verifyProvider = async ()  => {

    const provider = await detectEthereumProvider();


    if (provider !== window.ethereum) {
        console.error("Do you have multiple wallets?")
        return false
    } else {
        return true;
    }

}

export default verifyProvider;
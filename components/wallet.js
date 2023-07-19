
import ethereum from "@/metamask/useclientwallet";

// const Wallet = () => {

//     // console.log(ethereum)

//     const walletConnect = async () => {

//         // const wallet = await ethereum.request({method: 'eth_requestAccounts', params: []});
    
//         // const wallet = "239847"
//         // wallet ? console.log(wallet) : console.log("couldnt connect")
    
//         // if (wallet) return wallet;
        
//       }
    
//       const wallet = walletConnect() || "349587";

//     return (
//         <button className="bg-green-900 h-8">{wallet}</button>
//     )
// }

// export default Wallet;



const Wallet = () => {

    const handleWalletConnect = async () => {

        const walletInformation = await "234789";

        if (walletInformation) return walletInformation;
    }

    const wallet = handleWalletConnect();


    return (
        <div>
         <button className="bg-green-900 h-8">{wallet}</button>
        </div>
    )
}

export default Wallet;
'use client'

import { useState } from "react";

import verifyProvider from "@/metamask/verifyProvider";

const EthereumButton = () => {


    const correctProvider = verifyProvider();
    const [currentAccount, setCurrentAccount] = useState()

    const connectAccount = async () => {

        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
         .catch( (err => {
                if (err == -32002) {
                    console.log("Please finish connecting your account")
                    return;
                }
         }))

         setCurrentAccount(accounts[0])

        // console.log('in here')
        // if (currentAccount) {

        //     console.log('in here current account is true')

        //     setCurrentAccount(accounts[0])
        //     console.log(currentAccount)
        //     return;

        // }
        // if (!correctProvider) {
        //     console.error("The provider is not the same, do you have multiple wallets?")
        //     return;
        //  }

        //  console.log("Provider verified: ", window.ethereum)

        //  const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        //  .catch( (err => {
        //         if (err == -32002) {
        //             console.log("Please finish connecting your account")
        //             return;
        //         }
        //  }))


    } 

    return (
    
    <div className="container mt-5">
            <div className="columns-6 mx-auto flex justify-center">
                
                { currentAccount != null ? 
                <button className="bg-slate-900">Logged In</button> : 
                <button className="py-2 px-4 bg-slate-900 rounded" onClick={connectAccount}>Access The Eth</button>
                 }

            </div>
    </div>

)}

export default EthereumButton;
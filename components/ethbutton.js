'use client'

import { useState } from "react";
import { useRouter,usePathname } from "next/navigation";

import verifyProvider from "@/metamask/verifyProvider";

const EthereumButton = () => {
    const router = useRouter();
    const path = usePathname();

    const handleUserRoute = path.split("/")[1]


    const correctProvider = verifyProvider();
    const [currentAccount, setCurrentAccount] = useState()


    const connectAccount = async (e) => {

        e.preventDefault();

        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
         .catch( (err => {
                if (err == -32002) {
                    console.log("Please finish connecting your account")
                    return;
                }
         }))

         setCurrentAccount(accounts[0])

         localStorage.setItem("account", currentAccount)

        handleUserRoute == "artists" ? router.push("/artists/home") : router.push("/users/home")

    } 

    return (
    
    <div className="container mt-5">
            <div className="columns-6 mx-auto flex justify-center">
                
                { currentAccount != null ? 
                <button className="bg-slate-900">Logged In</button> : 
                <button className="py-2 px-4 bg-slate-900 rounded" onClick={(e) => connectAccount(e)}>Access The Eth</button>
                 }

            </div>
    </div>

)}

export default EthereumButton;
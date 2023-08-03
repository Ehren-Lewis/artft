
'use client'
import EthereumButton from "@/components/ethbutton";
import pocketDB from "@/pocketbase/connection";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

//Both this and the Login  are fake. They are being implemented to test user flow


const ArtistSignup = () => {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    });

    const [verifypassword, setVerifyPassword] = useState("")

    const handleChange = (event, id) => {

        if (id =="verifypassword") {
            setVerifyPassword(event.target.value)
            return;
        }

        setFormValues({...formValues, [id]: event.target.value})
    }

    const formValidation = () => {
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (verifypassword !== formValues.password) {
            console.log("passwords dont match")
            return;
        }
        
        // await pocketDB.admins.authWithPassword('test@example.com', '1234567890');
        // const artist = await pocketDB.collection('fakeartistauth').create(formValues)
        // console.log(artist)


    }
    

    return (
        <div className="h-screen w-100 bg-black flex content-center">
            <div className="w-1/2 mx-auto self-center rounded">
                <form className="w-3/4 h-3/4 bg-slate-900/50 px-6 py-3  mx-auto rounded">
                    <div className="mb-4">
                        <label className="block" htmlFor="username">
                            Username:
                        </label>

                        <input id="username" className="shadow rounded w-full py-2 px-3 text-black" type="text"
                        onChange={ e => {
                            handleChange(e, "username")
                        }}></input>
                    </div>

                    <div className="mb-4">
                        <label className="block" htmlFor="username">
                            Password:
                        </label>

                        <input id="password" className="shadow rounded w-full py-2 px-3 text-black"  htmlFor="password" type="password"
                        onChange={ e => {
                            handleChange(e, "password")
                        }}></input>
                    </div>

                    <div className="mb-4">
                        <label className="block" htmlFor="username">
                            Verify Password:
                        </label>

                        <input id="verifypassword" className="shadow rounded w-full py-2 px-3 text-black"  htmlFor="verifypassword" type="password"
                        onChange={ e => {
                            handleChange(e, "verifypassword")
                        }}></input>
                    </div>

                    <div className="md:flex md:items-center mb-2">
                        <button className="shadow bg-coral focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-auto" type="button"
                        onClick={ e => handleSubmit(e)}>
                            Submit
                        </button>   
                    </div>

                    <div className="mb-4">
                        <p className="text-black mx-auto text-center text-white">Or</p>
                    </div>

                    <div className="mx-auto">
                        <EthereumButton />
                    </div>

                    <div className="">

                        <p className="inline-block w-1/3">Already have an account?</p>
                        <Link href="./login" className="inline-block w-1/3 underline">Login</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ArtistSignup;
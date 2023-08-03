'use client';

import { useState } from "react";
import pocketDB from "@/pocketbase/connection";

const Sell = () => {
    
    const formData = new FormData();
    // This is the base form for how artists will be contributing their artwork for selling. This will be the uplink to the db
    //useState to keep track of all values in the form before submission
    const [formValues, setFormValues] = useState({
        artistName: "",
        price: 0,
        imageRef: ""
    })

    const handleChange = (event, id) => {

        if (event.target.id == "artImage") {
            setFormValues({...formValues, imageRef: event.target.files[0]});
            return;
        }
        setFormValues({...formValues, [id]: event.target.value})

    }

    const formValidation = () => {

        console.log(formValues)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        formValidation();
    
        formData.append("artist", formValues.artistName);
        formData.append("price", formValues.price);
        formData.append("imageref", formValues.imageRef)
        

        await pocketDB.admins.authWithPassword('test@example.com', '1234567890');
        const createdRecord = await pocketDB.collection('test').create(formData);
    }
    

    return (
        
        <div className="w-full max-w-xs mx-auto">

            <h1>This is the Sell page</h1>

            <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 flex self-center" htmlFor="artistName">
                            Artist Name:
                        </label>
                    </div>
                
                    <div className="md:w-2/3">
                        <input className="shadow appearance-none border text-black rounded w-full py-2 px-3" id="artistName" type="text"
                        onChange={ e => {
                            handleChange(e, "artistName")
                        }}></input>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 flex self-center" htmlFor="price">
                            Price:
                        </label>
                    </div>
                
                    <div className="md:w-1/3">
                        <input className="shadow appearance-none border text-black rounded w-full py-2 px-3" id="price" type="number"
                        onChange={ e => {
                            handleChange(e, "price")
                        }}></input>
                    </div>
                    <div className="md:w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2 flex self-center justify-center" htmlFor="price">
                            Eth
                        </label>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <input className="shadow appearance-none border text-black rounded w-full py-2 px-3" id="artImage" type="file"
                    onInput={ e => {
                        handleChange(e, "imageRef")
                    }}
                    ></input>
                </div>

                <div className="md:flex md:items-center mb-2">
                    <button className="shadow bg-coral focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-auto" type="button"
                    onClick={ e => handleSubmit(e)}>
                        Submit
                    </button>   
                </div>
                
            </form>
        </div>
    )

}

export default Sell;
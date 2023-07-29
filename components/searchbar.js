'use client'

import { useSearchParams} from 'next/navigation';
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = (props) => {

    const [search, setSearch] = useState("")
    const thisSearch = useSearchParams().get('search');
    const router = useRouter()

    const handleChange = e => {
        setSearch(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(search)
        router.push({
            pathname: "/search/[item]",
            query: {item: search}
        })

    }

    return (
        <form className={props.formclass}
            onSubmit={ e => {
            handleSubmit(e);
        }}>
            <input type="search"  id={props.inputid} className={props.inputclass} 
            onChange={ (e) => {
                handleChange(e);
            }}

            ></input>
        </form>

    )
}

export default SearchBar
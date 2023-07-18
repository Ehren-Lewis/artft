'use client'


//  
import { useEffect } from 'react';

const [ethereum, setEthereum] = React.useState(true)
// const ethereum = window.ethereum;

useEffect( () => {
    setEthereum(window.ethereum)
}, [])
export default ethereum;
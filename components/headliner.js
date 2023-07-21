import Image from "next/image";

const Headliner = () => {

    const backgroundStyle = {
        backgroundImage: "url('/images/aaabstract.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "75vh",
        width: "100%",

    }

    return (

        <div className="mx-auto px-2" style={backgroundStyle}>
            <div className="container mx-auto flex place-self-center ">
            <p className="text-5xl font-medium" style={{letterSpacing: ".3rem", height: "inherit"}}>Sovrn</p>
            </div>
        </div>
    )

}

export default Headliner;
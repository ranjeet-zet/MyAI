'use client'
import Link from "next/link"
import { useState } from "react"
const Navbar = () => {
    const [logedIn,setLogedIn]=useState(true);
    const data = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "TryMyGPT↗", path: "/chat" }
    ]
    return (
        <div className="nav-div">
            <div className="text-xl">
                MyAI
            </div>
            <div>
                {data.map((ele, index) =>
                    <Link key={index} href={ele.path}>
                        {ele.name}
                    </Link>)}
                {logedIn?(
                    <Link className="border-2 px-2 rounded" onClick={
                        ()=>{setLogedIn(ele=>!ele)}
                    } href='/' key='logout'>Log out↗</Link>
                ):(
                    <Link className="border-2 px-2 rounded" onClick={
                        ()=>{setLogedIn(ele=>!ele)}
                    } href='/' key='login'>Log in↗</Link>
                )}
            </div>
        </div>
    )
}
export default Navbar
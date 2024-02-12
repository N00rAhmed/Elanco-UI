import Link from "next/link"
import Image from "next/image"
import "./navbar.css"
export default function Nav(){

    return (
        <div  className="container">
            <div className="link-container" id="navbar">
                <Image className="elanco-logo" src="/images/cropfblogo.jpg" alt="Logo" width={150} height={50}/>
                <Link className="redirect" href='../'><p>Home</p></Link>
                <Link className="redirect" href='/login'><p>Login</p></Link>
                <Link className="redirect" href='/register'><p>Sign Up</p></Link>
                <Link className="redirect" href='/about'><p>About</p></Link>
            </div>
        </div>
    )
}
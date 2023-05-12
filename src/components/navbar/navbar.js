import "./navbar.css"

export const Navbar = ()=>{
    return(
        <div className="navcontains" >
        <div>Admin Panel</div>
        <div >
        <ul className="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Setting</li>
            <li>Profile</li>
            <li>Logout</li>
           
        </ul>
        </div>
        </div>
    )
}


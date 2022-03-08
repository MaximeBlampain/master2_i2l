import { Children } from "react"
import { NavLink } from "react-router-dom";

export default function Navbar(){
    const links = [
        {to: "/", label: "Home" },
        {to: "/page1", label: "Page1" },
        {to: "/page2", label: "Page2" },
        {to: "/page3", label: "Page3" },
    ]

    return (
        <nav>
            {links.map(link => (
                <NavLink key={link.label} to={link.to} className={isActive => isActive ? "active" : ""}>
                    {link.label}
                </NavLink>
            ))}
        </nav>
    )
}
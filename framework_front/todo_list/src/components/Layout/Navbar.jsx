import {NavLink} from "react-router-dom";
import {Children} from "react";

// Style
import {
    Flex,
    Heading,
    Box,
} from "rebass"
import "../../styles/navbar.css"

export default function Navbar(){
    const links = [
        {to: "/", label: "Home"},
        {to: "/tasks", label: "Liste des tâches"},
        {to: "/newTask", label: "Nouvelle tâche"},
    ]
    return (
        <Flex
            bg="#5ed0a0"
            px={3}
            alignItems="center"
        >
            <Heading py={3}>TodoList</Heading>
            <Box mx="auto" />
            {Children.toArray(links.map(link =>
                <NavLink to={link.to} className="navlink">
                    {link.label}
                </NavLink>
            ))}
        </Flex>
    )
}
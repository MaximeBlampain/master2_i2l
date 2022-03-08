import {Fragment, useEffect, useState} from "react";
import {getAllCountries} from "./CountryList.requests";


export default function CountryList({filter}) {
    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        async function getData() {
            const countries = await getAllCountries()
            const mappedCountries = countries.map(country => {
                return {
                    name: country.name.official,
                    flag: country.flag
                }
            })
            setCountryList(mappedCountries)
        }
        getData()
    },[])

    return (
        <Fragment>
            <h1>CountryList</h1>
            <ul>
                {countryList
                    .filter(country => filter === "" ? true : country.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(country => {
                    return (
                        <li key={`${country.name}`}>
                            <span id="countryFlag"> {country.flag} </span>
                            <span id="countryName"> {country.name} </span>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}
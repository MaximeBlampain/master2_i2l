import {Fragment} from "react";

export default function Searchbar({setFilter}) {

    return (
        <Fragment>
            <input type="text" onChange={(event) => setFilter(event?.target?.value)} />
        </Fragment>

    )
}
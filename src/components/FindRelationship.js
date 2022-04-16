import React, { useState } from "react";
import RelationShipDropdown from "./RelationShipDropdown";

const FindRelationship = ({ users, relationships }) => {

    const [displayRelationShip, setDisplayRelationShip] = useState([])


    const handleFindRelationShip = (formState) => {
        const firstPersonFriends = relationships[formState.person1];
        const secondPersonFriends = relationships[formState.person2];
        const filteredArray = firstPersonFriends.filter(value => secondPersonFriends.includes(value));
        console.log("Common Frnz =>", filteredArray)
        setDisplayRelationShip([...displayRelationShip, [formState.person1, filteredArray.join(" > "), formState.person2]])
    }

    return (
        <>
            <h1>Find Relationships</h1>
            <RelationShipDropdown users={users} handleOnClick={handleFindRelationShip} buttonName={"Find"} />
            {displayRelationShip && displayRelationShip.map((connections) => {
                return connections.join(">")
            })}
        </>
    )
}
export default FindRelationship;
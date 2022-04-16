import React, { useState, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddUsers from "../components/AddUsers";
import DisplayUsers from "../components/DisplayUsers";
import NavbarComponent from "../components/NavbarComponent";
import FindRelationship from "../components/FindRelationship"
import RelationShipDropdown from "../components/RelationShipDropdown";


const MainPage = () => {

  const [users, setUsers] = useState([
    "Sammer",
    "Bhaskar",
    "Aayushi"
  ])
  const [relationships, setRelationships] = useState({
    "Sammer": ["Aayushi"],
    "Bhaskar": ["Aayushi"],
  })


  const handleAddRelationShip = (formState) => {
    const copyRelationships = { ...relationships };
    if (copyRelationships.hasOwnProperty(formState.person1)) {
      if (!copyRelationships[formState.person1].includes(formState.person2)) {
        copyRelationships[formState.person1] = [...copyRelationships[formState.person1], formState.person2]
      }
    } else {
      copyRelationships[formState.person1] = [formState.person2];
    }
    setRelationships(copyRelationships)
  }

  console.log("Relationships =>", relationships)

  return (
    <Fragment>
      <NavbarComponent />
      <Row>
        <AddUsers users={users} setUsers={setUsers} />
      </Row>
      <Row>
        <DisplayUsers users={users} />
      </Row>
      <Row>
        <h1>Add Relationship</h1>
        <RelationShipDropdown users={users} handleOnClick={handleAddRelationShip} buttonName={"Save"} />
      </Row>
      <Row>
        <FindRelationship users={users} relationships={relationships} />
      </Row>
    </Fragment>
  );
};
export default MainPage;

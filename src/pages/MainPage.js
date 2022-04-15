import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Addusers from "../components/Addusers";
import NavbarComponent from "../components/NavbarComponent";
import Displayusers from "../components/Displayusers";
import AddRelationship from "../components/AddRelationship";


const Mainpage = () => {

    const [users,setUsers]=useState([])

  return (
    <>
      <div>
        <NavbarComponent />
      </div>

      <Row>

        <Col xs={4}>
          <Addusers users={users} setUsers={setUsers}/>

          <div>
            <Row>
              <Displayusers users={users}/>
            </Row>
          </div>
        </Col>

        <Col xs={4}>
          <AddRelationship users={users} />
        </Col>

        <Col xs={4}></Col>

      </Row>
    </>
  );
};
export default Mainpage;

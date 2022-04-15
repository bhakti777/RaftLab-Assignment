import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Displayusers = ({users}) => {
  return (
    <>
    
    <div className="userlistmargin">
      <Card>
        <Card.Header>Users List:</Card.Header>
        <ListGroup variant="flush">
        {users.map((user,index)=>{
            return(
                <ListGroup.Item key={index}>{user}</ListGroup.Item>
            )
        })}

        </ListGroup>
      </Card>
      </div>
    </>
  );
};
export default Displayusers;

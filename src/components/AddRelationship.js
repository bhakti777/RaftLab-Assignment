import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const AddRelationship = ({ users }) => {

const [dropdownlist,setDropDownList]=useState(users);
const [formState,setFormState]=useState({person1:"",person2:""})
const [secondList,setSecondList]=useState([])
const [relationships,setRelationships]=useState([])

useEffect(()=>{
    setDropDownList(users)
   },[users])

const handleOnChange=(event)=>{
    const dropdDownSelection = {...formState, [event.target.name]: event.target.value}
    setFormState(dropdDownSelection)
    console.log("name=>",event.target.name,event.target.value)

    const remainingData=dropdownlist.filter((user)=>{
        return user!=dropdDownSelection.person1  
    })

    console.log("remainingData=>",remainingData)
    setSecondList(remainingData)

}

const handleOnSave=()=>{
    setRelationships([...relationships,formState])
}
console.log("relationships",relationships)

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <Row>
          <Col xs={6}>
            <Form.Select aria-label="Default select example" name="person1"value={formState.person1} onChange={handleOnChange}>
              <option>Open this select menu</option>

              {dropdownlist.map((user,index) => {
                return <option value={user} >{user}</option>;
              })}
            </Form.Select>
          </Col>

          <Col xs={6}>
            <Form.Select aria-label="Default select example" name="person2" value={formState.person2} onChange={handleOnChange}>
              <option>Open this select menu</option>

              {secondList.map((user, index) => {
                return <option value={user}>{user}</option>;
              })}
            </Form.Select>
          </Col>
        </Row>
        <br/>
        <button onClick={handleOnSave}>Save</button>
      </div>
    </>
  );
};
export default AddRelationship;

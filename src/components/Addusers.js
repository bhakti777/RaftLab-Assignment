import React, { useState } from "react";
// import Row from "react-bootstrap/Row"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 


const Addusers = ({users,setUsers}) => {
    const [inputState,setInputState]=useState("bhakti")

    const handleOnChange=(event)=>{
        setInputState(event.target.value)
        // console.log("data=>",event.target.value)
    }
    console.log(inputState)

    const handleOnAdd=()=>{
        setUsers([...users,inputState])
        setInputState("")
    }
    console.log("users=>",users)
    
  return (
    <>
    <div className="usersetmargin">
     <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter username"
          value={inputState}
          onChange={handleOnChange}
        />
        <Button variant="dark" id="button-addon2" onClick={handleOnAdd}>
          Add Users
        </Button>
      </InputGroup>
      </div>
    </>
  );
};
export default Addusers;

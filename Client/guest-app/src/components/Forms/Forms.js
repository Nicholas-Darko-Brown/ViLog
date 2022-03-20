import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Input,
  Select,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import Axios from 'axios'

const Forms = () => {
  const [employee, setEmployee] = useState([])


  const url = "http://localhost:3000/"
  const [data, setData] = useState({
    name: "",
    company: "",
    tel: "",
    email: "",
    position: "",
    host: ""
  })
  console.log(data)
  

  const handleChange = e => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  const handleSubmit = e => {
    console.log("submitted")
    e.preventDefault()
    console.log(data)
    
    Axios.post(url,data)
  }

  const fetchEmployees = async () => {
    const { data } = await Axios.get("/employeeName");
    setEmployee(data);
  }
  
  useEffect(() => {
    fetchEmployees()
  }, []);
  
 
  return (
    <Box display="flex" justifyContent='center' height='100%'>
      <FormControl
        
        isRequired
        w="30%"
        p={5}
        m={5}
        display="flex"
        flexDirection="column"
        justifyContent='center'
        borderRadius="1rem"
        boxShadow="2xl"
        bg="orange.120"
      >
        <Text
          fontSize="1.2em"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="2px"
          textAlign="center"
          mb={10}
        >
          Tell us about yourself
        </Text>

        <Input onChange={(e) => handleChange(e)} value={data.name} type="text" id="name" placeholder="Name" />
        <Input onChange={(e) => handleChange(e)} value={data.company} type="text" id="company" mt={5} placeholder="Company" />
        <Input onChange={(e) => handleChange(e)} value={data.tel} type="tel" id="tel" mt={5} placeholder="Phone" />
        <Input onChange={(e) => handleChange(e)} value={data.email} type="email" id="email" mt={5} placeholder="Email" />

        <Select onChange={(e) => handleChange(e)} value={data.position} isRequired id="position" placeholder="Select your position" mt={5} >
          <option value="visitor">Visitor</option>
          <option value="contractor">Contractor</option>
        </Select>
        <Select onChange={(e) => handleChange(e)} value={data.host} isRequired id="host" placeholder="Who are you visiting?" mt={5} >
          { employee? employee.map((name) => {
            return <option value={name.Full_Name}>{name.Full_Name}</option>
          }) : <option value="yvonne smith">Yvonne Smith</option> }
          
          {/*  */}
        </Select>

        <Button onClick={(e) => handleSubmit(e)} type="submit" colorScheme="orange" variant="solid" mt={9}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Forms;

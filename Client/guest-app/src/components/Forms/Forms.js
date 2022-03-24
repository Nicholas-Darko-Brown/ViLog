import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Input,
  Select,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import Axios from 'axios';
import './Forms.css'

const Forms = () => {
  const [employee, setEmployee] = useState([]);

  const fetchEmployeesData = async () => {
    const { data } = await Axios.get('/adminPage/employeeList');
    setEmployee(data);
    data.map(employee => {
      return `${employee.Full_Name} || ${employee.Email}`
    })
  };

  useEffect(() => {
    fetchEmployeesData();
  }, []);

  const timestamp = new Date(Date.now()).toISOString();
  console.log(timestamp)

  const url = 'http://localhost:3000/';
  const [data, setData] = useState({
    name: '',
    company: '',
    tel: '',
    email: '',
    position: '',
    status: ''
    // timestamp: ''
  });
  console.log(data);


  const handleChange = e => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleSubmit = e => {
    console.log('submitted');
    e.preventDefault();
    console.log(data);
    const newData = Object.assign(data, {timestamp: timestamp}, {status: 'checked in'}, {fetchEmployeesData: fetchEmployeesData})
    console.log(newData)

    Axios.post(url, newData);
  };


  return (
    <Box display="flex" justifyContent="center" height="100%">
      <FormControl
        isRequired
        w="30%"
        p={5}
        m={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
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

        <Input
          onChange={e => handleChange(e)}
          value={data.name}
          type="text"
          id="name"
          placeholder="Name"
        />
        <Input
          onChange={e => handleChange(e)}
          value={data.company}
          type="text"
          id="company"
          mt={2}
          placeholder="Company"
        />
        <Input
          onChange={e => handleChange(e)}
          value={data.tel}
          type="tel"
          id="tel"
          mt={2}
          placeholder="Phone"
        />
        <Input
          onChange={e => handleChange(e)}
          value={data.email}
          type="email"
          id="email"
          mt={2}
          placeholder="Email"
        />

        <Select
          onChange={e => handleChange(e)}
          value={data.position}
          isRequired
          id="position"
          placeholder="Select your position"
          mt={2}
        >
          <option value="visitor">Visitor</option>
          <option value="contractor">Contractor</option>
        </Select>
        <Select
          onChange={e => handleChange(e)}
          value={data.host}
          isRequired
          id="host"
          placeholder="Who are you visiting?"
          mt={2}
        >
          {employee ? (
            employee.map(name => {
              return <option value={name.Full_Name}>{name.Full_Name}</option>;
            })
          ) : (
            <option value="yvonne smith">Yvonne Smith</option>
          )}

          {/*  */}
        </Select>

        {/* <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
          showYearDropdown
          showTimeSelect
          placeholderText="Please, select your check in time"
          className='date_picker'
          id='timestamp'
          // value={data.timestamp}
        /> */}

        <Button
          onClick={e => handleSubmit(e)}
          type="submit"
          colorScheme="orange"
          variant="solid"
          mt={9}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Forms;

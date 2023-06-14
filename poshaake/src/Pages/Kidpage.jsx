import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  SimpleGrid,
  Box,
  Center,
  VStack,
  Img,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Mens() {
  const [data, SetData] = useState([]);
  const [order, SetOrder] = useState("");
  const [name, setName] = useState(null);
  const price = "price";

  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");

  const getdata = (order, name) => {
    return axios
      .get(
        `https://shahid-mock.onrender.com/kid?_name=${name}&_sort=${price}&_order=${order}`
      )
      .then((res) => {
        SetData(res.data);
        setSearchFilter(res.data);
      });
  };
  useEffect(() => {
    const results = searchFilter.filter((resp) =>
      resp.name.toLowerCase().includes(result)
    );
    SetData(results);
  }, [result]);
  const onChange = (evt) => {
    setResult(evt.target.value);
  };

  useEffect(() => {
    getdata(order, name);
  }, [order, name]);
  // const handledlt =(id)=>{

  // return axios({
  //   method:"delete",
  //   url:`http://localhost:8080/men${id}`

  //  })
  // };

  return (
    <div>
      <Navbar />
      {/* <h1>OSAMA</h1>
      <h1>OSAMA</h1>
      <h1>OSAMA</h1>
      <h1>OSAMA</h1>
      <h1>OSAMA</h1> */}
      <div style={{ marginTop: "100px" }} className="sortingButtons">
        <h1>New Arrival's</h1>
        <div className="bk">
          <Button
            colorScheme={"blue"}
            className="sortByCostAsc"
            onClick={() => SetOrder("asc")}
          >
            {" "}
            Sort by Asc{" "}
          </Button>
          <Button
            colorScheme={"teal"}
            className="sortByCostDesc"
            m={5}
            onClick={() => SetOrder("desc")}
          >
            {" "}
            Sort by Desc{" "}
          </Button>
        </div>
        <div>
          <input
            onChange={onChange}
            type="text"
            placeholder="Search here......"
          ></input>
        </div>
      </div>

      <Select
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={{ color: "black", background: "gray", marginLeft: "10px" }}
        width="20%"
        placeholder="select option"
      >
        <option style={{ color: "green" }} value="name">
          Name
        </option>
        <option style={{ color: "green" }} value="price">
          Price
        </option>
      </Select>

      <SimpleGrid columns={3} p={10} gap={5} className="main_container">
        {data.map((item) => (
          <Box
            className="mens"
            key={item.id}
            borderRadius={"10px"}
            boxShadow={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          >
            <Center>
              <Img
                borderRadius={"10px"}
                height={"300px"}
                width={"300px"}
                src={item.image}
              />
            </Center>

            <VStack spacing={2} p={2}>
              <Button style={{ backgroundColor: "black", color: "white" }}>
                Quick Shop
              </Button>
              <h5
                style={{ color: "teal" }}
                className="name"
                fontSize={"20px"}
                fontWeight="bold"
              >
                {item.name}
              </h5>
              <h5
                h={"150px"}
                lineHeight="1.5em"
                height={"4em"}
                overflow={"hidden"}
                className="description"
              >
                {item.description}
              </h5>
              <Text className="cost" fontWeight={"bold"}>
                {item.price}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      <Footer />
    </div>
  );
}

export default Mens;

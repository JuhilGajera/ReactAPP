import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import "./Advertisement.css";
import Loader from "./Loader";

function Advertisement() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetData = async () => {
    setIsLoading(true);
    await axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setIsLoading(false);
        console.log("first", res.data.data);
        setData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Nike</Navbar.Brand>
                <Nav className="me-auto"></Nav>
                <div className="navbtn">
                  <Button onClick={() => handleGetData()}>Get Data</Button>
                </div>
              </Container>
            </Navbar>
          </Container>
        </Navbar>
        &nbsp;
        {isLoading === true ? <Loader /> : ""}
        {data?.map((ele, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index} className="card">
              <Card.Img variant="top" src={ele.avatar} />
              <Card.Body>
                <Card.Title>{`${ele.first_name} ${ele.last_name}`}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Advertisement;

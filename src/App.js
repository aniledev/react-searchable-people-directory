import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import styled from "styled-components";
import "./styles.css";
import { fetchList } from "../src/services";
import { phone } from "phone";

const StyledMain = styled(MainContent)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 6rem;
  margin-top: 6rem;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 10rem auto 0 auto;
  font-size: 2rem;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const App = () => {
  // Hooks state management
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  // Use effect to fetch the list of users from the api
  useEffect(() => {
    let mounted = true;
    fetchList().then((data) => {
      if (mounted) {
        setUsers(data.results);
      }
    });
    // Clean up side effects
    return () => (mounted = false);
  }, []);

  // on change of the field we need to update the state
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const updateUserField = (id, field, value) => {
    const foundUser = users.filter(({ login: { uuid } }) => uuid === id)[0];
    const isLocationField =
      field === "city" || field === "state" || field === "country";

    if (isLocationField) {
      foundUser["location"][field] = value;
    }

    if (field === "name") {
      const [updatedFirst, ...rest] = value.split(" ");
      foundUser[field]["first"] = updatedFirst;
      foundUser[field]["last"] = rest.join(" ");
    }

    if (field === "cell") {
      const formattedNum = phone(value, { country: foundUser.nat }).phoneNumber;
      foundUser[field] = formattedNum ? formattedNum : value;
    }

    // A package could be used here to validate the email and to provide a type of validation message
    // but for the sake of thi project, I kept it simple
    if (field === "email") {
      foundUser[field] = value;
    }

    const updatedUsers = users.map((user) => {
      if (user.login.uuid === id) {
        return foundUser;
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <StyledInput
        type="text"
        id="search"
        name="search"
        value={input}
        onChange={(event) => handleInput(event)}
      />
      <StyledMain
        users={users}
        input={input}
        updateUserField={updateUserField}
      />
    </div>
  );
};

export default App;

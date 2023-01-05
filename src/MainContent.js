import React from "react";
import Card from "./Card";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  padding: 0.5rem 0;
  width: 20%;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5%;
`;

const MainContent = ({ className, users, input, updateUserField }) => {
  // This could be replaced by doing some fancy object nesting checks, but just for simplicity and sake of time, this will do for now
  const byConditions = (value) => {
    const lowerCase = (value) => {
      return value.toLowerCase();
    };

    const matches = (value) => {
      const formattedInput = input.toLowerCase();
      return value.includes(formattedInput);
    };

    const matchesFirst = matches(lowerCase(value.name?.first));
    const matchesLast = matches(lowerCase(value.name?.last));
    const matchesCity = matches(lowerCase(value.location?.city));
    const matchesCountry = matches(lowerCase(value.location?.country));
    const matchesState = matches(lowerCase(value.location?.state));
    const matchesEmail = matches(lowerCase(value.email));
    const matchesNum = matches(
      lowerCase(value.cell.replace(/[^a-z0-9]/gi, ""))
    );

    return (
      matchesFirst ||
      matchesLast ||
      matchesCity ||
      matchesCountry ||
      matchesState ||
      matchesEmail ||
      matchesNum
    );
  };

  // Filter the list of users based on the conditions and user input
  const filterUsers = () => {
    return input ? users.filter(byConditions) : users;
  };

  // Generate the list of cards
  const CardList = () => {
    return filterUsers().map((user) => (
      <StyledCard
        key={uuidv4()}
        user={user}
        updateUserField={updateUserField}
      />
    ));
  };

  return (
    <div className={className}>
      <CardList />
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array,
  input: PropTypes.string,
  updateUserField: PropTypes.func
};

export default MainContent;

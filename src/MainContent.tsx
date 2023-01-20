import React from "react";
import Card from "./Card";
import { User, MainComponentProps } from './types';
import styled from "styled-components";
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

const MainContent: React.FC<MainComponentProps> = ({ className, users, input, updateUserField }) => {
  // This could be replaced by doing some fancy object nesting checks, but just for simplicity and sake of time, this will do for now
  const byConditions = (obj: User) => {
    const lowerCase = (string: string): string => {
      return string.toLowerCase();
    };

    const matches = (string: string): boolean => {
      const formattedInput = input.toLowerCase();
      return string.includes(formattedInput);
    };

    const matchesFirst = matches(lowerCase(obj.name?.first));
    const matchesLast = matches(lowerCase(obj.name?.last));
    const matchesCity = matches(lowerCase(obj.location?.city));
    const matchesCountry = matches(lowerCase(obj.location?.country));
    const matchesState = matches(lowerCase(obj.location?.state));
    const matchesEmail = matches(lowerCase(obj.email));
    const matchesNum = matches(
      lowerCase(obj.cell.replace(/[^a-z0-9]/gi, ""))
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
    return filterUsers().map((user: User) => (
      <StyledCard
        className="styled-card"
        key={uuidv4()}
        user={user}
        updateUserField={updateUserField}
      />
    ));
  };

  return (
    <div className={className}>
      {CardList()}
    </div>
  );
};

export default MainContent;

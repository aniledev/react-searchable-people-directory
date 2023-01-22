import React from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import Card from './Card';
import {User, MainComponentProps} from './types';

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

const MainContent: React.FC<MainComponentProps> = ({className, users, input, updateUserField}) => {
	// This could be replaced by doing some fancy object nesting checks, but just for simplicity and sake of time, this will do for now
	const byConditions = (object: User) => {
		const lowerCase = (string: string): string => string.toLowerCase();

		const matches = (string: string): boolean => {
			const formattedInput = input.toLowerCase();
			return string.includes(formattedInput);
		};

		const matchesFirst = matches(lowerCase(object.name?.first));
		const matchesLast = matches(lowerCase(object.name?.last));
		const matchesCity = matches(lowerCase(object.location?.city));
		const matchesCountry = matches(lowerCase(object.location?.country));
		const matchesState = matches(lowerCase(object.location?.state));
		const matchesEmail = matches(lowerCase(object.email));
		const matchesNumber = matches(
			lowerCase(object.cell.replace(/[^a-z\d]/gi, '')),
		);

		return (
			matchesFirst
      || matchesLast
      || matchesCity
      || matchesCountry
      || matchesState
      || matchesEmail
      || matchesNumber
		);
	};

	// Filter the list of users based on the conditions and user input
	const filterUsers = () => input ? users.filter(byConditions) : users;

	// Generate the list of cards
	const CardList = () => filterUsers().map((user: User) => (
		<StyledCard
			className='styled-card'
			key={uuidv4()}
			user={user}
			updateUserField={updateUserField}
		/>
	));

	return (
		<div className={className}>
			{CardList()}
		</div>
	);
};

export default MainContent;

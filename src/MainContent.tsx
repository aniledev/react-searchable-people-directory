import React from 'react'; // eslint-disable-line unicorn/filename-case
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import Card from './Card'; // eslint-disable-line import/extensions
import type {User, MainComponentProperties} from './types';

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

const useFilterCallback = (array: User[], callback: (object: User) => boolean) => array.filter(element => callback(element));
const lowerCase = (string: string): string => string.toLowerCase();
const matches = (string: string, input: string): boolean => {
	const formattedInput = input.toLowerCase();
	return string.includes(formattedInput);
};

const MainContent: React.FC<MainComponentProperties> = ({className, users, input, updateUserField}) => {
	// This could be replaced by doing some fancy object nesting checks, but just for simplicity and sake of time, this will do for now
	const byConditions = (object: User) => {
		const matchesFirst = matches(lowerCase(object.name?.first), input);
		const matchesLast = matches(lowerCase(object.name?.last), input);
		const matchesCity = matches(lowerCase(object.location?.city), input);
		const matchesCountry = matches(lowerCase(object.location?.country), input);
		const matchesState = matches(lowerCase(object.location?.state), input);
		const matchesEmail = matches(lowerCase(object.email), input);
		const matchesNumber = matches(
			lowerCase(object.cell.replace(/[^a-z\d]/gi, '')), input,
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
	const filterUsers = () => input ? useFilterCallback(users, byConditions) : users;

	// Generate the list of cards
	const cardList = () => filterUsers().map((user: User) => (
		<StyledCard
			className='styled-card'
			key={uuidv4()}
			user={user}
			updateUserField={updateUserField}
		/>
	));

	return (
		<div className={className}>
			{cardList()}
		</div>
	);
};

export default MainContent;

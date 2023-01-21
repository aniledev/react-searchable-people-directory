import React from 'react';
import styled from 'styled-components';
import {phone} from 'phone';
import EditableText from './Text';
import {type CardComponentProps} from './types';

const Text = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem 0.75rem;
  text-align: center;
`;

const BoldText = styled(Text)`
  font-weight: 700;
  font-size: 1.25rem;
`;

const GrayText = styled(Text)`
  color: gray;
`;

const StyledImage = styled.img`
  margin: 0.5rem 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Card: React.FC<CardComponentProps> = ({
	key,
	className,
	user: {
		cell,
		location: {city, state, country},
		name: {first, last},
		email,
		picture: {large},
		nat,
		login: {uuid},
	},
	updateUserField,
}) => {
	const renderLocation = () => country === 'United States' ? (
		<>
			<EditableText
				id={uuid}
				field='city'
				key={key}
				editClassName='form-control'
				value={city}
				updateUserField={updateUserField}
			/>
			{', '}
			<EditableText
				id={uuid}
				field='state'
				key={key}
				editClassName='form-control'
				value={state}
				updateUserField={updateUserField}
			/>
		</>
	) : (
		<>
			<EditableText
				id={uuid}
				field='city'
				key={key}
				editClassName='form-control'
				value={city}
				updateUserField={updateUserField}
			/>
			{', '}
			<EditableText
				id={uuid}
				field='country'
				key={key}
				editClassName='form-control'
				value={country}
				updateUserField={updateUserField}
			/>
		</>
	);

	const renderPhone = () => {
		const countryCode = nat ? nat : undefined;
		const formattedNumber = phone(cell, {country: countryCode}).phoneNumber;
		return formattedNumber ? formattedNumber : cell;
	};

	const nameString = first && last ? `${first} ${last}` : '';
	const emailString = email ? email : '';

	return (
		<div className={className}>
			<StyledImage src={large} alt='Girl in a jacket' />
			<BoldText>
				<EditableText
					id={uuid}
					key={key}
					editClassName='form-control'
					value={nameString}
					field='name'
					updateUserField={updateUserField}
				/>
			</BoldText>
			<GrayText>{renderLocation()}</GrayText>
			<GrayText>
				<EditableText
					id={uuid}
					key={key}
					editClassName='form-control'
					value={renderPhone()}
					field='cell'
					updateUserField={updateUserField}
				/>
			</GrayText>
			<GrayText>
				<EditableText
					id={uuid}
					key={key}
					editClassName='form-control'
					value={emailString}
					field='email'
					updateUserField={updateUserField}
				/>
			</GrayText>
		</div>
	);
};

export default Card;

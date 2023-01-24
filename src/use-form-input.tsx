import {useState} from 'react';

export const useFormInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	type ChangeEvent = {
		target: {
			value: string;
		};
	};

	const handleChange = (event: ChangeEvent) => {
		setValue(event.target.value);
	};

	return {
		value,
		onChange: handleChange,
	};
};

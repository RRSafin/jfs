import React from 'react';

function Select( {
        elArray = [],
        onSelect = () => {},
        placeholder = ''
    } ) {
        const options = elArray.map((text, index) => {
            return <option key={`${index}select}`}>{text}</option>;
    });

    return <div>
        <select defaultValue={placeholder} onChange={(e) => onSelect(e.target.value)}>
            <option disabled={true} key={placeholder}>{placeholder}</option>
            {options}
        </select>
    </div>
}

export default Select;
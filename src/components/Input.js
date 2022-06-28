import React from 'react';

function Input({
        onFilter = () => {}
    }) {

    return <div>
        <input defaultValue={''} onChange={(e) => {onFilter(e.target.value)
        }}
        />
    </div>;
}

export default Input;
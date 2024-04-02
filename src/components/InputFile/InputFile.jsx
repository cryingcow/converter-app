import React, { useState } from 'react';
import PropTypes from 'prop-types';

InputFile.propTypes = {

};

function InputFile(props) {
    const [file, setFile] = useState('')
    function handeChange(event) {
        setFile(event.target.files[0])
    }

    console.log(file)
    return (
        <input type='file' onChange={handeChange} />
    );
}

export default InputFile;
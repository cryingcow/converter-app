import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
Preview.propTypes = {

};

function Preview({ data, type }) {
    return (
        <object className='frame' data='' type={type}>

        </object>
    );
}

export default Preview;
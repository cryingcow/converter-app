import React from 'react';
import PropTypes from 'prop-types';
import Preview from '../components/Preview/Preview';
import './styles.css'
import InputFile from '../components/InputFile/InputFile';
MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <div className="container">
            <div className="flex mainpage"  >
                <div className="pdf">
                    <InputFile />
                    <Preview data={'aa'} type={'application/pdf'} />
                </div>
                <div className="excel">
                    <Preview data={'aa'} type={'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'} />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
import React from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';


const Section = ({title, children }) => (
    <>
        <h2 className={style.section}>{title}</h2>
        {children}
    </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
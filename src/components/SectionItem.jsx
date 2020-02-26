/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SectionItem = ({ children, title = '', link = '#', skills = [], description = '' }) => (
  <div className="section">
    <p className="headline">
      <a href={link}>{title}</a>
    </p>
    <p>
      <span className="grey">{description}</span>
    </p>
    {children}
    <div className="skills">
      <div>
        {skills.length > 0 ? <h3>Technologies used:</h3> : <React.Fragment />}
        <ul>
          {skills.map(s => (
            <li>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default SectionItem;

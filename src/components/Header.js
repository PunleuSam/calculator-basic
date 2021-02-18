import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <i className="fas fa-calculator ">  Basic-Calculator. </i>
        <br />
        <div className="paragraph">
          project individual for year2 semester2.
          <br />
          re-do and practice with ReactJS. <i className=" fab fa-react" />
          <br/><br/>
          SAM PUNLEU <i className=" fas fa-lightbulb"/>
          <br/><br/>
          teacher please help recommend <i className=" fas fa-exclamation-triangle"/>
        </div>
      </div>
    );
  }
}

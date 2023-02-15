import React, { Component } from "react";
import LeftHeader from "../myComponents/LeftHeader";
import RightHeader from "./RightHeader";


export default class Header extends Component {
    render() {
      return (
        <header className="container">
            <LeftHeader />
            <RightHeader />
           
          </header>
      )
    }
  }
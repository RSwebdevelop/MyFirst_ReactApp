
import React, { Component } from 'react'

export default class LeftHeader extends Component {

    render() {
        return (
          <>
            <div className="left_side">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png"
                alt="logo"
                className="image"
              />
              <button className="tutorial left_btn">Tutorials</button>
              <button className="tutorial left_btn">References</button>
              <button className="tutorial left_btn">Exercises</button>
              <button className="tutorial left_btn">Sign Up</button>
            </div>
          </>
        );
      }
    }


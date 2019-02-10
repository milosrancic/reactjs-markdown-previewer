import React from 'react';
import './Preview.css';
import Col from 'react-bootstrap/Col';

const marked = require("marked");

const Preview = props => {
    return (
      <Col md={6}>
        <div className="preview-container">
          <h3>Previewer</h3>
          <div
            id="preview" 
            dangerouslySetInnerHTML = {{__html: marked(props.text)}}>
          </div>
        </div>
      </Col>
    )
}

export default Preview;
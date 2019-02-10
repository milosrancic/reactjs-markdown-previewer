import React from 'react';
import './Editor.css';
import Col from 'react-bootstrap/Col';


const Editor = props => {
    return (
      <Col md={6}>
        <div className="editor-container">
           <h3 >Editor</h3>
            <textarea 
              id="editor"
              type="text"
              value={props.text}
              onChange={props.onChange}
            />
        </div>
      </Col>
    )
}
export default Editor;
import React, { Component } from 'react';
import './App.css';
import Preview from './Preview';
import Editor from './Editor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: placeholder
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <Container>
          <Row>

            <Editor 
              text={this.state.text}
              onChange={this.handleChange}
            />

            <Preview 
              text={this.state.text}
            />

          </Row>
        </Container>
      </div>
    );
  }
}

export default App;


const placeholder = 
`
Heading
=======

Sub-heading
-----------

**This is bold text**  
 __So is this__      

 *This text is italicized*  
 _So is this_                    

 ~~This was mistaken text~~                    

Some random list:

  * JavaScript
  * ReactJS
  * Python

\`<div>add some inline code</div>\`

\`\`\`
//and also multi-line

function sum(a, b) {
  return a + b
}
\`\`\`

You can also add [links](https://www.freecodecamp.com), and
> Block Quotes!

but most importantly, you can add puppy photos:

![Puppy photo](https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=300&h=300&526ED1E1-34FF-4472-B348B8B4769AB2A1)

`;
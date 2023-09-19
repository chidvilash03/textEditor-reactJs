import {Component} from 'react'

import './index.css'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {CustomButton, TextArea} from './styledComponents'

class Home extends Component {
  state = {bold: false, italic: false, underline: false, text: ''}

  text = event => {
    this.setState({text: event.target.value})
  }

  bold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  italic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  underline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {text, bold, italic, underline} = this.state
    return (
      <div className="main">
        <div className="main-container">
          <div className="img-container">
            <h1 className="ic-head">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-img"
            />
          </div>
          <div className="editor-container">
            <ul className="row">
              <li>
                <CustomButton
                  type="button"
                  data-testid="bold"
                  onClick={this.bold}
                  active={bold}
                >
                  <VscBold size={25} />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  type="button"
                  data-testid="italic"
                  onClick={this.italic}
                  active={italic}
                >
                  <GoItalic size={25} />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  type="button"
                  data-testid="underline"
                  onClick={this.underline}
                  active={underline}
                >
                  <AiOutlineUnderline size={25} />
                </CustomButton>
              </li>
            </ul>
            <hr className="hr-line" />
            <TextArea bold={bold} italic={italic} underline={underline} />
          </div>
        </div>
      </div>
    )
  }
}
export default Home

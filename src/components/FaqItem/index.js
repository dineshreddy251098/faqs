import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onBtnTriggered = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {showAnswer} = this.state
    const {faqsDetails} = this.props
    const {questionText, answerText} = faqsDetails
    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button onClick={this.onBtnTriggered} className="btn" type="button">
            {showAnswer ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {showAnswer && (
          <div>
            <hr />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem

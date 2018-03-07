import React from 'react'

class Brain extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submitQa = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.props.brainArea.id, this.state.question, this.state.answer)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let qa = this.props.brainArea.qas.map(qa => {
      return <div className="qa-segment" key={qa.question}><h4>Q: {qa.question }</h4><p>A: {qa.answer}</p></div>
    })

    return (
      <div className="ui segment">
        <h2>{this.props.brainArea.name}</h2>
        <p>{this.props.brainArea.description}</p>
        <div>{qa}</div>
        <form onSubmit={this.submitQa}>
          <input type="text" name="question" value={this.state.question} onChange={this.handleChange} placeholder="Add a question"/>
          <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange} placeholder="Add the answer"/>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }

}

export default Brain

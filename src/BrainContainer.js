import React from 'react'
import data from './data'
import BrainList from './BrainList'

class BrainContainer extends React.Component {

  state = {
    brainAreas: []
  }

  componentDidMount() {
    this.setState({
      brainAreas: data
    })
  }

  handleSubmit = (id, question, answer) => {
    let updatedAreas = this.state.brainAreas.slice() // create a copy of state's brainArea []
    let qaPair = {question: question, answer: answer} // create qa {}

    updatedAreas.forEach(area => {
      if(question && answer && area.id === id) {
        area.qas.push(qaPair)
      }
    })

    this.setState({
      brainAreas: updatedAreas
    })
  }

  render () {
    // console.log(this.state.brainAreas) // works
    return (
      <BrainList brainAreas={this.state.brainAreas} handleSubmit={this.handleSubmit} />
    )
  }
}

export default BrainContainer;

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

  handleSubmit = (brainArea, question, answer) => {
    let brainAreas = this.state.brainAreas.slice() // create a copy of state's brainArea []
    let neededArea = brainAreas.find(ba => ba === brainArea) // find neededArea {}
    let qaPair = {question: question, answer: answer} // create qa {}
    let updatedArea = neededArea.qas.push(qaPair) // add/push qaPair {} to the updatedArea []

    this.setState({
      brainAreas: neededArea
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

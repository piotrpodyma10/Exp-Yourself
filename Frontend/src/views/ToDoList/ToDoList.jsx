import React from 'react';
// import './MyProfile.scss';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: localStorage.getItem('myTasks') && localStorage.getItem('myTasks').split(',') || [],
      value: '',
    }
 } 
  
 deleteItem = (index) => {
     console.log('OKKO', index)
    const dane = this.state.toDoList.filter((todo, todoIndex) => {
        return todoIndex !== index
    })

    this.setState({ toDoList: dane})
    localStorage.setItem('myTasks', dane)
 }

  onChange = e => {
    console.log('EEE', e.target.value)
    this.setState({
      value: e.target.value
    })

    
  }

 keyPress = e => {
   console.log('keyPRES', e)
   if(e.keyCode == 13){
      console.log('go', this.state)
      localStorage.setItem('myTasks', [...this.state.toDoList, this.state.value])

      this.setState({
        toDoList: [...this.state.toDoList, this.state.value],
        value: ''
      })

    }
 }

  render() {
    console.log('NOE DANE', this.state)
    return (
        <div className="to-do-container">
            <div className="to-do-list">You're Fucking Tasks</div>
            <input onKeyDown={this.keyPress} onChange={this.onChange} value={this.state.value} />
            {this.state.toDoList.map((element, index) => {
            return (
                <div className="task" id={index} onClick={() => this.deleteItem(index)}>{element}</div>
            )
            })}
      </div>
    );
  }
}

export default ToDoList;
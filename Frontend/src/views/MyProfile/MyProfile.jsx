import React from 'react';
import './MyProfile.scss';
import ToDoList from '../ToDoList/ToDoList'
import Quotes from '../../components/Quotes/Quotes';

class MyProfile extends React.Component {
  render() {
    return (
      <div className="my-profile-container">
        <ToDoList />
        <Quotes />
      </div>
    );
  }
}

export default MyProfile;
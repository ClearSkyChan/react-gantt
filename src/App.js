import React from 'react';
import './App.css';
import Gantt from './gantt/gantt'
import Block from './gantt/block'
import LockBlock from './gantt/lockBlock'
import Task from './gantt/task'
function App() {
  return (
    <Gantt>
      <div>
        <LockBlock>B-XXX1</LockBlock>
        <LockBlock>B-XXX1</LockBlock>
        <LockBlock>B-XXX1</LockBlock>
      </div>
      <div>
        <Block>
          <Task left="200" width="50"></Task>
          <Task left="100" width="50"></Task>
          <Task left="0" width="100"></Task>
        </Block>
        <Block>
          <Task></Task>
        </Block>
        <Block>
          <Task></Task>
        </Block>
      </div>
    </Gantt>
  );
}

export default App;

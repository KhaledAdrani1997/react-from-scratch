import React from 'react';
import './App.css';
import Hello from './component/Hello.js'
import Avatar from './component/Avatar'
import UserInfo from './component/UserInfo'
import Clock from './component/Clock'

function App() {
  const user = {
    name:'Khaled',
    role:'Forgotten Hero',
    smily:':)',
    age:'23',
    place:'Ariana'
  }
  console.log('in App',user)
  return (
    <div className="App">
      <header className="App-header">
       Hello World 
      </header>
      <Hello name="Khaled"/>
      <Avatar user={user}/>
      <UserInfo user={user}/>
      <Clock/>
      <footer className="App-footer">Khaled is Learning 2020</footer>
    </div>
  );
}

export default App;

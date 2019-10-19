import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'900525',
  'gender':'남자',
  'job':'백수'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'이경호',
  'birthday':'950525',
  'gender':'남자',
  'job':'교보핫트랙스'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'김현창',
  'birthday':'910525',
  'gender':'남자',
  'job':'진학사'
}
]

class App extends Component {
  render() {
  return (
    <div>
      {customer.map(c=>{
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} 
        />
      })}
    </div>
    );
  }
}

export default App;

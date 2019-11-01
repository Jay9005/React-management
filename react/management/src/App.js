import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'900525',
  'gender':'man',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'남대문',
  'birthday':'900525',
  'gender':'girl',
  'job':'고등학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':'숭례문',
  'birthday':'900525',
  'gender':'man',
  'job':'회사원'
},
]
class App extends Component{
  render() {
    return (
      <div>
        {customers.map(c=>{
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
        })}
        </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
const List = ({ items }) => (
<ul style={{ listStyle: "none" }}>
{items.map((item, i) => (
<li key={i}>{item}</li>
))}
</ul>
);
class App extends Component {
state = {
list: ['Soccer', 'Basketball', 'Volleyball', 'Softball', 'Tennis', 'Snowboarding', 'Skiing', 'Climbing', 'Cycling', 'Snowshoeing', 'Hiking'];
removeItem = index => {
return () => {
this.state.list.splice(index, 1);
this.setState({list: this.state.list});
}
},
render () {
return (
<div className="App">
<h1 id = 'text-area'>OUTDOOR ACTIVITIES I ENJOY:</h1>
<List items={this.state.list.map((item, i) => (
<div style={{ display: 'inline-table'}}>
<span>{item}</span>
<button onClick={this.removeItem(i)}>x</button>
</div>
))} />
</div>
)}
}
}
export default App;


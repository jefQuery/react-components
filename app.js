// import React from 'react';

// var Cucumbers = () => (
//   <li>Cucumbers</li>
// );

// var Kale = () => (
//   <li>Kale</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  render(props){
    var onListItemHover = (event) => {
      console.log('lol');
      this.setState({
        hover: !this.state.hover
      });
    }
    var onListItemClick = (event) => {
      console.log('I got clickedz!');
    };
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return(
      <li style={style} onMouseOver={onListItemHover.bind(this)} onClick={onListItemClick}>{this.props.food.name}</li>
    );
  }
  
};

var GroceryList = (props) => ( 
  <div>
    <h2>My Grocery List</h2>
      <ul>
      {props.groceries.map((grocery, i) =>
        <GroceryListItem key={i} food={grocery}/>
      )}
      </ul>
  </div>
);

var GROCERIES = [{name:'cucumbers'}, {name:'kale'}, {name:'watermelon'}, {name:'SOYLENT'}]
ReactDOM.render(<GroceryList groceries={GROCERIES} />, document.getElementById('app'));

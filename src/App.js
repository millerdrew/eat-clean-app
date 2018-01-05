import React, { Component } from "react";
import tomato from "./tomato.svg";
import "./App.css";

/*
Eat clean app
Shopping List
Weekly Men

TODO:
Store Data
Create tables
*/

const VEGETABLES = [
  'Green Beans',
  'Onion',
  'Peas',
  'Sweet Potato',
  'Avocado',
  'Banana',
  'Blackberries',
  'Blueberries',
  'Greens'
];

const FRUITS = [
  'Grapes',
  'Grapefruit',
  'Kiwi Fruit',
  'Lemon',
  'lime',
  'Mango',
  'Orange',
  'Papaya',
  'Pear',
  'Pineapple',
  'Strawberries',
  'Tomatoes',
  'Watermelon',
  'Cantaloupe',
  'Honeydew Melon',
  'Dates',
];

const PROTEINS = [
  'Chicken',
  'Turkey',
  'Duck',
  'Eggs',
  'Fish',
  'Beef',
  'Pork',
  'Venison'
];

const FLAVOR = [
  'Garlic',
  'Onion Powerder',
  'Turmeric',
  'Cumin',
  'Chili Powder',
  'Basil',
  'Oregano',
  'Parsley',
  'Chives',
  'Dill Weed',
  'Sage',
  'Mustard Seed',
  'Coriander',
  'Fennel',
  'Powdered Ginger',
  'Cinnamon',
  'Sea Salt',
  'Pink Himalayan Salt',
  'Fresh Ground Black Pepper',
  'Crushed Red Pepper Flakes',
  'Dijon Mustard',
  'Honey',
  'Maple Syrup',
  'Coconut Palm Sugar',
  'Raw Agave Nectar',
  'Molasses',
  'Lemon Juice/Lime Juice',
  'Vinegars',
  'Tea and Coffee',
  'Tamari',
  'Braggs Liquid Aminos'
];

const DAIRY = [
  'Milk',
  'Cheese',
  'Yogurt',
  'Cottage Cheese',
  'Unsweetened Soy Milk',
  'Unsweetened Almond Milk',
  'Unsweetened Rice Milk',
  'Unsweeted Coconut Milk'
];

const DONTEVEN = [
  'Convenience Meals (frozen or not)',
  'Candy',
  'Pre-Made Canned Products',
  'Energy Drinks',
  'Fast Food',
  'Fruits & Vegetables in preserved states',
  'Fruit juices with added sugar',
  'Soda/Soft Drinks',
  'Corn Oil',
  'Margarine',
  'Crisco',
  'Sugar',
  'High Fructose Corn Syrup',
  'Artificial Sweeteners'
];

class ListFood extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.food;
  }

  listFood(food) {
    return food.map(food => <div><p key={food}>{food}</p><input type="checkbox" /></div>);
  }

  render() {
    return (
      <div>
        {this.listFood(this.food)}
        <button>Add to Shopping List</button>
      </div>
    );
  }
}

class HealthyFoodList extends Component {
  constructor(props) {
    super(props);
    this.vegetables = this.props.vegetables;
    this.fruits = this.props.fruits;
    this.proteins = this.props.proteins;
    this.flavor = this.props.flavor;
    this.dairy = this.props.dairy;
    this.donteven = this.props.donteven;
  }

  render() {
    return (
      <div className="HealthyFoodList">
        <h1>Healthy Food List</h1>
        <h2>Veggies</h2>
        <ListFood food={this.props.vegetables} />
        {/* <input type="checkbox">{listVeggies}</input> */}
        <h2>Fruits</h2>
        <ListFood food={this.props.fruits} />
        <h2>Proteins/Meats</h2>
        <ListFood food={this.props.proteins} />
        <h2>Condiments, Spices, and Seasonings</h2>
        <ListFood food={this.props.flavor} />
        <h2>Dairy</h2>
        <ListFood food={this.props.dairy} />
        <h2>Don't Even Think About it</h2>
        <ListFood food={this.props.donteven} />
      </div>
    );
  }
}

class ShoppingList extends Component {
  render() {
    return (
      <div className="ShoppingList">
        <h1>Shopping List</h1>
      </div>
    );
  }
}

class WeeklyMenu extends Component {
  render() {
    return (
      <div className="WeeklyMenu">
        <h1>Weekly Menu</h1>
          <h2>Monday</h2>
          <h2>Tuesday</h2>
          <h2>Wednesday</h2>
          <h2>Thursday</h2>
          <h2>Friday</h2>
          <h2>Saturday</h2>
          <h2>Sunday</h2>
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {shoppingList: ''};
    this.handleAddToList = this.handleAddToList.bind(this);
  };

  handleAddToList(itemsSelected) {
    this.setState({
      shoppingList: itemsSelected
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tomato} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Eat Clean App</h1>
        </header>
        <HealthyFoodList 
          vegetables={VEGETABLES}
          fruits={FRUITS}
          proteins={PROTEINS}
          flavor={FLAVOR}
          dairy={DAIRY}
          donteven={DONTEVEN}
        />
        <ShoppingList />
        <WeeklyMenu />
      </div>
    );
  }
}

export default App;

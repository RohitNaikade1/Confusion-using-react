import React, { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from './dishes';
import DishDetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent'
import { Switch,Route,Redirect } from 'react-router-dom';
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelected(dishId)
  {
      this.setState({selectedDish : dishId});
  }
  render(){
      const HomePage=()=>{
          return (<Home />);
      }
    return (
        <>
         <Header />
         <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
         </Switch>
        <Footer />
        </>
   );
  }
  
}

export default Main;

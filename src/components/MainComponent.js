import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contactus from './ContactusComponent';
import {DISHES} from './dishes';
import { COMMENTS } from './comments';
import { LEADERS } from './leaders';
import { PROMOTIONS } from './promotions';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent'
import { Switch,Route,Redirect } from 'react-router-dom';
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS,
      selectedDish:null
    };
  }
  onDishSelected(dishId)
  {
      this.setState({selectedDish : dishId});
  }
  render(){
      const HomePage=()=>{
          return (
          <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
             promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
             leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
          />);
      }
    return (
        <>
         <Header />
         <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
            <Route exact path='/contactus' component={Contactus} />
            <Redirect to="/home" />
         </Switch>
        <Footer />
        </>
   );
  }
  
}

export default Main;

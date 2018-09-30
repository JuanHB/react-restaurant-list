import React from  'react';
import {Route, withRouter} from 'react-router-dom';
import makeRoute from 'src/utils/route';
import RestaurantDetailsContainer from 'src/components/Pages/RestaurantDetails/RestaurantDetailsContainer';
import RestaurantListContainer from 'src/components/Pages/RestaurantList/RestaurantListContainer'

class MainContainer extends React.Component {

  render(){
    return (
      <div>
        <Route exact path={makeRoute('/')} component={RestaurantListContainer}/>
        <Route path={makeRoute('/restaurant/:id')} component={RestaurantDetailsContainer}/>
      </div>
    )
  }

}

export default withRouter(MainContainer);
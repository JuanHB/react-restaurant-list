import React from  'react';
import {Route, withRouter} from 'react-router-dom';
import makeRoute from 'src/utils/route';
import RestaurantDetails from 'src/components/RestaurantDetails/RestaurantDetails';
import RestaurantListContainer from 'src/components/Pages/RestaurantList/RestaurantListContainer'

class MainContainer extends React.Component {
  render(){
    return (
      <div>
        <Route exact path={makeRoute('/')} component={RestaurantListContainer}/>
        <Route path={makeRoute('/restaurant')} component={RestaurantDetails}/>
      </div>
    )
  }

}

export default withRouter(MainContainer);
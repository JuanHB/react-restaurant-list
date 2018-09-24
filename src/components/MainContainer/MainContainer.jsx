import React from  'react';
import {Route, withRouter} from 'react-router-dom';
import makeRoute from 'src/utils/route';
import RestaurantList from 'src/components/RestaurantList/RestaurantList';
import RestaurantDetails from 'src/components/RestaurantDetails/RestaurantDetails';

class MainContainer extends React.Component {
  render(){
    return (
      <div>
        <Route exact path={makeRoute('/')} component={RestaurantList}/>
        <Route path={makeRoute('/restaurant')} component={RestaurantDetails}/>
      </div>
    )
  }

}

export default withRouter(MainContainer);
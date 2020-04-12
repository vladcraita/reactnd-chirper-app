import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {
              this.props.loading === true ?
                  null :
                  <div>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/new" exact component={NewTweet}/>
                    <Route path="/tweet/:id" exact component={TweetPage}/>
                  </div>
            }
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

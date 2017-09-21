import React, { Component } from 'react';
import {voteAngular, voteReact, voteVuejs} from './actions/'
class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () =>{
    this.store.dispatch(voteAngular())
  }
  handleVoteReact = () =>{
    this.store.dispatch(voteReact())
  }
  handleVoteVuejs = () =>{
    this.store.dispatch(voteVuejs())
  }
  render() {
    return (

          <div className="row">
            <div className="jumbotron text-center">

              <h3> Pick your front end framework </h3>
              
              <div className="row">
                <ul className="list-inline">
                  <li>
                    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React" height="96" onClick={this.handleVoteReact} />
                    </li>
                  <li>
                    <img src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"  alt="Angular" height="96" onClick={this.handleVoteAngular}/>
                    </li>
                  <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg" alt="VueJs"  height="96" onClick={this.handleVoteVuejs} />
                    </li>
               </ul>
              </div>
            </div>
          </div>
      

    );
  }
}

export default App;

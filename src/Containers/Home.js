import React, {Component} from 'react';
import {connect} from 'react-redux';
import PodcastActions, {INITIAL_STATE} from '../Redux/PodcastRedux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  componentDidMount() {
    this.props.setSuccess();
  }

  buttonClick = () => {
    this.props.setRequest();
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <button onClick={() => {
          this.buttonClick()
        }}>Home
        </button>
        <br/>
        <span>{this.props.podcast.demoValue}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    podcast: state.podcast,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSuccess: () => dispatch(PodcastActions.demoSuccess()),
    setRequest: () => dispatch(PodcastActions.apiRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
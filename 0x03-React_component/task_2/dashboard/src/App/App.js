import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyNotifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
    html: null,
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
    html: null,
  },
  {
    id: 3,
    type: 'urgent',
    value: null,
    html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      this.props.logOut();
      alert('Logging you out');
    }
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        <MyNotifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {}, 
};

export default App;

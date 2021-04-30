import React from 'react';
import Navigation from '../../components/Navigation/index.js';
import ActionWheels from '../../ActionWheels';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const PageWrapper = () => {
    return <div>
      <Router>
            <ActionWheels />
      </Router>
    </div>

};

export default PageWrapper;
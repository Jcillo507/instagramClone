import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes'

const Login = lazy(()=>import ('./pages/Login'))
const SignUp = lazy(()=>import ('./pages/SignUp'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

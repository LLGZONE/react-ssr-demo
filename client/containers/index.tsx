import * as React from 'react';
import Hello from 'components/hello';
import Increment from 'components/increment';
import { Link, Router } from '@reach/router';

class App extends React.Component<{}> {
  render() {
    return (
      <>
        <nav style={{ display: 'flex' }}>
          <Link to="/hello">hello</Link>
          <Link to="/increment">Increment</Link>
        </nav>
        <Router>
          <Hello path="/hello" />
          <Increment path="/increment" />
        </Router>
      </>
    );
  }
}

export default App;

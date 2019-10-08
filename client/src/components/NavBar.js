import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

// const NavBar = () => {
//     return (
//         <nav>
//             <div>
//                 <div>
//                     <a href="/" >Home</a> 
//                     <a href="/merchandise">Merchandise</a>
//                     <a href="/schedule">Schedules</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default NavBar;

class App extends React.Component {
    render() {
      return (
        <div>
          <AppBar color="primary" position="static">
            <Toolbar>
              <TypoGraphy variant="title"
                color="inherit"
              >
                My header
             </TypoGraphy>
            </Toolbar>
          </AppBar>
  
        </div>
      );
    }
  }
  export default App;
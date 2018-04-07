import React from 'react';
const heading = {
  color: 'blue',
  textAlign:'center',
};
class App extends React.Component {
  
   render() {
      return (
         <div style={heading}>
            <h1>Hello World!!!</h1>
         </div>
      );
   }
}
export default App;
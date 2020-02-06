import React from 'react';

function App() {
  return (
    <div className="alert alert-dismissible alert-warning">
      <button type="button" classNamess="close" data-dismiss="alert">&times;</button>
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0"> Hello <a href="#" className="alert-link">Bootswatch!</a>.</p>
    </div>
  );
}

export default App;

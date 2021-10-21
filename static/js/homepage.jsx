'use strict';

function Homepage() {
  return <div> Welcome to my homepage!
    <a href="/cards"> Click to visit my cool cards page </a>
    <img src="/static/img/balloonicorn.jpg"/>
    </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

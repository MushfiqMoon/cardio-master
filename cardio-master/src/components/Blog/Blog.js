import React from 'react'

const Blog = () => {
  return (
    <div className="row">
      <div className="col-md-12">

        <div className="card mt-5 mb-3">
          <div className="card-header bg-warning text-white fs-5">
            How Does React Work
          </div>
          <div className="card-body">
            <p className="card-text">ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
              One of the biggest advantages of using React is that we can infuse HTML code with JavaScript. <br />
              Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript.</p>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header bg-warning text-white fs-5">
            Difference between state and props in react
          </div>
          <div className="card-body">
            <p className="card-text">
              <table className="table"><tbody><tr><td><p><strong>PROPS</strong></p></td><td><p><strong>STATE</strong></p></td></tr><tr><td>The Data is passed from one component to another.</td><td>The Data is passed within the component only.</td></tr><tr><td>It is Immutable (cannot be modified).</td><td>It is Mutable ( can be modified).</td></tr><tr><td>Props can be used with state and functional components.</td><td>State can be used only with the state components/class component (Before 16.0).</td></tr><tr><td>Props are read-only.</td><td>State is both read and write.</td></tr></tbody></table>
            </p>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header bg-warning text-white fs-5">
            Except data load what is the use case of "UseEffect" Hook
          </div>
          <div className="card-body">
            <div className="card-text">
              <h4>
                <code className='bg-dark p-1 rounded text-white'>useEffect</code> use cases
              </h4>
              <ul>
                <li>Running on <strong>state change</strong>: validating input field</li>
                <li>Running on <strong>state change</strong>: live filtering</li>
                <li>Running on <strong>state change</strong>: trigger animation on new array value</li>
                <li>Running on <strong>props change</strong>: update paragraph list on fetched API data update</li>
                <li>Running on <strong>props change</strong>: updating fetched API data to get BTC updated price</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Blog
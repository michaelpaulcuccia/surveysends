import React from 'react'

const App = () => {
  return (
    <div>
      <div
        className='sign_in'
        style={{
          backgroundColor: 'red',
          width: '3rem',
          height: '3rem'
        }}>
        <a href="/auth/google">
          <i className='fab fa-google-plus-g red'
            style={{
              color: 'white',
              width: '50%',
              padding: '15% 10% 15% 10%',
              fontSize: '30px'
            }}>
          </i>
        </a>
      </div>
    </div>
  )
}

export default App


import React from 'react'

const UserItem = ({item}) => {
 
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.avatar} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.first_name}{' '}{item.last_name}
            </li>
            <li>
              <strong>Email:</strong> {item.email}
            </li>
            
            
          </ul>
        </div>
      </div>
    </div>
    )
}

export default UserItem

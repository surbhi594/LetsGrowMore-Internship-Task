import React from 'react'
import UserItem from './UserItem'
import Spinner from '../ui/Spinner'
const UserGrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner/>) : (
    <section className="cards">
      {items.data.map((item) =>(
    <UserItem key={item.id} item={item}></UserItem>

))}
    </section>
    )
        
}

export default UserGrid

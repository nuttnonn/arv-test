import React, { useEffect, memo } from 'react'
import { UserData } from '../types/UserTypes'

export interface UserProps {
  data: UserData;
  onClose: () => void;
}

const User: React.FC<UserProps> = ({ data, onClose }) => {
  useEffect(() => {
    console.log('User component is rendered!')
  }, [data])

  return (
    <div>
      <h1>{data.first_name} {data.last_name}</h1>
      <h2>{data.address.city} {data.address.country} {data.address.street_address} {data.address.state}</h2>
      <h3>{data.email} {data.date_of_birth}</h3>
      <button onClick={onClose}>close</button>
    </div>
  )
}

export default memo(User);
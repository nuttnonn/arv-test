import React, { memo, useEffect } from 'react'
import { UserData } from '../types/UserTypes';

interface UserListProps {
  data: UserData[];
  selectedData: (data: UserData) => void;
}

const UserList: React.FC<UserListProps> = ({ data, selectedData }) => {
  useEffect(() => {
    console.log('UserList component is rendered!')
  }, [data])

  return (
    <div>
      {data.map((item: UserData) => {
        return (
          <button
            key={item.id}
            onClick={() => selectedData(item)}
          >
            <h3>{item.username} {item.first_name} {item.last_name}</h3>
          </button>
        );
      })}
    </div>
  );
};

export default memo(UserList);
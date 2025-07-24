import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/userApi';

export default function UserList() {
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError)
    return <div className="alert alert-danger">Error: {error.message}</div>;

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item">
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
}

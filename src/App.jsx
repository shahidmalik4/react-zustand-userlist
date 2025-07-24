import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { useUiStore } from './store/useUiStore';

export default function App() {
  const isFormOpen = useUiStore(state => state.isFormOpen);
  const toggleForm = useUiStore(state => state.toggleForm);

  return (
    <div className="container mt-4">
      <h1>User Management App</h1>
      <button className="btn btn-success mb-2" onClick={toggleForm}>
        {isFormOpen ? 'Close Form' : 'Add New User'}
      </button>
      {isFormOpen && <UserForm />}
      <UserList />
    </div>
  );
}

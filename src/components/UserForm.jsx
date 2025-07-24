import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../api/userApi';

export default function UserForm() {
  const [isOpen, setIsOpen] = useState(true);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      // Add new user at the TOP of the list
      queryClient.setQueryData(['users'], (oldUsers = []) => [
        {
          id: newUser.id || Math.random(),
          ...newUser,
        },
        ...oldUsers,
      ]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
    };
    mutation.mutate(user);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          name="name"
          placeholder="Name"
          required
          className="form-control"
          disabled={mutation.isLoading}
        />
      </div>
      <div className="mb-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="form-control"
          disabled={mutation.isLoading}
        />
      </div>
      <div className="d-flex align-items-center gap-2">
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="btn btn-primary"
        >
          {mutation.isLoading ? 'Creating...' : 'Create User'}
        </button>
      </div>

      {mutation.isError && (
        <div className="alert alert-danger mt-3" role="alert">
          Error: {mutation.error.message}
        </div>
      )}

      {mutation.isSuccess && (
        <div className="alert alert-success mt-3" role="alert">
          User created successfully!
        </div>
      )}
    </form>
  );
}

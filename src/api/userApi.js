const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export const createUser = async (user) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Failed to create user');
  return res.json();
};

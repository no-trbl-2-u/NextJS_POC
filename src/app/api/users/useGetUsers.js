import { useState, useEffect } from 'react';

export const useGetUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/api/users');
      const {
        data: { results },
      } = await res.json();

      if (res.ok) {
        setUsers(results);
      }
    };

    getUsers();
  }, []);

  return users;
};

export const useGetUser = uuid => {
  const users = useGetUsers();

  if (!users) {
    return [];
  }

  return users.filter(user => uuid === user.login.uuid);
};

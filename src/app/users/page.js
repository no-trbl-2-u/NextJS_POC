'use client';

import Link from 'next/link';
import { useGetUsers } from '../api/users/useGetUsers';
import UserCard from '../components/UserCard/UserCard';
import Layout from '../layouts/MainLayout/Layout.jsx';
import './users.css';

export default function Homepage() {
  const users = useGetUsers();

  if (!users) {
    return null;
  }

  // TODO: Create a dynamic route using some id from the userData to generate a page with more data on them
  return (
    <Layout>
      <div className="user-page">
        <div className="user-section">
          {users.map(user => (
            <Link href={`/users/${user.login.uuid}`} state={user}>
              <UserCard {...user} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

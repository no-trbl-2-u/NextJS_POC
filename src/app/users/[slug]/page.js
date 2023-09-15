'use client';

import { useGetUser } from '@/app/api/users/useGetUsers';
import Layout from '@/app/layouts/MainLayout/Layout';
import './userDetail.css';

export default function User({ params: { slug: uuid } }) {
  const [user = {}] = useGetUser(uuid);

  if (!user?.name) {
    return null;
  }

  const {
    name: { title, first, last },
    picture,
    dob,
    phone,
    email,
    location,
  } = user;

  console.log('User Information', user);

  return (
    <Layout>
      <div className="user-detail-container">
        <h1>{`${title} ${first} ${last}`}</h1>
        <img src={picture.large} />
        <p>{`Age: ${dob.age}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Country: ${location.country}`}</p>
        <p>{`City/State: ${location.city}, ${location.state}`}</p>
        <p>{`Address: ${location.street.number} ${location.street.name}`}</p>
        <p>{`Zip Code: ${location.postcode}`}</p>
      </div>
    </Layout>
  );
}

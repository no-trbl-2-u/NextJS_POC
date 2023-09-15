import './UserCard.css';

export default function UserCard(props) {
  const { picture, name, dob, phone } = props;

  console.log('User Props', props);

  return (
    // Link around card maybe
    <div className="user-card">
      <div className="user-card-top">
        <img src={picture.large} />
      </div>
      <div className="user-card-bottom">
        <p>{`Name: ${name.title} ${name.first} ${name.last}`}</p>
        <p>{`Age: ${dob.age}`}</p>
        <p>{`Phone: ${phone}`}</p>
      </div>
    </div>
  )
}
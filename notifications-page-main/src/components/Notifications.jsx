import { useState } from 'react'
import Alert from './Alert'

function Notifications() {

  const [data, setData] = useState([
    {picture: 'assets/images/avatar-mark-webber.webp', name: 'Mark Webber', activity: 'reacted to your recent post', event: 'My first tournament today!', comment: '', time: '1m ago', img: '', checked: true},
    {picture: 'assets/images/avatar-angela-gray.webp', name: 'Angela Gray', activity: 'followed you', event: '', comment: '', time: '5m ago', img: '', checked: true},
    {picture: 'assets/images/avatar-jacob-thompson.webp', name: 'Jacob Thompson', activity: 'has joined your group', event: 'Chess Club', comment: '', time: '1 day ago', checked: true},
    {picture: 'assets/images/avatar-rizky-hasanuddin.webp', name: 'Rizky Hasanuddin', activity: 'sent you a private message', event: '', comment: 'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.', time: '5 days ago', img: '', checked: false},
    {picture: 'assets/images/avatar-kimberly-smith.webp', name: 'Kimberly Smith', activity: 'commented on your picture', event: '', comment: '', time: '1 week ago', img: 'assets/images/image-chess.webp', checked: false},
    {picture: 'assets/images/avatar-nathan-peterson.webp', name: 'Nathan Peterson', activity: 'reacted to your recent post', event: '5 end-game strategies to increase your win rate', comment: '', time: '2 weeks ago', img: '', checked: false},
    {picture: 'assets/images/avatar-anna-kim.webp', name: 'Anna Kim', activity: 'left the group', event: 'Chess Club', comment: '', time: '2 weeks ago', img: '', checked: false},
  ])

  const [value, setValue] = useState(3)

  const markRead = () => {
    const updatedData = data.map(user => {
      return { ...user, checked: false };
    });
    setData(updatedData);
    setValue(0)
  }

  const handleCheckedChange = (index) => {
    const newData = [...data];
    newData[index] = { ...newData[index], checked: false };

    if (value <= 0) {
      return
    }

    setData(newData);
    setValue(value - 1);
  };

  return (
    <main>
      <header>
        <div className='header-notifications'>
          <h2>Notifications</h2>
          <div className='notification-value'>{value}</div>
        </div>
        <p onClick={() => markRead()}>Mark all as read</p>
      </header>

      {/* rendering each notification */}
      {data.map((user, index) => (
        <Alert
          key={index}
          picture={user.picture}
          name={user.name}
          activity={user.activity}
          event={user.event}
          comment={user.comment}
          time={user.time}
          img={user.img}
          checked={user.checked}
          index={index}
          onCheckedChange={() => handleCheckedChange(index)}
        />
      ))}
    </main>
  )
}

export default Notifications
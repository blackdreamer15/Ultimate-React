const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <FriendList />
    </div>
  );
}


function FriendList() {
  return (
    <ul className="sidebar">
      {
        initialFriends.map(friend => (
          <Friend id={friend.id}
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
          />
        ))
      }
    </ul>
  )
}

function Friend({ id, name, image, balance }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{balance}</p>
    </li>
  );
}
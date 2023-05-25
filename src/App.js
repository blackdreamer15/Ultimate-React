import { useState } from "react";

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
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />

        <AddFriendForm name={name} onSetName={setName} image={image} onSetImage={setImage} />

        <Button>Add Friend</Button>
      </div>

      <SplitBillForm />
    </div>
  );
}


function FriendList() {
  return (
    <ul>
      {
        initialFriends.map(friend => (
          <Friend key={friend.id}
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
          />
        ))
      }
    </ul>
  )
}

function Friend({ name, image, balance }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance > 0 ?
        <p className="green">
          {name} owes you {balance}€
        </p>
        :
        ((balance < 0) ?
          <p className="red">
            You owe {name} you {balance}€
          </p>
          : (
            <p>
              You and {name} are even
            </p>
          )
        )}
      <Button>Select</Button>
    </li>
  );
}



function Button({ children }) {
  return (
    <button className="button">{children}</button>
  );
}



function AddFriendForm({ name, onSetName, image, onSetImage }) {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" value={name}
        onChange={e => onSetName(e.target.value)}
      />

      <label>🎇 Image URL</label>
      <input type="text" value={image} onChange={e => onSetImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 BIll value</label>
      <input type="text" />

      <label>🧍 Your expense</label>
      <input type="text" />

      <label>👫 X's expense</label>
      <input type="text" disabled />

      <label></label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
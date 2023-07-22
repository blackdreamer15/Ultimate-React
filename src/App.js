import { useState } from "react";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];


function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  );
}


export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleClicking() {
    setShowAddFriend(showAddFriend => !showAddFriend);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friendList}
          selectedFriend={selectedFriend}
          onSelection={handleSelectedFriend}
        />

        {showAddFriend &&
          <AddFriendForm
            friendList={friendList}
            onSetFriendList={setFriendList}
          />
        }

        <Button onClick={handleClicking}>
          {
            showAddFriend ?
              "Close" : "Add Friend"
          }
        </Button>
      </div>

      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
    </div>
  );
}


function FriendList({ friendList, showBillForm, onSelection }) {

  return (
    <ul>
      {
        friendList.map((friend) => (
          <Friend key={friend.id}
            friend={friend}
            showBillForm={showBillForm}
            onSelection={onSelection}
          />
        ))
      }
    </ul>
  )
}

function Friend({ friend, showBillForm, onSelection }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance > 0 ?
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
        :
        ((friend.balance < 0) ?
          <p className="red">
            You owe {friend.name} you {friend.balance}€
          </p>
          : (
            <p>
              You and {friend.name} are even
            </p>
          )
        )}
      <Button onClick={() => onSelection(friend)}>
        {showBillForm ? "Close" : "Select"}
      </Button>
    </li>
  );
}


function AddFriendForm({ friendList, onSetFriendList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmitForm(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${name}`,
      balance: 0
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    onSetFriendList((friendList) => [...friendList, newFriend]);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmitForm}>
      <label>👫 Friend name</label>
      <input type="text" value={name}
        onChange={e => setName(e.target.value)}
      />

      <label>🎇 Image URL</label>
      <input type="text" value={image} onChange={e => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

function SplitBillForm() {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 BIll value</label>
      <input type="text" value={bill} placeholder="Bill value"
        onChange={e => setBill(Number(e.target.value))}
      />

      <label>🧍 Your expense</label>
      <input type="text" value={userExpense}
        placeholder="Your expense"
        onChange={e => setUserExpense(Number(e.target.value))} />

      <label>👫 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
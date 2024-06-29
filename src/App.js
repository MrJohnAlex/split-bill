import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplit from "./components/FormSplit";
import FriendsList from "./components/Friends";
const initialFriends = [
  {
    id: 1,
    name: "John",
    image: "https://i.pravatar.cc/48",
    balance: 100,
  },
  {
    id: 2,
    name: "Jane",
    image: "https://i.pravatar.cc/45",
    balance: 200,
  },
  {
    id: 3,
    name: "Mary",
    image: "https://i.pravatar.cc/20",
    balance: -3,
  },
];
function App() {
  const [showAddFriend, setShowFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowFriend((showAddFriend) => !showAddFriend);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowFriend(false);
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friends, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="App">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {selectedFriend && (
          <FormSplit
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;

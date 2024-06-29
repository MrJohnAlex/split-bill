import { useState } from "react";
import Button from "./Button";
export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/45");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
    };
    onAddFriend(newFriend);
  }
  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <label htmlFor="name">🤵Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image"> 🗃️Image URL</label>
      <input
        type="text"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add Friend</Button>
    </form>
  );
}

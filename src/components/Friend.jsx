import Button from "./Button";
export default function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.img} alt={friend.name} />
      <div className="info">
        <p>{friend.name}</p>
        {friend.balance <= 0 && (
          <p className="red">
            you owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>{friend.name} and you are event</p>}
      </div>
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

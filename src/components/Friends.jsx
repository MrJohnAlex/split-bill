import Friend from "./Friend";
export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <ul className="friend-lists">
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

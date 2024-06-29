import { useState } from "react";
import Button from "./Button";
export default function FormSplit({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidFriend = bill ? bill - expense : "";

  function handleBillSplit(e) {
    e.preventDefault();
    if (!bill || !expense) return;
    onSplitBill(bill > expense ? expense : bill);
  }

  return (
    <form className="bill-split" onSubmit={handleBillSplit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <div className="form-group">
        <label htmlFor="bill" id="bill">
          💰 Bill Value
        </label>
        <input
          type="text"
          name="bill"
          id="bill"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="people" id="people">
          {" "}
          🕴️ Your expense
        </label>
        <input
          type="text"
          name="people"
          id="people"
          value={expense}
          onChange={(e) =>
            setExpense(
              Number(e.target.value) > bill ? expense : Number(e.target.value)
            )
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="friend" id="friend">
          {" "}
          🧑‍🤝‍🧑 X's expense
        </label>
        <input
          type="text"
          name="friend"
          id="friend"
          disabled
          value={paidFriend}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pay-person" id="pay-person">
          {" "}
          Who is paying bill
        </label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <div className="form-group">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}

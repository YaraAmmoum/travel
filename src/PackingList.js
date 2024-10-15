export default function PackingList({ items, onDeleteitems, onToggleItems ,handleClearList}) {
    return (
      <span className="list">
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              onDeleteitems={onDeleteitems}
              onToggleItems={onToggleItems}
              key={item.id}
            />
          ))}
        </ul>
        <div className="action">
          <button onClick={handleClearList}>Clear List</button>
        </div>
      </span>
    );
  }
  function Item({ item, onDeleteitems, onToggleItems }) {
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => onToggleItems(item.id)}
          value={item.packed}
        />
        <div
          className="item"
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          {item.quantity} {item.description}{" "}
        </div>
  
        <button onClick={() => onDeleteitems(item.id)}>❌</button>
      </li>
    );
  }
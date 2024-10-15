export default function Stats({ items }) {
    if(!items.length)
    {
      return <p className="stats">Get start by adding items 🎈</p>
    }
    const numItem = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItem) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You have everything ready to go ✈"
            : `💼You have ${numItem} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }
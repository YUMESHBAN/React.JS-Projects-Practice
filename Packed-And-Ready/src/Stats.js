export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Items On The List</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const per = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {per === 100
          ? `Everything Packed`
          : `You have ${numItems} items in your list and u have already packed
        ${numPacked} (${per} %)`}
      </em>
    </footer>
  );
}

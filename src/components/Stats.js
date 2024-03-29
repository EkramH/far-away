import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list.</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to GO"
          : `You have ${numItems} items on your list, and you already packet ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
};

export default Stats;

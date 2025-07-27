function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical

  // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
  //   fruits.sort((a, b) => b.calories - a.calories); // Reverse NUMERIC

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const hiCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  //   const listItems = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name} : &nbsp; <b>{fruit.calories}</b>
  //     </li>
  //   ));

  //   const listItems = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruit.id}>
  //       {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
  //     </li>
  //   ));

  const listItems = hiCalFruits.map((hiCalFruit) => (
    <li key={hiCalFruit.id}>
      {hiCalFruit.name} : &nbsp; <b>{hiCalFruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;

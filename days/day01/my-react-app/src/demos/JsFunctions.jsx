export default function JsFunctions() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const words = [
    "banana",
    "apple",
    "kiwi",
    "orange",
    "blueberry",
    "strawberry",
  ];

  const squared = numbers.map((n) => n ** 2);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const filtered = numbers.filter((n) => n > 5);
  const sortedWords = words.slice().sort((a, b) => b.localeCompare(a));

  return (
    <>
      <div>
        <h2>Map method</h2>
        {squared.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>

      <div>
        <h2>Reduce method</h2>
        <p>Sum of numbers: {sum}</p>
      </div>

      <div>
        <h2>Filter method</h2>
        {filtered.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>

      <div>
        <h2>Sort method</h2>
        {sortedWords.map((word) => (
          <p key={word}>{word}</p>
        ))}
      </div>
    </>
  );
}

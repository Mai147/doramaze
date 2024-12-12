import "./App.css";
import Cell from "./components/Cell";

// Ví dụ bàn cờ: 0 là ô trống, 1 là ô bị chướng ngại vật
const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
];

// Kiểm tra có thể di chuyển từ a1 đến h8 không
// const result = bfs(board);
// if (result) {
//   console.log("Có đường đi từ a1 đến h8.");
// } else {
//   console.log("Không có đường đi từ a1 đến h8.");
// }

function App() {
  return (
    <div className="flex flex-col">
      {board.map((row, rowIdx) => (
        <div className="flex items-center justify-center text-center">
          {row.map((cell, colIdx) => (
            <Cell row={rowIdx} col={colIdx} isVisited={cell === 1} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

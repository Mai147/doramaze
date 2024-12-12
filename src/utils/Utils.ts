// Hàm kiểm tra xem ô (x, y) có hợp lệ không (không ra ngoài bàn cờ và không bị chướng ngại vật)
function isValid(
  x: number,
  y: number,
  board: number[][],
  visited: number[][],
  size: number
) {
  return (
    x >= 0 &&
    x < size &&
    y >= 0 &&
    y < size &&
    board[x][y] === 0 &&
    !visited[x][y]
  );
}

export const Utils = {
  // Thuật toán BFS để tìm đường đi từ a1 đến h8
  bfs(board: number[][], size = 8) {
    // Các hướng di chuyển hợp lệ của quân vua (trái, phải, lên, xuống)
    const directions = [
      [-1, 0], // Di chuyển lên
      [1, 0], // Di chuyển xuống
      [0, -1], // Di chuyển sang trái
      [0, 1], // Di chuyển sang phải
    ];
    const visited = Array.from({ length: size }, () => Array(size).fill(false)); // Ma trận theo dõi các ô đã thăm
    const queue = [[0, 0]]; // Khởi tạo hàng đợi, bắt đầu từ ô a1 (0, 0)
    visited[0][0] = true; // Đánh dấu ô a1 đã thăm

    while (queue.length > 0) {
      const cord = queue.shift(); // Lấy ô hiện tại từ hàng đợi
      const x = cord![0];
      const y = cord![1];

      // Nếu đã đến ô h8 (tương ứng với (7, 7))
      if (x === size - 1 && y === size - 1) {
        return true;
      }

      // Duyệt các ô lân cận
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (isValid(nx, ny, board, visited, size)) {
          visited[nx][ny] = true;
          queue.push([nx, ny]); // Thêm ô lân cận vào hàng đợi
        }
      }
    }

    return false; // Nếu không có đường đi đến h8
  },
};

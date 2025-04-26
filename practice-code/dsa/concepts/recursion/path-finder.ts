type Point = {
  x: number;
  y: number;
};

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
) {
  /* ------------------------------- Base Cases ------------------------------- */
  const isOffMap =
    curr.x >= maze[0].length ||
    curr.y >= maze.length ||
    curr.x < 0 ||
    curr.y < 0;

  // Base case: We're off the map.
  if (isOffMap) return false;

  // Base case: We encounter a wall.
  if (maze[curr.y][curr.x] === wall) return false;

  // Base Case: The block is already been seen.
  if (seen[curr.y][curr.x]) return false;

  // Base Case: We reach the end.
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  /* ------------------------------- Pre Recurse ------------------------------ */
  // Make the current block seen.
  seen[curr.y][curr.x] = true;

  // Add the current block to the path.
  path.push(curr);

  /* --------------------------------- Recurse -------------------------------- */
  for (let [x, y] of directions) {
    // Create the next point
    const nextPoint: Point = {
      x: curr.x + x,
      y: curr.y + y,
    };

    // If the walk was successful return true.
    if (walk(maze, wall, nextPoint, end, seen, path)) return true;
  }

  /* ------------------------------ Post Recurse ------------------------------ */
  path.pop();
  return false;
}

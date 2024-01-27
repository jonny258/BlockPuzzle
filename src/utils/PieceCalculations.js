export const calculateTwoByTwoSquares = (index) => {
    // Assuming a 2x2 piece and an 8x8 board
    const row = Math.floor(index / 8);
    const col = index % 8;
    let hovered = [index];

    if (col < 7) hovered.push(index + 1); // Right
    if (row < 7) hovered.push(index + 8); // Bottom
    if (col < 7 && row < 7) hovered.push(index + 9); // Bottom Right

    return hovered;
  };
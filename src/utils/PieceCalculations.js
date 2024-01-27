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


export const calculateThreeByThreeSquares = (index) => {
    // Assuming a 3x3 piece and an 8x8 board
    const row = Math.floor(index / 8);
    const col = index % 8;
    let hovered = [index];

    if (col < 7) hovered.push(index + 1); // Right
    if (row < 7) hovered.push(index + 8); // Bottom
    if (col < 7 && row < 7) hovered.push(index + 9); // Bottom Right
    if (col > 0) hovered.push(index - 1); // Left
    if (row > 0) hovered.push(index - 8); // Top
    if (col > 0 && row > 0) hovered.push(index - 9); // Top Left
    if (col < 7 && row > 0) hovered.push(index - 7); // Top Right
    if (col > 0 && row < 7) hovered.push(index + 7); // Bottom Left

    return hovered;
  }
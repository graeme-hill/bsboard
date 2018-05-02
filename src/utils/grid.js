function cellIndex(game, row, col) {
    return row * game.Game.Width + col;
}

function makeCellLookup(game, frame) {
    const lookup = {};

    for (const snake of frame.Snakes) {
        for (const part of snake.Body) {
            const index = cellIndex(game, part.Y, part.X);
            lookup[index] = snake;
        }
    }

    return lookup;
}

export function makeGrid(game, frame) {
    const grid = [];
    const lookup = makeCellLookup(game, frame);
    for (let row = 0; row < game.Game.Height; row++) {
        const column = [];
        for (let col = 0; col < game.Game.Height; col++) {
            const index = cellIndex(game, row, col);
            column.push(lookup[index] || null);
        }
    }
    return grid;
}
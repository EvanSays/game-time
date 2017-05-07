class GamePiece {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.creationTime = Date.now();
  }
}

module.exports = GamePiece;

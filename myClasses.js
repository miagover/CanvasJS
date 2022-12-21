class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dimensions = 50;
    this.content = " ";
    this.status = "empty";
  }

  draw() {
    if (this.status=="empty") {
      ctx.fillStyle = pickColor();
      ctx.fillRect(this.x-1, this.y-1, this.dimensions+2, this.dimensions+2)
      ctx.fillStyle = "white";
      ctx.fillRect(this.x, this.y, this.dimensions, this.dimensions);
    }
    else if (this.status=="grey") {
      ctx.fillStyle = "#a1a09f";
      ctx.fillRect(this.x-1, this.y-1, this.dimensions+2, this.dimensions+2)
      ctx.fillStyle = "#a1a09f";
      ctx.fillRect(this.x, this.y, this.dimensions, this.dimensions);
      ctx.fillStyle = "white";
      ctx.fillText(this.content, this.x+5, this.y+40);
    }
    else if (this.status=="yellow") {
      ctx.fillStyle = "#d6ba5e";
      ctx.fillRect(this.x-1, this.y-1, this.dimensions+2, this.dimensions+2)
      ctx.fillStyle = "#d6ba5e";
      ctx.fillRect(this.x, this.y, this.dimensions, this.dimensions);
      ctx.fillStyle = "white";
      ctx.fillText(this.content, this.x+5, this.y+40);
    }
    else if (this.status=="green") {
      ctx.fillStyle = "#6aa964";
      ctx.fillRect(this.x-1, this.y-1, this.dimensions+2, this.dimensions+2)
      ctx.fillStyle = "#6aa964";
      ctx.fillRect(this.x, this.y, this.dimensions, this.dimensions);
      ctx.fillStyle = "white";
      ctx.fillText(this.content, this.x+5, this.y+40);
    }
  }

  setStatus(status) {
    this.status = status;
  }

}

class Row {
  constructor(y) {
    this.y = y;
    this.sq1 = new Square(canvas.width/2-139, this.y);
    this.sq2 = new Square(canvas.width/2-82, this.y);
    this.sq3 = new Square(canvas.width/2-25, this.y);
    this.sq4 = new Square(canvas.width/2+32, this.y);
    this.sq5 = new Square(canvas.width/2+89, this.y);
    this.current = false;
    this.sqlist = [this.sq1, this.sq2, this.sq2, this.sq3, this.sq4, this.sq5];
  }

  draw() {
    this.sq1.draw();
    this.sq2.draw();
    this.sq3.draw();
    this.sq4.draw();
    this.sq5.draw();
  }
}

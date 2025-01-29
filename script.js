        class Rectangle{
            constructor(widht,height){
                this._width = widht;
                this._height = height;
            }
            get width(){
                return this._width;
            }
            get height(){
                return this._height;
            }
            getArea(){
                return this._height*this._width;
            }
        }
        class Square extends Rectangle{
            constructor(side){
                super(side,side);
            }
            getPerimeter(){
                return this.height*4;
            }

        }

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

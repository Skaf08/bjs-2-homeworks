function parseCount(search) {
   if (isNaN(Number.parseInt(search))) {
    throw e = new Error('Невалидное значение');      
   } else {
    return Number.parseInt(search);
   }
}

function validateCount(search) {
    try {
       return parseCount(search);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a,b,c) {
       this.a = a;
       this.b = b;
       this.c = c;
       if (((this.a + this.b) <= this.c) || ((this.b + this.c) <= this.a) || ((this.a + this.c) <= this.b)) {
        throw new Error('Треугольник с такими сторонами не существует');
       }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let pp = this.getPerimeter() / 2;
        return Number((Math.sqrt(pp*(pp - this.a)*(pp - this.b)*(pp - this.c))).toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch(err) {
        return new class Mistake {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
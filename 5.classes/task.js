class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       this.state = this.state * 1.5; 
       if (this.state >= 100) {
           this.state = 100;
       }
    }

    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else this._state = condition;
    }

    get state() {    
        return this._state;
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";    
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type,value) {
        let k=0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
                k=1;
            }
        }
        if (k == 0) {
            return null;
        }
    }

    giveBookByName(bookName) {
        let k=0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
                let bk = this.books[i];
                this.books.splice(i,1);
                k=1;
                return bk;
            }
        }
        if (k == 0) {
            return null;
        }
    }
}

class Student {
    constructor(name) {  
        this.name = name;
        this.algebra =[];
        this.geometry =[];
    }

    addMark(point, sub) {
        if ((point >= 1) && (point <= 5)) {
            if (sub == "algebra") {
                this.algebra.push(point);
            } else if (sub == "geometry") {
                this.geometry.push(point);
            } else return "Несуществующий предмет";
        } else return "Ошибка, оценка должна быть числом от 1 до 5";
    }

    getAverageBySubject(sub) {
        let sum =0;
        if (sub == "algebra") {
            for (let i=0;i<this.algebra.length;i++){
                sum = sum + this.algebra[i];
            }
            return sum/this.algebra.length;
        } else if (sub == "geometry") {
            for (let i=0;i<this.geometry.length;i++){
                sum = sum + this.geometry[i];
            }
            return sum/this.algebra.length;
        } else return "Несуществующий предмет";
    }

    getAverage() {
        let sum = 0;
        for (let i=0;i<this.algebra.length;i++){
            sum = sum + this.algebra[i];
        }
        for (let i=0;i<this.geometry.length;i++){
            sum = sum + this.geometry[i];
        }
        return sum/(this.geometry.length + this.algebra.length);
    }
}
  


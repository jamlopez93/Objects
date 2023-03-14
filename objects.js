    function Book( title, author, pages, read ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        
    }
    Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
    const theHobbit = new Book( 'The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet' );
    const theLordOfTheRings = new Book( 'The Lord of the Rings', 'J.R.R. Tolkien', 1216, 'read' );
    const theSilmarillion = new Book( 'The Silmarillion', 'J.R.R. Tolkien', 429, 'not read yet' );
    
    console.log( theLordOfTheRings.info() );

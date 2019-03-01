
class Book {
constructor(name, author, number) {
this.name = name;
this.author = author;
this.number = number;
    }
}

class UI {

addBookToList(book) {

        const list = document.getElementById('book-list');
        const row = document.createElement('li');
        row.innerHTML = `
        
            <h3>${book.name}</h3>
            <p><strong>Author : </strong>${book.author}</p>
            <p><strong>year of publication : </strong>${book.number}</p>
            <button class="btn btn-danger">
                <a href="" class="delete">Delete</a>
            </button>

        `;
list.appendChild(row);

    
}

showAlert(message, className){

            const div = document.createElement('div');

            //Add className

            div.className = `alert ${className}`;
            
            div.appendChild(document.createTextNode(message));
            
            const container = document.querySelector('.col-md-6');
            
            //Get Form
            
            const form = document.querySelector('#book-form');
            
            //Insert alert
            
            container.insertBefore(div, form);
            
            // Timeout after 1 sec
        
            setTimeout(function(){
            
                document.querySelector('.alert').remove();
            }, 1000);
}

deleteBook(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

clearFields(){

    document.getElementById('name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('number').value = '';
}

}

//Event Listening

document.getElementById('book-form').addEventListener('submit',function(e){
    
    //Get form values
    
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const number = document.getElementById('number').value;
    
    //Instantiate book
    const book = new Book(name, author, number);

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(name === '' || author === '' || number === '') {
    
        //Error alert
    
        ui.showAlert('please fill in all fields', 'error');
    }
    else{
    
    //Add Book to list
    
    ui.addBookToList(book);
    
    //show success
    
    ui.showAlert('Book Added', 'success');
    
    // Clear Fields
    
    ui.clearFields();
    }
    
    e.preventDefault();
    })
    
    //Event listening for delete 
    document.getElementById('book-list').addEventListener('click', function(e){

    //Instantiate UL
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);
    
    //Show Message
    
    ui.showAlert('Book Removed!', 'success');
    
    
    e.preventDefault();
    });
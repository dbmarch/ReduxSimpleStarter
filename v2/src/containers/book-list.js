import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li 
                   key={book.title} 
                   onClick={() => this.props.selectBook(book)}
                   className ="list-group-item" > 
                    {book.title} 
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
            { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps (state) {
   // what ever gets returned will show up as props inside of BookList
   //console.log (state);

   return  {
       books: state.books 
   };
}

//Anything returned winds up to be a prop on bookList container
// we will be able to call 'selectbook'
function mapDispatchToProps(dispatch) {
    return bindActionCreators ({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
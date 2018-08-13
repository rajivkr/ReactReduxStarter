import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/actionCreator';

class BookList extends Component {
    renderList = () => {
        return this.props.books.map((book) => (
            <li className="list-group-item" key={book.title} onClick={() => this.props.selectBook(book)}>{
                book.title
            }</li>
        ));
    };

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return { books: state.books }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectBook }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
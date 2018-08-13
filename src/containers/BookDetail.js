import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        book: state.book
    };
}

class BookDetail extends Component {
    render() {
        const { book } = this.props;
        return (
            <div>
                {book.title && <p>{book.title} has been selected</p>}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(BookDetail);
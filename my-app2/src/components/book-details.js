import React, {Component} from 'react';//react komponenta glavna metoda je render
import {connect} from 'react-redux';//kontejneri (smart) komponente, povezani su sa reduxom
import { bindActionCreators } from 'redux';

class BookDetails extends Component{

    render(){
        if(!this.props.book){
            return <div>Select a book</div>
        }
        return(
            <div>
            <h3>{this.props.book.title}</h3>
            <div>{this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps (state)
{
    return{
        //sve sto ovde nazove ide u props
        //reduxov activeBook reducer mapira na this.props.book
        book: state.activeBook //na ovo se subscrajbuje
    }
}


export default connect(mapStateToProps)(BookDetails);//connect povezuje komponentu sa reduxpm a kako,preko nase fje
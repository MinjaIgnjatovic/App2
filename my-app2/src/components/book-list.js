import React, {Component} from 'react';//react komponenta glavna metoda je render
import {connect} from 'react-redux';//kontejneri (smart) komponente, povezani su sa reduxom
import { bindActionCreators } from 'redux';
import {selectBook, deleteBook} from '../store/actions';
//reducer je fja koja menja stanje, kao parametre ima trenutno stanje i akciju
//action creatori su fje koje prave akcije
class BookList extends Component{

    render()
    {
        return(
            <ul> 
                {this.renderList()}
             </ul>
        )
    }

    renderList()
    {
        console.log("lala");
          if(!this.props.books)
            {
                return <li>Loading...</li>
            }//props sve sto postavimo komponenti
            return  this.props.books.map(book=>{
            return(
               <li key={book.title}>
                    <span onClick={()=>this.props.selektuj(book)}>{book.title}</span>
                    
                    <button onClick={()=>this.props.brisi(book)}>X</button>
              </li>
            )
        })
    }
}
//state je AppState(redux)

function mapStateToProps (state)
{
    return{
        //sve sto ovde nazove ide u props
        books: state.books //na ovo se subscrajbuje
    }
}

//dispatcher
//mapiramo dispatch akcije na props
function MapDispatchToProps(dispatch)
{
    return bindActionCreators({
        selektuj: selectBook,
        brisi:deleteBook//bind props na action creator
    },dispatch);
}

export default connect(mapStateToProps,MapDispatchToProps)(BookList);//connect povezuje komponentu sa reduxpm a kako,preko nase fje
//connect spaja react i redux
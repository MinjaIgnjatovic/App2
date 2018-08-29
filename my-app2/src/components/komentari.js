import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts,addPost} from '../store/actions';

class Komentari extends Component{
	
	componentDidMount(){
		this.props.ucitajKomentare();
	}

	 render(){
		return(
			
			<div id="contact">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
						<div className="contact-heading">
							<h1>Komentari i utisci posetilaca</h1>
							<ul>
							<table class='table table-hover'>
					<tbody>
								{this.renderList()}
								
								</tbody>
								</table>
						</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}

	renderList(){
		
		if(this.props.comments!=null){
		return(this.props.comments.map(comment=>{
			return(
						<tr id={comment.id}>
							<td><strong>{comment.username}: </strong></td>
							<td><span>{comment.comment}</span></td>
						</tr>
				)
		})
	)
}
}
renderPost(){
	return(
		
	<li key={this.props.newPost.email}>
		<strong>{this.props.newPost.username } </strong>
		<span>{this.props.newPost.comment}</span>
		</li>
	)
}
		          
}

function mapStateToProps (state){
    return{
		comments: state.comments,
		newPost:state.newPost
    }
}
function MapDispatchToProps(dispatch)
{
	return bindActionCreators({
		ucitajKomentare:fetchPosts
	},dispatch);
}
export default connect(mapStateToProps,MapDispatchToProps)(Komentari);
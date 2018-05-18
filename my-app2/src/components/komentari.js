import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts,addPost} from '../store/actions';

class Komentari extends Component{
	
	render(){
		return(
			
			<div id="contact">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
						<div className="contact-heading">
							<h1>Komentari i utisci posetilaca</h1>
							<ul>
								{this.renderList()}
								<li key={this.props.newPost.comment}>
									{this.props.newPost.comment}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}

	renderList(){
		console.log("lalal");
		if(!this.props.posts)
            {
                return <li>Loading...</li>
            }
		return( this.props.posts.map(post=>{
			return(
				<li key={post.email}>
				<strong>{post.username}: </strong>
				<span>{post.comment}</span>
				</li>
			)
		})
	)
	}
}

	function mapStateToProps (state)
{
    return{
        //sve sto ovde nazove ide u props
		posts: state.posts,
		newPost:state.newPost//na ovo se subscrajbuje
    }
}



export default connect(mapStateToProps)(Komentari);
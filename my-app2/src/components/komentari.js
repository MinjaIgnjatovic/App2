import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts,addPost} from '../store/actions';

class Komentari extends Component{
	constructor(props){
		super(props);
		this.state={
			posts:[],
		};
	
	}
	componentDidMount(){
		fetch('http://localhost:3000/comments')
		  .then(response => response.json())
		  .then(json => {
			this.setState({ posts: json });
		  });
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
								
								{this.renderList()}
								{this.renderPost()}
						</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}

	renderList(){
	console.log(this.state);
		const {posts}=this.state;
		//this.props.posts=posts;
		return(posts.map(post=>{
			return(
				
				<li key={post.email}>
				<strong>{post.username}: </strong>
				<span>{post.comment}</span>
				</li>
			)
		})
	)
}
renderPost(){
	return(
	<li key={this.props.newPost.email}>
		<strong>{this.props.newPost.username}: </strong>
		<span>{this.props.newPost.comment}</span>
		</li>
	)
}
		
            
                
            
	
/*
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
								
								
						</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}

	renderList(){
	
		if(!this.props.posts)
            {
                return <li>Loading...</li>
            }
		return(this.props.posts.map(post=>{
			return(
				
				<li key={post.email}>
				<strong>{post.username}: </strong>
				<span>{post.comment}</span>
				</li>
				
			)
		})
	)
	}*/
}


	function mapStateToProps (state)
{
    return{
       
		posts: state.posts,
		newPost:state.newPost
    }
}



export default connect(mapStateToProps)(Komentari);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts,addPost} from '../store/actions';


class Komentarform extends Component{
   constructor(props){
	   super(props);
	   this.state={
		   username: '',
		   email: '',
		   comment: ''
	   };

	   this.onChange=this.onChange.bind(this);
	   this.onSubmit=this.onSubmit.bind(this);
   }

   onChange(e){
	   this.setState({[e.target.name]:e.target.value});
	   
   }
	
   onSubmit(e){
	e.preventDefault();

	const post={
		username: this.state.username,
		email: this.state.email,
		comment: this.state.comment
	};
	//this.state=post;
   this.props.dodaj(post);
	
	
	
	fetch("http://localhost:3000/comments",{
		method:'POST',
		headers:{
			'content-type':'application/json'
		},
		body:JSON.stringify(post)
	})
	.then(res=>res.json())
	.then(data=>console.log(data));

   }
	
	render(){
        return(
            <div id="get-touch">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="get-touch-heading">
						<h2>Ostavite komentar</h2>
						<p>Recite nam Vase utiske</p>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="row">
					<div id="sendmessage">Your message has been sent. Thank you!</div>
					<div id="errormessage"></div>

					<form  onSubmit={this.onSubmit} method="post" role="form" className="form contactForm">
						<div className="col-md-4">
							<div className="form-group">
								<input type="text" name="username" onChange={this.onChange} value={this.state.username} className="form-control" id="username" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
								<div className="validation"></div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<input type="email" className="form-control" name="email" onChange={this.onChange} value={this.state.email} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
								<div className="validation"></div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<textarea className="form-control" name="comment" onChange={this.onChange} value={this.state.comment} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
								<div className="validation"></div>
							</div>
						</div>
						<div className="submit">
							<button className="btn"  type="submit">Dodaj komentar </button>
						</div>
						
					</form>
				</div>
			</div>
		</div>
	</div>

        );
	}
	
}

function mapStateToProps (state)
{
    return{
        
        post: state.newPost 
    }
}
function MapDispatchToProps(dispatch)
{
    return bindActionCreators({
        dodaj: addPost
    },dispatch);
}

export default connect(mapStateToProps,MapDispatchToProps)(Komentarform);
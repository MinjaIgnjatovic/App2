import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Footer extends Component{
    render(){
        return(
            <div id="footer">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="footer-heading">
						<h3><span>about</span> us</h3>
						<p>To explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before. It's time to play the music.</p>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="footer-heading">
						<h3><span>latest</span> news</h3>
						<ul>
							<li><a href="#">Trends don't matter, but techniques do</a></li>
							<li><a href="#">Trends don't matter, but techniques do</a></li>
							<li><a href="#">Trends don't matter, but techniques do</a></li>
							<li><a href="#">Trends don't matter, but techniques do</a></li>
						</ul>
					</div>
				</div>

				<div className="col-md-4">
					<div className="footer-heading">
						<h3><span>follow</span> us on instagram</h3>
						<div className="insta">
							<ul>
								<img src="images/footer/footer1.jpg" alt="" />
								<img src="images/footer/footer2.jpg" alt="" />
								<img src="images/footer/footer3.jpg" alt="" />
								<img src="images/footer/footer4.jpg" alt="" />
								<img src="images/footer/footer5.jpg" alt="" />
								<img src="images/footer/footer6.jpg" alt="" />
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
        );
    }
}

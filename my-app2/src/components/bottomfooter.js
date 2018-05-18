import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Bottomfotter extends Component{
    render(){
        return(
            <div id="bottom-footer" className="hidden-xs">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="footer-left">
						 MyBix Theme. All rights reserved
						
					</div>
				</div>

				<div className="col-md-8">
					<div className="footer-right">
						<ul className="list-unstyled list-inline pull-right">
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#service">Service</a></li>
							<li><a href="#portfolo">Portfolio</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
    }
}
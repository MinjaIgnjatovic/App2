import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class AboutBg extends Component{
    render(){
        return(
            <div id="about-bg">

		<div className="container">
			<div className="row">

				<div className="about-bg-heading">
					<h1>u ministarstvo beer bar-u vam nudimo</h1>
					<p></p>
				</div>

				<div className=" col-xs-12 col-md-3">
					<div className="about-bg-wrapper">
						<span className="count"><h1><span className="border">32</span></h1>
						</span>
						<p>razlicite pivare</p>
					</div>
				</div>

				<div className="col-xs-12 col-md-3">
					<div className="about-bg-wrapper">
						<span className="count"><h1>93</h1></span>
						<p>vrste piva</p>
					</div>
				</div>

				<div className="col-xs-12 col-md-3">
					<div className="about-bg-wrapper">
						<span className="count"><h1>2</h1></span>
						<p>godisnja festivala</p>
					</div>
				</div>

				

			</div>
		</div>

		<div className="cover"></div>

	</div>
        );
    }
}


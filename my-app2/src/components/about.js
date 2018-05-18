import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class About extends Component{
    render(){
        return(
            <div id="about">

		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="about-heading">
						
						<h2>MINISTARSTVO BEER BAR</h2>
						<p>Jedino ministarstvo u gradu gde mozete naci vrhusnku ponudu piva</p>
					</div>
				</div>
			</div>
		</div>

		<div className="container">

			<div className="row">
				<div className="col-xs-12 hidden-sm col-md-5">

					<div className="about-left">
						<img src="./images/about/about1.jpg" alt="" />
					</div>

				</div>

				
				
			</div>

		</div>
	</div>

	
	
    
        );
    }
}


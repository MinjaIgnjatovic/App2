import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Client extends Component{
    render(){
        return(
            <div id="client">
		<div className="container">
			<div className="row">

				<div className="col-sm-4 col-md-2">
					<span></span><img src="images/client/client1.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="images/client/client2.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="images/client/client3.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="images/client/client4.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="images/client/client5.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="images/client/client6.png" alt="" />
				</div>

			</div>
		</div>
	</div>
        );
    }
}
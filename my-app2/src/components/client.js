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
					<span></span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinlGz2IIZnbX4lk8-w3jMDHvAS0VOxfN2dluMwRTTNEtTwy5KHw" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="https://2.bp.blogspot.com/-enoJT_GX0EY/VGA4fOypKYI/AAAAAAABwU0/YxQ9__V_4cw/s1600/LI-KAB-Logo.jpg" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="http://zebrew.rs/images/logo2.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="https://www.kraftlokator.com/wp-content/uploads/2017/05/Crow-Brewery1.png" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGP0vA9ro-13FT-awXWerVgZeZPTge6wZkECpkkaqjMLnbNN8" alt="" />
				</div>

				<div className="col-sm-4 col-md-2">
					<span></span><img src="http://nscraftbeer.com/wp-content/uploads/2016/10/dogma-300x151.png" alt="" />
				</div>

			</div>
		</div>
	</div>
        );
    }
}
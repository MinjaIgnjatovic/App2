import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Slider extends Component{
    render(){
        return(

     <div id="slider" className="flexslider">

		<ul className="slides">
			<li>
				<img src="images/slider/slider1.jpg" />

				<div className="caption">
					<h2><span>an awesome website</span></h2>
					<h2><span>html theme</span></h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<button className="btn">Read More</button>
				</div>

			</li>
			<li>
				<img src="images/slider/slider2.jpg" />

				<div className="caption">
					<h2><span>yet another slide</span></h2>
					<h2><span>html theme</span></h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<button className="btn">Read More</button>
				</div>

			</li>
			<li>
				<img src="images/slider/slider3.jpg" />

				<div className="caption">
					<h2><span>one more slide</span></h2>
					<h2><span>html theme</span></h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					<button className="btn">Read More</button>
				</div>

			</li>
		</ul>

	</div>
        );
    }
}

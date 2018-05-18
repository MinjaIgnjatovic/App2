import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Portfolio extends Component{
    render(){
        return(
            <div id="portfolio">
		<div className="container">
			<div className="row">

				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="portfolio-heading">
						<h2>portfolio</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus magna,malesuada porta elementum vitae.</p>
					</div>
				</div>

			</div>
		</div>

		<div className="portfolio-thumbnail">
			<div className="container-fluid">
				<div className="row">

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio1.jpg" alt=""  />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio2.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio3.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio4.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio5.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>what you see</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio6.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio7.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="images/portfolio/portfolio8.jpg" alt="" />
							<div className="caption">
								<i className="fa fa-search" aria-hidden="true"></i>
								<p>lorem ipsum amet</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
        );
    }
}


import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Servicee extends Component{
    render(){
        return(
            <div id="service">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-md-6 col-md-offset-3">
					<div className="service-heading">
						<h2>Usluge</h2>
						<p>U ponudi se mogu naci najrazlicitije vrste piva sirom sveta</p>
					</div>
				</div>
			</div>
		</div>

		<section className="services-style-one">
			<div className="outer-box clearfix">

				<div className="services-column">
					<div className="content-outer">
						<div className="row clearfix">

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
									<h4>FINANCIAL PLANNING</h4>
									<div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"><i className="fa fa-bar-chart" aria-hidden="true"></i></div>
									<h4>BUSINESS PLANNING</h4>
									<div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"><i className="fa fa-trophy" aria-hidden="true"></i></div>
									<h4>WORK &amp; REDUNDANCY</h4>
									<div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"><i className="fa fa-bullhorn" aria-hidden="true"></i></div>
									<h4>MORTGAGE ADVISOR</h4>
									<div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"><i className="fa fa-lightbulb-o" aria-hidden="true"></i></div>
									<h4>RETIREMENT PLANNING</h4>
									<div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"><i className="fa fa-money" aria-hidden="true"></i></div>
									<h4>SAVING AND INVESTING</h4>
									<div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. </div>
								</div>
							</div>
						</div>
					</div>
				</div>

			
				<div className="content-column clearfix">
					<div className="content-box">
						<div className="inner-box">
							
							<div className="sec-title aligned-right">
								<h2>Our Servi<span>ces</span></h2>
							</div>
							<div className="text">Lorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since 1500s, when an unknown printer specimen book. </div>

							<button className="btn">learn more</button>
						</div>
					</div>
				</div>


			</div>
		</section>

		<div className="service-footer hidden-xs">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="service-footer-left">
							<h3>Need to <span>Consult with us</span> ? Book an appointment</h3>
							<p>The Brady Bunch the Brady Bunch that's the way we all became the Brady Bunch</p>
						</div>
					</div>

					<div className="col-md-5">
						<div className="service-footer-right">
							<button className="btn">book now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
    }
}

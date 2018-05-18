import React, {Component} from 'react';//react komponenta glavna metoda je render
import {connect} from 'react-redux';//kontejneri (smart) komponente, povezani su sa reduxom
import { bindActionCreators } from 'redux';

export default class Header extends Component{

    render(){
        return(
			<html>
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				</head>
				<body>
            <header id="home">

		<section className="top-nav hidden-xs">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="top-left">

							<ul>
								
								<li><a href="https://www.facebook.com/ministarstvobeerbar/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="https://www.instagram.com/ministarstvobeerbar/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							</ul>

						</div>
					</div>

					<div className="col-md-6">
						<div className="top-right">
							<p>Location:<span>Vojvode Vuka 12, Nis</span></p>
						</div>
					</div>

				</div>
			</div>
		</section>

		<div id="main-nav">

			<nav className="navbar">
				<div className="container">


					<div className="navbar-collapse collapse" id="ftheme">

						<ul className="nav navbar-nav navbar-right">
							<li><a href="#home">home</a></li>
							<li><a href="#about">o nama</a></li>
							<li><a href="#service">usluge</a></li>
							<li><a href="#portfolio">fotografije</a></li>
							<li><a href="#contact">utisci posetilaca</a></li>
							
						</ul>

					</div>

				</div>
			</nav>
		</div>

	</header>
	</body>
	</html>

        );
	
	}
}


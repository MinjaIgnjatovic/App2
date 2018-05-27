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
						<h3><span>O</span> nama</h3>
						<p>Nova pivnica u uzem centru grada sa velikim izborom domacih i inostranih pivara zadovoljice sva vasa cula.</p>
						<p>Evropa ili Amerika? Lager ili ale? Kabinet ili Kabinet? Izbor je samo tvoj.</p>
						<br/>
						<p>Kontakt telefon: 069/1234567</p>
					</div>
				</div>

				<div className="col-md-4">
					<div className="footer-heading">
						<h3><span>Najnovije</span> vesti</h3>
						<ul>
							<li><a >U želji da vam, pored srpske, približimo i inostranu craft scenu, od danas je jedna od naših 16 točilica rezervisana samo za strane craft đakonije.</a></li>
							<li><a >Zavrteo se i Coaster Roller. West Coast IPA by RazBeerbriga</a></li>
							<li><a >KORS Brewery je deveta srpska craft pivara koja je svoje utočište našla u Ministarstvu. Grizzly APA i Laraha Hefe Weizen vas čekaju nestrpljivo u svojim flašama od 0,5l.</a></li>
							<li><a >Jack Sparrow kaže da mu je omiljeno. Pirate, najnovija đakonija iz Crow radionice već je na našoj točilici.</a></li>
						</ul>
					</div>
				</div>

				<div className="col-md-4">
					<div className="footer-heading">
						<h3><span>Pratite</span> nas na instagramu</h3>
						<br/>
						<a href="https://www.instagram.com/ministarstvobeerbar/">@ministarstvobeerbar</a>
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

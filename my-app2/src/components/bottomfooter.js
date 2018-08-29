import React, {Component} from 'react';


export default class Bottomfotter extends Component{
    render(){
        return(
            <div id="bottom-footer" className="hidden-xs">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="footer-left">
						 All rights reserved
						
					</div>
				</div>

				<div className="col-md-8">
					<div className="footer-right">
						<ul className="list-unstyled list-inline pull-right">
							<li><a href="#home">Home</a></li>
							<li><a href="#about">O nama</a></li>
							<li><a href="#service">Ponuda</a></li>
							<li><a href="#portfolio">Fotografije</a></li>
							<li><a href="#contact">Komentari</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
    }
}
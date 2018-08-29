import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Portfolio extends Component{

	
	render(){
        return(
			
            <div id="portfolio">
		<div className="container">
			<div className="row">

				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="portfolio-heading">
						<h2>fotografije</h2>
						
					</div>
				</div>

			</div>
		</div>
		
		<div className="portfolio-thumbnail">
			<div className="container-fluid">
				<div className="row">
				
					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/07/eb/12/ministarstvo-beer-bar.jpg" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://4.bp.blogspot.com/-yN8WuJl31jU/V2bzKgQ_6AI/AAAAAAAAw_U/nlPywszGb20Vcw2gTUHmKsYQhS3tdf5ZACLcB/s1600/ministarstvo.jpg" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/1476465_838650096258068_2931175936551699023_n.jpg?_nc_cat=0&oh=ee4de5b9d2eb3a8bb72a1f72fd23372e&oe=5B8A7046" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUwe8BKTtPFEYtF4nVqjRjj9z2pbhNpXApKyXXzbVggM-EvnJOQ" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://4.bp.blogspot.com/-8rWK8hNJvpw/VxJxPOtC4wI/AAAAAAAAvKg/sprL6vN_PcwwToJKx1ATgeNNnpltGeuPQCKgB/s1600/ministarstvo17%2B%25281%2Bof%2B1%2529.jpg" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/13256114_884290525027358_4040875167138502148_n.jpg?_nc_cat=0&_nc_eui2=AeEo2Z0eevsOMXkcn8YdPj885kGKrofp9m9o2W4hn8rbSvYxDsPE4kQjs5RniMP5z9tT7OpaHwpkkQHApyEALRavD1QFnyosV0-bQgtCzGa5ig&oh=6989342cdecbf7e984456f32194d5dab&oe=5B7DF4B6" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/16830881_1106729652783443_4157475867463794783_n.jpg?_nc_cat=0&_nc_eui2=AeEWFz94_ZUGZAEeTTYkPelLVNyBvvJsehk0KvIdvHeNF7lE6umyd1B-EjG6UaC2hqhsXLspzgR-l9BSGkZa1sNKDwynY4YRxKv0aJzcy_xH8Q&oh=200b83b53215dfad031caae8be44914d&oe=5B874E08" />
							
						</div>
					</div>

					<div className="col-xs-6 col-sm-3 col-md-3">
						<div className="item">
							<img src="https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/12715230_818338008289277_3200668298982423765_n.jpg?_nc_cat=0&_nc_eui2=AeH-hSB9yYw8ilCichvWlsTcZE31BaaLfJsyZAreMrKSB_CnGMffTdw_Ux8GM-CIaWwG4x1zNdD88_VlpAPIJnaufTn53ef-DMn6nF12AiHD0Q&oh=736856902965b3e2edcef357c9964439&oe=5BBB58E9" />
							
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
        );
	}
	renderIzbor(){
		/*return(
			
		<li key={this.props.pronadji.name}>
			<strong>{this.props.pronadji.name } </strong>
			
			</li>
		)*/
	}
	
}

export default (Portfolio);


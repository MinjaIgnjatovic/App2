import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {pronadji} from '../store/actions';
import {fetchBreweries,selectBrewery,findBeer} from '../store/actions'

class Servicee extends Component{
   
	
	componentWillMount()	{
		this.props.ucitajPodatke();
	}

	klik(brewery){
		
		this.props.selectBrewery(brewery)
		var modal = document.getElementById('myModal');
		var btn = document.getElementById("myBtn");
		var span = document.getElementsByClassName("close")[0];
		modal.style.display = "block";
     	span.onclick = function() {
   			 modal.style.display = "none";
		}
		window.onclick = function(event) {
   		 if (event.target == modal) {
        		modal.style.display = "none";
    	}
		}
		
	
	}

	onSubmit(e){
		e.preventDefault();
	}
	    

	render(){

		const {breweries}=this.props;

        return(
			
    <div id="service">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-md-6 col-md-offset-3">
					<div className="service-heading">
						<h2>Ponuda</h2>
					
					</div>
				</div>
			</div>
		</div>
	<div>
	<div id="myModal" class="modal">
	  
<div class="modal-dialog modal-lg" role="document">
 <div class="modal-content">
   <div class="modal-header">
   
	 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
	
	</div>
	{this.renderModal()}
	<div class="modal-footer">
        
      </div>
	</div>
	</div>
	</div>
	
		<section className="services-style-one">
			<div className="outer-box clearfix">
				<div className="services-column">
					<div className="content-outer">	
					<div className="row clearfix">
						{this.renderList()}
					</div>	
					</div>
				</div>
				<div className="content-column clearfix">
				<br/>
				<br/>
				<div className='pronadjen'>
				<h2>Potrazite vas <span>savrsen spoj</span></h2>
				
				</div>
				
					<div className="content-box">
							
						<div className="inner-box">

						
							<form  onSubmit={this.onSubmit} method="post" role="form">
							
							<div className="text">Izaberite opcije a mi cemo izdvojiti iz ponude savrsen izbor za vas! </div>
							<div className='pronadjen'>
							{this.renderFoundBeers()}
							<br/>
							</div>
							<div className="text">Procenat alkohola: </div>
							<select id="procenat" name="procenat" >
							<option disabled selected value></option>
								<option value="5">5%</option>
								<option value="7">7%</option>
								<option value="10">10%</option>
								<option value="12.5">12.5%</option>

						     </select>	
							 <div className="text">Boja: </div>
							 <select id='boja' name="boja" >
							 	<option disabled selected value></option>
							 	<option value="tamno">Tamno</option>
							 	<option value="svetlo">Svetlo</option>
							 </select>	

							 <div className="text">IPA/APA: </div>
							 <select id='ipaapa' name="ipaapa"  >
							 	<option disabled selected value></option>
							 	<option value="ipa">IPA</option>
							 	<option value="apa">APA</option>
							 </select>

							<br />
							<br />							
							<p><button className="btn"  onClick={this.props.findBeer}>Pronadji</button></p>
					     </form>
						 <br/>
						 <br/>
						
						</div>
					</div>
				</div>
			</div>
		</section>		
	</div>
	</div>

		);
    }
renderFoundBeers(){
	if(this.props.foundBeers!=null){
			return this.props.foundBeers.map(beer=>{
				return(
				<div key={beer.id} id='foundBeer'>
					
					<div id='slika'><img id='slikaa' src={beer.imgsrc}/></div>
					<div>
					<p>Naziv: {beer.name}</p>
					<p>Proizvodjac: {beer.company}</p>
					<br/>
					</div>
				</div>			
			)})
		}		
}
renderList(){
	
	if(this.props.breweries!=null){
		console.log(this.props.breweries)
	return this.props.breweries.map(brewery=>{
		return(			
			<div key={brewery.id} className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<a id='myBtn' onClick={()=>{this.klik(brewery)}}>
									<div className="text"><img id='imgg'  src={brewery.imgsrc}/></div>
									</a>	
								</div>
							</div>
					
		)
	})
}
}

renderModal()
{
	if(this.props.selectedBrewery!=null){
		return (  
      <div class="modal-body">

        <div class="row">
                        <div class="col-md-4">						
                            <img src={this.props.selectedBrewery.imgsrc} class="img-responsive" alt="a" />
                        </div>
                        <div class="col-md-8">
          			      <div class="tabbable"> 
        					<ul class="nav nav-tabs">
        						<li class="active"><a href="#tab1" data-toggle="tab">O nama</a></li>
        					</ul>
        					<div class="tab-content">
        						<div class="tab-pane active" id="tab1">
									<br/>
									
									{this.props.selectedBrewery.description}
									<br/>
									<div id='tabelica'>
										<table class='table table-hover'>
										<tbody>
										<tr>
											<th></th>
											<th>Naziv</th>
											<th>Procenat alkohola</th>
											<th>Boja</th>
											<th>IPA/APA</th>
										</tr>
										
										{this.props.selectedBrewery.piva.map(pivo=>{
											return(
											<tr key={pivo.id}>
												<td><div class='slicka'><img class='slicka'src={pivo.imgsrc}/></div></td>
												<td>{pivo.naziv}</td>
												<td>{pivo.procenat}</td>
												<td>{pivo.boja}</td>
												<td>{pivo.ia}</td>
											</tr>
										)})}
										</tbody>
										</table>
									</div>

								
								</div>
        					</div>
        				</div>                        
          
          				</div>
                    </div>
        <div class="container"></div>   
      </div>
		)
	}
}
}
function MapStateToProps(state){
	return{
		breweries: state.breweries,
		selectedBrewery:state.selectedBrewery,
		foundBeers: state.foundBeers
		
	}
}

function MapDispatchToProps(dispatch)
{
	return bindActionCreators({
		ucitajPodatke:fetchBreweries,
		selectBrewery:selectBrewery,
		findBeer:findBeer
		
	},dispatch);
}


export default connect(MapStateToProps,MapDispatchToProps)(Servicee);
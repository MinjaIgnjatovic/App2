import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {pronadji} from '../store/actions';

class Servicee extends Component{
   
	constructor(props){
		super(props);
		/*this.state={
			procenat:'',
			boja:'',
			ipaapa:''
		};*/
		this.state={
			found:{}
		};
		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
		console.log(e.target.value);
	}

	onSubmit(e){
		
		e.preventDefault();
		/*const izbor={
			procenat: this.state.procenat,
			boja: this.state.boja,
			ipaapa: this.state.ipaapa
		}
		
		this.props.nadji(izbor);*/

		var obj=null;
		const procenat=document.getElementsByName("procenat")[0].value;
		 const boja=document.getElementsByName("boja")[0].value;
		 const ipaapa=document.getElementsByName("ipaapa")[0].value;
		 fetch("http://localhost:3000/beers?alcohol=" +procenat+"&color="+boja+"&ipa-apa="+ipaapa)
            .then(response=>{
                const res=response.json()
                .then(res=>{              
					//this.setState({ found:res} );
					console.log(res);
					this.setState(res);
					this.props.nadji(this.state);        
                });
            })    
		 
			
		 
	}

	render(){
        return(
            <div id="service">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-md-6 col-md-offset-3">
					<div className="service-heading">
						<h2>Ponuda</h2>
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
								<div className="icon-box"><img src="" /></div>
									<h4>CREW BREWERY</h4>
									<div className="text">Crew Republic zastupa  craft piva izuzetnog ukusa. Stalno smo u potrazi za najboljim sortama hmelja u svetu i stvaranjem novih receptura. Konkretno za sve one koji nisu zadovoljni "standardizovanim pivom". </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"></div>
									<h4>KORS</h4>
									<div className="text">Mini pivara Kors osnovana je u septembru 2015. godine. Za kratko vreme uz pomoć našeg malog ali efikasnog tima, od projektanta, građevisnkih radnika, tehnologa do osoblja za održavanje higijene, uspeli smo da uz naporan rad napravimo vrhunsko pivo od prirodnih sastojaka bez filtracije i pasterizacije. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"></div>
								<h4>DOGMA</h4>
									<div className="text">Volimo pivo, ali još više volimo da ga delimo sa prijateljima. U fermentorima mešamo znanje, ljubav, maštu, iskustvo ali i lucidnost. Dogmu ćemo stvarati sve dok bude priča koje će uz naša piva biti bolje ispričane. Za nas je Dogma osećaj kada vas vidimo da naručite još jednu turu. </div>
								</div>
							</div>

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"></div>
									<h4>BREWDOG</h4>
									<div className="text">Nasa najsavremenija eko-pivara nalazi se na lokaciji zelenog polja u Ellonu, severno od Aberdeena. Jedna je od najnaprednijih na svetu i odavde se stalno trudimo da osporimo predrasude ljudi o tome kakvo je pivo i kako to može ukusiti.</div>
								</div>
							</div>

							

							<div className="service-block col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="inner-box">
									<div className="icon-box"></div>
									<h4>KABINET</h4>
									<div className="text">Sebe smatramo pasioniranim gurmanima. U potrazi za novim i neobičnim ukusima, u želji da ponudimo kvalitetno craft pivo od biranih sastojaka stvorili smo Kabinet Brewery. Naše pivo se proizvodi u Nemenikućama, na sunčanoj padini u podnožju Kosmaja.</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			
				<div className="content-column clearfix">
				
					<div className="content-box">
					
						<div className="inner-box">
							<form  onSubmit={this.onSubmit} method="post" role="form">
							<div className="sec-title aligned-right">
								<h2>Potrazite vas <span>savrsen spoj</span></h2>
							</div>
							<div className="text">Izaberite opcije a mi cemo izdvojiti iz ponude savrsen izbor za vas! </div>
							
							<div className="text">Procenat alkohola: </div>
							<select name="procenat" onChange={this.onChange}>
							<option disabled selected value></option>
								<option value="5">5%</option>
								<option value="7">7%</option>
								<option value="10">10%</option>
								<option value="12.5">12.5%</option>

						     </select>	
							 <div className="text">Boja: </div>
							 <select name="boja" onChange={this.onChange} >
							 	<option disabled selected value></option>
							 	<option value="tamno">Tamno</option>
							 	<option value="svetlo">Svetlo</option>
							 </select>	

							 <div className="text">IPA/APA: </div>
							 <select name="ipaapa" onChange={this.onChange} >
							 	<option disabled selected value></option>
							 	<option value="ipa">IPA</option>
							 	<option value="apa">APA</option>
							 </select>

							<br />
							<br />		
												
							<p><button className="btn" type='submit'>Pronadji</button></p>
							
					     </form>
						 <br/>
						 <br/>
						 <div className='pronadjen'>
						 <p>Rezultat pretrage</p>
							<p>Naziv: <strong>{this.props.pronadjen.name}</strong></p>
							<p>Proizvodjac: {this.props.pronadjen.company}</p>
							
							</div>
						</div>
					</div>
				</div>
				

			</div>
		</section>

		

		
	</div>
        );
    }
}

function mapStateToProps(state){
	return{
		pronadjen: state.pronadji
	}
}

function MapDispatchToProps(dispatch)
{
	return bindActionCreators({
		nadji: pronadji
	},dispatch);
}

export default connect(mapStateToProps,MapDispatchToProps)(Servicee);
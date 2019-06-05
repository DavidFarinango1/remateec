import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
// import Header from '../../header/container/headercontainer'
import OneDescription from './oneprod/onedescription';
import MoreDescription from './oneprod/moredescription';

class Description extends Component {
    constructor(props){
        super(props);
        this.state ={
            autor_email: '',
            p_name: '',
            p_categories: '',
            p_price: '',
            p_shortdetails: '',
            // p_title_general_description1: '',
            p_details_general_description1: '',
            // p_title_general_description2: '',
            p_details_general_description2: '',
            // p_title_general_description3: '',
            // p_details_general_description3: '',
            // p_myubication: '',
            p_logistic_seller: '',
            p_principal_image: '',
            p_secundary_image2: '',
            p_secundary_image3: '',
        }
    }
    componentDidMount(){
        const id = this.props.id
        this.listener5 = this.props.firebase.dothisdb().collection('products').doc(id).get()

            .then((doc)=>{
                console.log('documento tomado')
                if(doc.exists){
                    this.setState({
                        autor_email: doc.data().autor_email,
                        p_name: doc.data().p_name,
                        p_categories: doc.data().p_categories,
                        p_price: doc.data().p_price ,
                        p_shortdetails: doc.data().p_shortdetails ,
                        // p_title_general_description1: doc.data().p_title_general_description1 ,
                        p_details_general_description1: doc.data().p_details_general_description1 ,
                        // p_title_general_description2: doc.data().p_title_general_description2 ,
                        p_details_general_description2: doc.data().p_details_general_description2 ,
                        // p_title_general_description3: doc.data().p_title_general_description3 ,
                        // p_details_general_description3: doc.data().p_details_general_description3,
                        p_myubication: doc.data().p_myubication ,
                        p_logistic_seller: doc.data().p_logistic_seller ,
                        p_principal_image: doc.data().p_principal_image ,
                        p_secundary_image2: doc.data().p_secundary_image2 ,
                        p_secundary_image3: doc.data().p_secundary_image3 ,
                    })
                }else{
                    console.log('el documento no existe')    
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    // componentWillUnmount(){
    //     this.listener5();
    //     // this.listener4();
    // }
    
    
    
    handleClikc=event=>{
        console.log(this.props.id)
    }
    render(){
        return(
            <div>
                <OneDescription oneproduct={this.state} />
                <MoreDescription oneproduct={this.state} />
                {/* <Header /> */}
                {/* <h1 onClick={this.handleClikc}>prueba prueba</h1>
                <p>Nombre:</p>
                <p>{this.state.p_name}</p>
                <p>Correo:</p>
                <p>{this.state.p_categories}</p> */}
            </div>
        )
    }
}
export default withFirebase(Description);
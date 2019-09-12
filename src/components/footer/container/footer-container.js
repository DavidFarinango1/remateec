import React,{Component} from 'react';
import Footer from '../components/footer.js';
import { withFirebase } from '../../../Firebase';

class FooterContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue_contact_name: '',
            inputValue_contact_email: '',
            inputValue_contact_cell: '',
            inputValue_contact_message: '',
            inputValue_more_products: '',
        }
    }
    onChangeComent = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChangeProd = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    actionCreateComent = event =>{
        const { inputValue_contact_name,
            inputValue_contact_email,
            inputValue_contact_cell,
            inputValue_contact_message,
            } = this.state;
        event.preventDefault()
            this.props.firebase
                .dothisdb()
                .collection('comments')
                .add({
                    date: new Date(),
                    contact_name: inputValue_contact_name,
                    contact_email: inputValue_contact_email,
                    contact_cell: inputValue_contact_cell,
                    contact_message: inputValue_contact_message,
                })
                .then(()=>{
                    alert("Gracias por tu comentario , responderemos lo mas pronto posible");
                    this.setState({
                        inputValue_contact_name: '',
                        inputValue_contact_email: '',
                        inputValue_contact_cell: '',
                        inputValue_contact_message: '',
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
    }
    actionCreateProd = event =>{
        const { inputValue_more_products,
            } = this.state;
        event.preventDefault()
            this.props.firebase
                .dothisdb()
                .collection('suggestionprods')
                .add({
                    date: new Date(),
                    suggestion_prod: inputValue_more_products,
                })
                .then(()=>{
                    alert("Gracias por tu sugerencia, añadiremos tu producto lo mas pronto posible");
                    this.setState({
                        inputValue_more_products: '',
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
    }
    render(){
        return(
            <div>
                <Footer  
                state={this.state}
                createComent={this.actionCreateComent}
                onActionChangeComent = {this.onChangeComent}
                createComentAboutProduct = {this.actionCreateProd}
                onActionChangProducts = {this.onChangeProd}
                />
            </div>    
        )
    }
}


export default withFirebase(FooterContainer);
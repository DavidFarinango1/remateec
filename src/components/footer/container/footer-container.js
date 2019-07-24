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
        }
    }
    onChangeComent = event=>{
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
    render(){
        return(
            <div>
                <Footer  
                state={this.state}
                createComent={this.actionCreateComent}
                onActionChangeComent = {this.onChangeComent}
                />
            </div>    
        )
    }
}


export default withFirebase(FooterContainer);
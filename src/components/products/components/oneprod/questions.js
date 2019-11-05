import React, {PureComponent} from 'react';
import './questions.css'

class Questions extends PureComponent{
    render(){
        const{
            inputValue_questions,
        }=this.props.state;
        return(
        <div>
            <div>
                <div className="SBtitle2" style={{textAlign: 'left'}}>Preguntas y respuestas</div>
                <div className="SBtitle2">
                    <div style={{display: 'flex', alignItems: 'baseline'}}>
                        <input name="inputValue_questions" value = {inputValue_questions} onChange={this.props.onActionChange} className="form-control form-control-sm input_question_value" placeholder="Escribe una pregunta..."  type="text" maxLength="150" required></input>
                        <div className="">
                            <button 
                            // className="question_submit"
                            
                            type="button" className="btn btn-outline-primary question_submit"
                            // onClick={() => this.props.handleOnAddUnit(this.props.proddetails)}
                            >
                            Enviar pregunta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Questions;
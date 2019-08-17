import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import './footer.css';

class Footer extends React.Component{
    render(){
        const {
            inputValue_contact_name,
            inputValue_contact_email,
            inputValue_contact_cell,
            inputValue_contact_message,
        } = this.props.state; 
        return(
        <div className="footercontainer">
            <div className="contact">
                <section className="contact-box1">
                    <h3>Comentarios y sugerencias:</h3>
                    <section className="contact-box-client">
                        <form onSubmit={this.props.createComent} className="client">
                            <section className="client-info">
                                <h5> Nombre:</h5>
                                <input name="inputValue_contact_name" value = {inputValue_contact_name} onChange={this.props.onActionChangeComent} className="form-control mr-sm-8 footerbutton" type="text" maxLength="100" size="50px" required/>
                            </section>
                            <section className="client-info">
                                <h5> Correo:</h5>
                                <input name="inputValue_contact_email" value = {inputValue_contact_email} onChange={this.props.onActionChangeComent} className="form-control mr-sm-8 footerbutton" type="text" maxLength="100" size="50px" required />                           
                            </section>
                            <section className="client-info">
                                <h5> Celular:</h5>
                                <input name="inputValue_contact_cell" value = {inputValue_contact_cell} onChange={this.props.onActionChangeComent} className="form-control mr-sm-8 footerbutton" type="text" maxLength="15" size="50px" required />                           
                            </section>
                            <section className="client-info">
                                <h5> Mensaje:</h5>
                                <textarea name="inputValue_contact_message" value = {inputValue_contact_message} onChange={this.props.onActionChangeComent} className="form-control form-control-sm footertex" maxLength="500" data-length="500" rows="3" placeholder="Inserta aquí tu comentario o sugerencia" required />
                            </section>
                            <button type="submit" className="btn btn-light"><strong>Enviar</strong></button> 
                        </form>
                    </section>
                </section>
                <section className="contact-box2">
                    {/* <h3>Siguenos en nuestras redes sociales:</h3><br /> */}
                    <h3>Contáctanos directamente al:</h3><br />
                    <div className="contact_boxp">
                        <h4>Teléfonos:</h4><br />
                        <p>0996114197/2581496</p>< br/> <br />
                        <h4>Correo:</h4><br />
                        <p>davidfarinango24.1995@gmail.com</p>
                    </div>
                    <section className="socialprincipal">
                        {/* <a href="" className="social-link1 Facebook"></a>
                        <a href="" className="social-link1 Twitter"></a>
                        <a href="" className="social-link1 Instagram"></a>
                        <a href="" className="social-link1 Github"></a> */}
                    </section>
                </section>
            </div>
            <footer className="footer">
                <div className="footerp">
                    <Link to={ROUTES.PRIVACITY}>
                        <p className="navbar-brand footerp2">Aviso de privacidad</p>
                    </Link>
                    <Link to={ROUTES.TERMSANDCONDITIONS}>
                        <p className="navbar-brand footerp2">Terminos y condiciones</p>
                    </Link>
                </div>
                <p>Pagina diseñada por: Ing. David Farinango</p>
            </footer>
        </div>
        )
    }
}
export default Footer;
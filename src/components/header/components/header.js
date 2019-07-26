import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import './header.css';
import { List as list } from 'immutable';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { bindActionCreators } from 'redux';

import { withFirebase } from '../../../Firebase'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import Navigation from '../../Navigation'


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            authUser: null,
            image: "./images/users/usuario.png",
            list: [ {nombre: 'perro', apellido: 'gato'},{nombre: 'perrito', apellido: 'gat'}, {nombre: 'perra', apellido: 'cat'}, {nombre: 'gato', apellido: 'cat'} ],
            // list: [ 'perro', 'gato','perrito',  'gat', 'perra', 'cat'],
            query: '',
            result: [],
        };
    }
    componentDidMount(){
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({ authUser })
            : this.setState({ authUser:null });
        })
        this.listener2 = this.props.firebase.auth.onAuthStateChanged(image =>{
            if(image){
                if(image.photoURL){
                    return this.setState({image: image.photoURL})
                }else{
                    return this.setState({image: "/images/users/usuario_auth.png"});
                }
            }else{
                return this.setState({image: "/images/users/usuario.png"});
            }
        })
        this.listener3 = 
            this.props.firebase
                .dothisdb()
                .collection('products')
                // .where('autor_uid' , '==', authUser.uid)
                .onSnapshot((snapShots)=>{
                    this.setState({
                        list: snapShots.docs.map((doc)=>{
                            return { 
                                // id: doc.id, 
                                data: doc.data()}
                        })
                    })
                },error=>{
                    console.log(error)
                })
    }
    componentWillUnmount(){
        this.listener();
        this.listener2();
        // this.listener3();
    }
    onSearch=event=>{
        event.preventDefault()
        let search = this.state.query
        if(search){
            let result = this.state.list.filter((item)=>{
                return item.data.p_name.includes(search)
            })
            this.setState({
                result,
            })
            console.log(this.state.result)
        }else{
            console.log('no hay nada')
        }

        // this.listener3 = 
        //     this.props.firebase
        //         .dothisdb()
        //         .collection('products')
        //         .where('p_name' , '==', search)
        //         .onSnapshot((snapShots)=>{
        //             this.setState({
        //                 list: snapShots.docs.map((doc)=>{
        //                     return { 
        //                         // id: doc.id, 
        //                         data: doc.data()}
        //                 })
        //             })
        //         },error=>{
        //             console.log(error)
        //         })
        // let searchResults = list()
        // if (search){
        //     const productList1 = this.state.list
        //     searchResults= productList1.filter((item)=>(
        //         item.toLowerCase().includes(search.toLowerCase())
        //     ))
        // }else{
        //     console.log('no hay nada')
        // }
        // return{
        //     search: searchResults,
        // }
        // event.preventDefault();
        // this.props.history.push(ROUTES.SIGN_IN);
        // this.props.history.push(`/search/${this.state.query}`);
        // this.props.history.push('/search/'+this.state.query);
        // this.props.history.push({pathname: '/search', search: `?query=${this.state.query}`})
        // console.log(this.state.query)
        // const query = this.state.query
        // if(query){
        //     const list = this.state.list
        //     const result = list.filter((item)=>(
        //         item.toLowerCase().includes(query.toLowerCase())
        //     ))
        //     return(
        //         this.setState({
        //             result: result
        //         })
        //     )
        //     // return result

        // }else{
        //     console.log('no hay nada')
        // }
        // return(
        //     this.setState({
        //         result: result
        //     })
        // )
    }
    onActionChange3=event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onLog2=e=>{
        console.log(this.state.list)
        console.log(this.state.result)
    }
    render(){
        return(
            <div className="container-fluid navbar-expand-lg navbar-light bg-light">
                <div className="row no-gutters h-principal-box" id="Header">
                    <div className="header1 pb1">
                        <Link to= ''>
                            {/* <img src = "./images/weygo/logo.PNG" alt="logo" /> */}
                            <img src = {`/images/weygo/logo.PNG`} alt="logo" />
                        </Link>
                            {/* <!-- Button trigger modal --> */}
                            <div data-toggle="tooltip" data-placement="bottom" title="Como empezar!">
                                <a className="navbar-brand buttonVentasQuito" href="#" data-toggle="modal" data-target="#exampleModalCenter2">Ventasquito</a>
                            </div>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle2" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle2">Como empezar:</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body headermb">
                                        <li>Primero haz click en ingresa o registrate</li>
                                        <li>Después haz click en Registrate ahora</li>
                                        <li>Una vez registrado te llegara a tu correo personal un enlace que verificará tu cuenta</li>
                                        <li>Verifica tu cuenta e ingresa a ventasquito.com con tu correo y contraseña</li>
                                        <li>Luego haz click en Mi cuenta y registra tu información personal la cual es totalmente privada, la puedes editar cuando quieras</li>
                                        <li>Una vez agregada la información puedes empezar a publicar tus productos o empezar a comprar.</li>
                                        <h5>Ventasquito agradece tu registro.</h5>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="header2 pb2">
                        <form onSubmit={this.onSearch} className="form-inline my-2 my-lg-0 justify-content-center">
                            <a className="mr-10">Todas las categorias:</a>
                            <input name='query' value={this.state.query} onChange={this.onActionChange3} className="form-control mr-sm-8" type="search" placeholder="Busqueda a todos los productos" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                    <p onClick={this.onLog2}>console.log(this.state.list)</p>
                    <div className="header3 pb3">
                        <Navigation authUser={this.state.authUser} />
                        <img className="img_avatar"src ={this.state.image} id='avatar' alt="carro compras" height="35px" weight="35px" />
                    </div>
                    {
                        this.state.result.map((item)=>(
                            <div>
                                <p>{item.data.p_name}</p>
                                <p>{item.data.p_price}</p>
                                <br/>
                                {/* <p>hol</p> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default compose(
    withFirebase,
    withRouter,
    )(Header);

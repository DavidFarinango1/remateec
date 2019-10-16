import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
import CartContainer from '../../Cart/cart_container'
import Tech from '../components/tech'
import Footer from '../../footer/container/footer-container'
import ClothesSelected from '../components/clothesselected'

import { withFirebase } from '../../../Firebase'

class TechContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            tech_prods:[],
            data: '',
            // top: -100,
            id: '',
            filteredData: [],
            filterword: '',
            result2:[],
            show: false,
        }
    }
    componentDidMount(){
        this.listener8 =     
        this.props.firebase
            .dothisdb()
            .collection('products')
            // .orderBy('date', 'desc')
            .where('p_categories' , '==', 'Tecnologia')
            // .limit(3)
            .onSnapshot((snapShots)=>{
                this.setState({
                    tech_prods: snapShots.docs.map((doc)=>{
                        return { id: doc.id, data: doc.data()}
                    })
                })
            },error=>{
                console.log(error)
            })
    }
    setLaptopsComputadoras=()=>{
        this.setState({
            filterword: 'LaptopsComputadoras'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesoriosComputacion=()=>{
        this.setState({
            filterword: 'AccesoriosComputacion'
        },()=>{
            this.readyToFilter()
        })
    }
    setCelularesTablets=()=>{
        this.setState({
            filterword: 'CelularesTablets'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesoriosCelularesTablets=()=>{
        this.setState({
            filterword: 'AccesoriosCelularesTablets'
        },()=>{
            this.readyToFilter()
        })
    }
    setImpresoras=()=>{
        this.setState({
            filterword: 'Impresoras'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesoriosImpresoras=()=>{
        this.setState({
            filterword: 'AccesoriosImpresoras'
        },()=>{
            this.readyToFilter()
        })
    }
    // subcategoria
    setMousesORatones=()=>{
        this.setState({
            filterword: 'Mouse'
        },()=>{
            this.readyToFilter2()
        })
    }
    setTeclados=()=>{
        this.setState({
            filterword: 'Teclado'
        },()=>{
            this.readyToFilter2()
        })
    }
    setRouters=()=>{
        this.setState({
            filterword: 'Router'
        },()=>{
            this.readyToFilter2()
        })
    }
    setRedesInalambricas=()=>{
        this.setState({
            filterword: 'Red'
        },()=>{
            this.readyToFilter2()
        })
    }
    setBateriasLaptops=()=>{
        this.setState({
            filterword: 'Bateria'
        },()=>{
            this.readyToFilter2()
        })
    }
    setParlantesAmplificadores=()=>{
        this.setState({
            filterword: 'Parlante'
        },()=>{
            this.readyToFilter2()
        })
    }
    // setOtrosAccesoriosCompu=()=>{
    //     this.setState({
    //         filterword: 'OtrosAccesoriosCompu'
    //     },()=>{
    //         this.readyToFilter2()
    //     })
    // }
    setAudifonos=()=>{
        this.setState({
            filterword: 'Audifono'
        },()=>{
            this.readyToFilter2()
        })
    }
    setAlmacenamiento=()=>{
        this.setState({
            filterword: 'Memoria'
        },()=>{
            this.readyToFilter2()
        })
    }
    setCables=()=>{
        this.setState({
            filterword: 'Cable'
        },()=>{
            this.readyToFilter2()
        })
    }
    setCargadores=()=>{
        this.setState({
            filterword: 'Cargador'
        },()=>{
            this.readyToFilter2()
        })
    }
    setAudifonos=()=>{
        this.setState({
            filterword: 'Audifono'
        },()=>{
            this.readyToFilter2()
        })
    }

    // finsubcategoria

    readyToFilter=()=>{
        let filterwordReal =this.state.filterword
        if(filterwordReal){
            let result2 = this.state.tech_prods.filter((item)=>{
                // return item.data.p_subcategory.toLowerCase().includes(filterwordReal.toLowerCase())
                return item.data.p_subcategory.toLowerCase() === filterwordReal.toLowerCase()
            })
            this.setState({
                result2,
                show: true,
            },()=>{
                console.log(this.state.result2)
                console.log(this.state.show)
            })
        }else{
            console.log('no hay nada')
        }
    }
    readyToFilter2=()=>{
        let filterwordReal =this.state.filterword
        if(filterwordReal){
            // console.log(this.state.tech_prods)}
            let result3 = this.state.tech_prods.filter((item)=>{
                // return item.data.p_subcategory.toLowerCase().includes(filterwordReal.toLowerCase())
                return item.data.p_name.toLowerCase().includes(filterwordReal.toLowerCase())
            })
            this.setState({
                result2: result3,
                show: true,
            },()=>{
                console.log(this.state.result2)
                console.log(this.state.show)
            })
        }else{
            console.log('no hay nada')
        }
    }

    render(){
        return(        
            <div>
                <Header />
                <div className="StationeryPbox">
                    <div className="StationeryPbox2">
                        <div>
                            <h3 className="CCHselect" onClick={()=>{this.setState({show: false},()=>{console.log(this.state.show)})}}>Tecnologia</h3>
                        </div>
                        <div className="CCPselect" style={{marginLeft: '2em'}}>
                            <p onClick={this.setLaptopsComputadoras}>Laptops, Computadoras o sus partes</p> 
                            <p onClick={this.setAccesoriosComputacion}>Accesorios de computación</p> 
                            <div style={{marginLeft: '1em', fontSize: '.8em'}}>
                                <p onClick={this.setMousesORatones}>Mouses o Ratones</p>
                                <p onClick={this.setTeclados}>Teclados</p>
                                <p onClick={this.setRouters}>Routers</p>
                                <p onClick={this.setRedesInalambricas}>Redes Inalámbricas</p>
                                <p onClick={this.setBateriasLaptops}>Baterias de laptops u otras baterias</p>
                                <p onClick={this.setParlantesAmplificadores}>Parlantes o Amplificadores</p>
                                {/* <p onClick={this.setOtrosAccesoriosCompu}>Otros accesorios celulares</p> */}
                            </div>
                            <p onClick={this.setCelularesTablets}>Celulares o Tablets</p>
                            <p onClick={this.setAccesoriosCelularesTablets}>Accesorios de celulares o tablets</p> 
                            <div style={{marginLeft: '1em', fontSize: '.8em'}}>
                                <p onClick={this.setAudifonos}>Audifonos</p>
                                <p onClick={this.setAlmacenamiento}>Micro SD o Almacenamiento</p>
                                <p onClick={this.setCables}>Cables para celulares</p>
                                <p onClick={this.setCargadores}>Cargadores</p>
                            </div>
                            <p onClick={this.setImpresoras}>Impresoras</p> 
                            <p onClick={this.setAccesoriosImpresoras}>Accesorios de impresoras</p> 
                        </div>
                    </div>
                    <div className="StationeryPbox3">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle StationeryButton3" type="button" id="dropdownMenuButton" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                Tecnologia
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg-right StationeryButton3p" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={this.setLaptopsComputadoras}>Laptops, Computadoras o sus partes</p> 
                                <p className="dropdown-item" onClick={this.setAccesoriosComputacion}>Accesorios de computación</p> 
                                {/* <div style={{marginLeft: '1em', fontSize: '.8em'}}>
                                </div> */}
                                <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setMousesORatones}>Mouses o Ratones</p>
                                <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setTeclados}>Teclados</p>
                                <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setRouters}>Routers</p>
                                <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setRedesInalambricas}>Redes Inalámbricas</p>
                                <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setBateriasLaptops}>Baterias de laptops u otras baterias</p>
                                <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setParlantesAmplificadores}>Parlantes o Amplificadores</p>
                                {/* <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setOtrosAccesoriosCompu}>Otros accesorios celulares</p> */}
                                
                                
                                <p className="dropdown-item" onClick={this.setCelularesTablets}>Celulares o Tablets</p> 
                                <p className="dropdown-item" onClick={this.setAccesoriosCelularesTablets}>Accesorios de celulares o tablets</p> 
                                {/* <div style={{marginLeft: '1em', fontSize: '.8em'}}> */}
                                    <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setAudifonos}>Audifonos</p>
                                    <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setAlmacenamiento}>Micro SD o Almacenamiento</p>
                                    <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setCables}>Cables para celulares</p>
                                    <p style={{marginLeft: '1em', fontSize: '.8em'}} className="dropdown-item" onClick={this.setCargadores}>Cargadores</p>
                                {/* </div> */}

                                <p className="dropdown-item" onClick={this.setImpresoras}>Impresoras</p> 
                                <p className="dropdown-item" onClick={this.setAccesoriosImpresoras}>Accesorios de impresoras</p> 
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="StationeryPbox1">
                        {
                            this.state.show 
                            ?
                            <ClothesSelected
                                products2={this.state.result2}
                            />
                            :
                            <Tech 
                                products2={this.state.tech_prods}
                            />
                            // <p>holi</p>
                        } 
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
// const mapStateToProps=(state, props)=>( {
//     count: state.get('count'),
// })
// const mapDispatchToProps=(dispatch)=>({
//       actions: bindActionCreators(actions, dispatch)
// })
// export default compose(
//     withFirebase,
//     connect(
//         mapStateToProps,
//         mapDispatchToProps,
//     ),
// )(TechContainer);
export default withFirebase(TechContainer);
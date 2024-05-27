import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Chairs from '../components/chairs'
import ChairsSelected from '../components/chairsselected'
import Footer from '../../footer/container/footer-container'

import { withFirebase } from '../../../Firebase'

class ChairsContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            others_prods:[],
            data: '',
            id: '',
            filteredData: [],
            filterword: '',
            result2:[],
            show: false,
        }
    }
    componentDidMount(){
        this.listener9 =     
            this.props.firebase
                .dothisdb()
                .collection('products')
                .where('p_categories' , '==', 'Sillas')
                .onSnapshot((snapShots)=>{
                    this.setState({
                        others_prods: snapShots.docs.map((doc)=>{
                            return { id: doc.id, data: doc.data()}
                        })
                    })
                },error=>{
                    console.log(error)
                })
    }
    setEjecutivas=()=>{
        this.setState({
            filterword: 'Ejecutivas'
        },()=>{
            this.readyToFilter()
        })
    }
    setGerencial=()=>{
        this.setState({
            filterword: 'Gerenciales'
        },()=>{
            this.readyToFilter()
        })
    }
    setGamer=()=>{
        this.setState({
            filterword: 'Gamers'
        },()=>{
            this.readyToFilter()
        })
    }
    setTaburete=()=>{
        this.setState({
            filterword: 'Taburetes'
        },()=>{
            this.readyToFilter()
        })
    }
    setEspera=()=>{
        this.setState({
            filterword: 'Espera'
        },()=>{
            this.readyToFilter()
        })
    }
    setEscritorios=()=>{
        this.setState({
            filterword: 'Escritorios'
        },()=>{
            this.readyToFilter()
        })
    }
    readyToFilter=()=>{
        let filterwordReal =this.state.filterword
        if(filterwordReal){
            let result2 = this.state.others_prods.filter((item)=>{
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
    render(){
        return(        
            <div>
                <Header />
                <div className="StationeryPbox">
                    <div className="StationeryPbox2">
                        <div>
                            <h3 className="CCHselect" onClick={()=>{this.setState({show: false},()=>{console.log(this.state.show)})}}>Sillas, muebles, taburetes</h3>
                        </div>
                        <div className="CCPselect" style={{marginLeft: '2em'}}>
                            <p onClick={this.setEjecutivas}>Ejecutivas, Oficina, Casa</p> 
                            <p onClick={this.setGerencial}>Gerenciales</p> 
                            <p onClick={this.setGamer}>Gamers</p> 
                            <p onClick={this.setTaburete}>Taburetes</p> 
                            <p onClick={this.setEspera}>Sillas de espera</p> 
                            <p onClick={this.setEscritorios}>Escritorios, Mesas</p> 
                        </div>
                    </div>
                    <div className="StationeryPbox3">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle StationeryButton3" type="button" id="dropdownMenuButton" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                Sillas
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg-right StationeryButton3p" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={this.setEjecutivas}>Ejecutivas, Oficina, Casa</p> 
                                <p className="dropdown-item" onClick={this.setGerencial}>Gerenciales</p>                              
                                <p className="dropdown-item" onClick={this.setGamer}>Gamers</p>                              
                                <p className="dropdown-item" onClick={this.setTaburete}>Taburetes</p>                              
                                <p className="dropdown-item" onClick={this.setEspera}>Sillas de espera</p>                              
                                <p className="dropdown-item" onClick={this.setEscritorios}>Escritorios, Mesas</p>                              
                            </div>
                        </div>
                    </div>
                    <div className="StationeryPbox1">
                        {
                            this.state.show 
                            ?
                            <ChairsSelected
                                products2={this.state.result2}
                            />
                            :
                            <Chairs 
                                products2={this.state.others_prods}
                            />
                        }
                    </div>
                </div>
                <div>
                <div className="BlogSB1"> 
                   <div className="BSB1_2">
                       <h4 className="BSB1_2H">Catálogo:</h4>
                       <p className="BSB1_2P CCp">
                        Tenemos una gran variedad de sillas ejecutivas, tipo gerenciales, tipo gamers, taburetes, tandems de espera entre otros, llamanos o escribenos al whatsapp 0991200163 para enviarte toda la información más facilmente<br/><br/>Si quieres ver nuestro catálogo completo haz clic en el siguiente link <br/>
                       </p>
                       <a download="campaña9.pdf"  href="https://firebasestorage.googleapis.com/v0/b/remateec-b7f6d.appspot.com/o/catalogo%2FCAT%C3%81LOGO%20SILLAS-MUEBLES%20(1)_compressed.pdf?alt=media&token=c227ddaf-bb2f-4c0d-8031-86e3fef19ae7" target='_blank' >Descargar aqui!</a><br/>   
                       <a className='BSB1_2P CCp SignIn_problems'> Precios y stock pueden variar sin previo aviso, consulte con su asesor.</a>
                       <span className="iconHeart">♥</span>
                   </div>
                   
                   <div className="BSB1_1">
                       <img style={{objectFit: 'contain'}} className="Blogimg"src="./images/others/catalogo2021.jpeg" alt="Nuestra historia"/>
                    </div> 
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withFirebase(ChairsContainer);
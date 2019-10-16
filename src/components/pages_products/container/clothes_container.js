import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Clothes from '../components/clothes'
import ClothesSelected from '../components/clothesselected'
import Footer from '../../footer/container/footer-container'

import { withFirebase } from '../../../Firebase'

class ClothesContainer extends Component{
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
                .where('p_categories' , '==', 'Ropa')
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
    setBlusa=()=>{
        this.setState({
            filterword: 'Blusas'
        },()=>{
            this.readyToFilter()
        })
    }
    setSacos=()=>{
        this.setState({
            filterword: 'SacosChompas'
        },()=>{
            this.readyToFilter()
        })
    }
    setVestido=()=>{
        this.setState({
            filterword: 'Vestidos'
        },()=>{
            this.readyToFilter()
        })
    }
    setZapatos=()=>{
        this.setState({
            filterword: 'Zapatos'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesorios=()=>{
        this.setState({
            filterword: 'AccesoriosMujer'
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
                            <h3 className="CCHselect" onClick={()=>{this.setState({show: false},()=>{console.log(this.state.show)})}}>Ropa de mujer</h3>
                        </div>
                        <div className="CCPselect" style={{marginLeft: '2em'}}>
                            <p onClick={this.setBlusa}>Blusas y Camisas</p> 
                            <p onClick={this.setSacos}>Sacos y Chompas</p> 
                            <p onClick={this.setVestido}>Vestidos y pantalones</p> 
                            <p onClick={this.setZapatos}>Zapatos</p> 
                            <p onClick={this.setAccesorios}>Accesorios de mujer</p> 
                        </div>
                    </div>
                    <div className="StationeryPbox3">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle StationeryButton3" type="button" id="dropdownMenuButton" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                Ropa
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg-right StationeryButton3p" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={this.setBlusa}>Blusas y Camisas</p> 
                                <p className="dropdown-item" onClick={this.setSacos}>Sacos y Chompas</p>                              
                                <p className="dropdown-item" onClick={this.setVestido}>Vestidos y pantalones</p>                              
                                <p className="dropdown-item" onClick={this.setZapatos}>Zapatos</p>                              
                                <p className="dropdown-item" onClick={this.setAccesorios}>Accesorios de mujer</p>                              
                            </div>
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
                            <Clothes 
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
                        Tenemos una gran variedad de vestidos, blusas, zapatos, correas, camisas, camisetas, entre otros, escoge tu prenda y llamanos o escribenos al Whatsapp 0996114197 <br/><br/>Si quieres ver más prendas haz clic en el siguiente link <br/>
                       </p>
                       <a download="campaña9.pdf"  href="https://firebasestorage.googleapis.com/v0/b/ventasquito-4da99.appspot.com/o/catalogo%2FCAMP9.pdf?alt=media&token=cf9363c3-bff7-4878-846a-5b53ff96f0c8" target='_blank' >Descargar aqui!</a><br/>   
                       <span className="iconHeart">♥</span>
                   </div>
                   <div className="BSB1_1">
                       <img style={{objectFit: 'contain'}} className="Blogimg"src="./images/others/jolie.PNG" alt="Nuestra historia"/>
                    </div> 
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withFirebase(ClothesContainer);
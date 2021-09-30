import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
import Header from '../../header/container/headercontainer'
import ItemSeller from '../components/myitems'
import UploadProducts from '../components/seller/uploadproducts'
import OnlyMyProducts from '../components/seller/onlymyproducts'
import './myproductscontainer.css'
import Footer from '../../footer/container/footer-container'


class Myproducts extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            inputValue_mybussinessname: '',
            inputValue_mycell: '',
            inputValue_mygps: '',
            inputValue_name: '',
            inputValue_categories: '',
            inputValue_categories1: '',
            inputValue_price: '',
            inputValue_shortdetails: '',
            details_general_description1: '',
            details_general_description2: '',
            logistic_seller: '',
            edit: false,
            id: '',
            authUser: null,
            uploadValue0: 0,
            picture0: './images/others/signomas.png',
            uploadValue2: 0,
            picture2: './images/others/signomas.png',
            uploadValue3: 0,
            picture3: './images/others/signomas.png',
            valor: '',
            valor2: '',
            valor3:'',
            // valor4:'',
            // valor5:'',
        };
    }
    handleUpload0=(event)=>{
        var num = Math.random();
        const useruid = this.props.firebase.auth.currentUser.uid
        const file =  event.target.files[0]
        const storageRef = this.props.firebase.dothisStorage().ref(`/products/${useruid}/${num+file.name}`)
        const task = storageRef.put(file);

        task.on('state_changed', snapshot =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
            this.setState({
                uploadValue0: percentage
            })
        }, error =>{
            console.log(error.message)
        }, ()=>{ 
            storageRef.getDownloadURL().then(url=>{
                this.setState({
                    picture0: url,
                })
            })
        })
    }
    handleUpload2=(event)=>{
        var num2 = Math.random();
        const useruid = this.props.firebase.auth.currentUser.uid
        const file =  event.target.files[0]
        const storageRef = this.props.firebase.dothisStorage().ref(`/products/${useruid}/${num2+file.name}`)
        const task = storageRef.put(file);

        task.on('state_changed', snapshot =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
            this.setState({
                uploadValue2: percentage
            })
        }, error =>{
            console.log(error.message)
        }, ()=>{ 
            storageRef.getDownloadURL().then(url=>{
                this.setState({
                    picture2: url,
                })
            })
        })
    }
    handleUpload3=(event)=>{
        var num3 = Math.random();
        const useruid = this.props.firebase.auth.currentUser.uid
        const file =  event.target.files[0]
        const storageRef = this.props.firebase.dothisStorage().ref(`/products/${useruid}/${num3+file.name}`)
        const task = storageRef.put(file);

        task.on('state_changed', snapshot =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
            this.setState({
                uploadValue3: percentage
            })
        }, error =>{
            console.log(error.message)
        }, ()=>{ 
            storageRef.getDownloadURL().then(url=>{
                this.setState({
                    picture3: url,
                })
            })
        })
    }
    componentDidMount(){
        this.listener3 = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ?         
            this.props.firebase
                .dothisdb()
                .collection('products')
                .orderBy('date', 'desc')
                .where('autor_uid' , '==', authUser.uid)
                .onSnapshot((snapShots)=>{
                    const user = this.props.firebase.auth.currentUser
                    this.setState({
                        products: snapShots.docs.map((doc)=>{
                            return { id: doc.id, data: doc.data()}
                        })
                    })
                },error=>{
                    console.log(error)
                })
            : this.setState({ authUser:null });
        })
        this.listener5 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
            authUser
            ?
            this.props.firebase
                .dothisdb()
                .collection('users')
                .where('u_email', '==', authUser.email)
                .onSnapshot( snapShot=>{
                    let result = snapShot.docChanges() 
                        this.setState({
                            inputValue_mybussinessname: result.map(user=>{
                                    return user.doc.data().u_mybussinessname
                                }).toString()
                            ,
                            inputValue_mycell: result.map((user)=>{
                                    return user.doc.data().u_cell
                                }).toString()
                            ,
                            inputValue_mygps: result.map((user)=>{
                                return user.doc.data().u_gps
                            }).toString()
                        })
                },error=>{
                    console.log(error)
                })
            :
            console.log('error')
        })
    }
    onConsole=()=>{
        console.log(this.state)
    }
    getFile=(id)=>{
        let docRef = this.props.firebase.dothisdb().collection('products').doc(id)
        docRef.get()
            .then((doc)=>{
                console.log('documento tomado')
                if(doc.exists){
                    this.setState({
                        inputValue_name: doc.data().p_name,
                        valor: doc.data().p_categories,
                        valor3: doc.data().p_subcategory,
                        // valor5: doc.data().p_subcategory2,
                        inputValue_price: doc.data().p_price,
                        inputValue_shortdetails: doc.data().p_shortdetails,
                        details_general_description1: doc.data().p_details_general_description1,
                        details_general_description2: doc.data().p_details_general_description2,
                        logistic_seller: doc.data().p_logistic_seller,
                        picture0: doc.data().p_principal_image,
                        picture2: doc.data().p_secundary_image2,
                        picture3: doc.data().p_secundary_image3,
                        edit: true,
                        id: doc.id
                    })
                }else{
                    console.log('el documento no existe')    
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    onChange = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    action = event =>{
        const { 
                inputValue_mybussinessname,
                inputValue_mycell,
                inputValue_mygps,
                inputValue_name, 
                inputValue_categories, 
                inputValue_categories1, 
                inputValue_price,
                inputValue_shortdetails,
                details_general_description1, 
                details_general_description2, 
                logistic_seller,
                picture0,
                picture2,
                picture3,
                edit,
                valor,
                valor3,
                // valor5,
            } = this.state;
        const user = this.props.firebase.auth.currentUser
        console.log(user)
        console.log(edit)
        event.preventDefault()
        !edit?
            this.props.firebase
                .dothisdb()
                .collection('products')
                .add({
                    date: new Date(),
                    autor_uid: user.uid,
                    autor_email: user.email,
                    p_mybussinessname: inputValue_mybussinessname,
                    p_mycell: inputValue_mycell,
                    p_mygps: inputValue_mygps,
                    p_name: inputValue_name,
                    p_categories: valor,
                    p_subcategory: valor3,
                    // p_subcategory2: valor5,
                    p_price: inputValue_price,
                    p_shortdetails: inputValue_shortdetails,
                    p_details_general_description1: details_general_description1,
                    p_details_general_description2: details_general_description2,
                    p_logistic_seller: 'Serviexpress Logistics',
                    p_principal_image: picture0,
                    p_secundary_image2: picture2,
                    p_secundary_image3: picture3,
                })
                .then(()=>{
                    console.log(`Producto: ${inputValue_name} de la categoria: ${valor} y de la subcategoria ${valor3} agregado`)
                    this.setState({
                        inputValue_name: '',
                        // inputValue_categories: '',
                        valor: '',
                        valor3: '',
                        // valor5: '',
                        inputValue_price: '',
                        inputValue_shortdetails: '',
                        details_general_description1: '',
                        details_general_description2: '',
                        logistic_seller: '',
                        picture0: null,
                        uploadValue0: 0,
                        picture2: null,
                        uploadValue2: 0,
                        picture3: null,
                        uploadValue3: 0,
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
                :this.update();
    }
    update=()=>{
        const { id, 
                inputValue_name, 
                // inputValue_categories,
                valor,
                valor3, 
                // valor5, 
                inputValue_price,
                inputValue_shortdetails, 
                details_general_description1,
                details_general_description2,
                logistic_seller,
                picture0,
                picture2,
                picture3,
             } = this.state;
        this.props.firebase
            .dothisdb()
            .collection('products')
            .doc(id)
            .update({
                date: new Date(),
                p_name: inputValue_name,
                p_categories: valor,
                p_subcategory: valor3,
                // p_subcategory2: valor5,
                p_price: inputValue_price,
                p_shortdetails: inputValue_shortdetails,
                p_details_general_description1: details_general_description1,
                p_details_general_description2: details_general_description2,
                p_logistic_seller: logistic_seller,
                p_principal_image: picture0,
                p_secundary_image2: picture2,
                p_secundary_image3: picture3,
            })
            .then(()=>{
                console.log('actualizado')
                this.setState({
                    inputValue_name: '',
                    valor: '',
                    valor3: '',
                    // valor5: '',
                    inputValue_price: '',
                    inputValue_shortdetails: '',
                    details_general_description1: '',
                    details_general_description2: '',
                    logistic_seller: '',
                    picture0: '',
                    uploadValue0: 0,
                    picture2: '',
                    uploadValue2: 0,
                    picture3: '',
                    uploadValue3: 0,
                    edit:false,
                })
            })
            .catch((error)=>{
                console.log(error)
            })

    }
    deleteItem=(id, p_principal_image,p_secundary_image2,p_secundary_image3,p_secundary_image4)=>{
        this.props.firebase
            .dothisdb().collection('products').doc(id).delete()
        
        const storageRef = this.props.firebase.dothisStorage().refFromURL(p_principal_image)
        storageRef.delete().then(function() {
            console.log('Archivo borrado satisfactoriamente')
        }).catch(function(error) {
            console.log(`A ocurrido al borrar la imagen principal: ${error}`)
        });

        const storageRef2 = this.props.firebase.dothisStorage().refFromURL(p_secundary_image2)
        storageRef2.delete().then(function() {
            console.log('Archivo borrado satisfactoriamente')
        }).catch(function(error) {
            console.log(`A ocurrido al borrar la imagen secundaria 2: ${error}`)
        });

        const storageRef3 = this.props.firebase.dothisStorage().refFromURL(p_secundary_image3)
        storageRef3.delete().then(function() {
            console.log('Archivo borrado satisfactoriamente')
        }).catch(function(error) {
            console.log(`A ocurrido al borrar la imagen secundaria 3: ${error}`)
        });
    }
    // desde aqui
    onActionChange2 = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    cate2=()=>{
        console.log(this.state.inputValue_categories2)
    }
    onActionChangeD=event=>{
        this.setState({
            [event.target.name]: event.target.value
        },()=>{
                if(this.state.valor==='Tecnologia'){
                    this.setState({
                        valor2: <div>
                            <select name="valor3" value={this.state.valor3} onChange={this.onActionChangeD} className="custom-select custom-select-sm" >
                                <option value="None" selected>Escoge la categoria</option>
                                <option value="LaptopsComputadoras">Laptops, Computadoras o sus partes</option>
                                <option value="AccesoriosComputacion">Accesorios de computación</option>
                                <option value="CelularesTablets">Celulares o Tablets</option>
                                <option value="AccesoriosCelularesTablets">Accesorios de celulares o tablets</option>
                                <option value="Impresoras">Impresoras</option>
                                <option value="AccesoriosImpresoras">Accesorios de impresoras</option>
                            </select>   
                        </div>
                    })
                }
                if(this.state.valor==='Sillas'){
                    this.setState({
                        valor2: <div>
                            <select name="valor3" value={this.state.valor3} onChange={this.onActionChangeD} className="custom-select custom-select-sm" >
                                <option value="None" selected>Escoge la categoria</option>
                                <option value="Ejecutivas">Ejecutivas, Oficina, Casa</option>
                                <option value="Gerenciales">Gerenciales</option>
                                <option value="Gamers">Gamers</option>
                                <option value="Taburetes">Taburetes</option>
                                <option value="Espera">Sillas de espera</option>
                                <option value="Escritorios">Escritorios, Mesas</option>
                            </select>   
                        </div>
                    })
                }
                /* 
                ------------Esto si vale----------------
                if(this.state.valor==='Sillas'){
                    this.setState({
                        valor2: <div>
                            <select name="valor3" value={this.state.valor3} onChange={this.onActionChangeD} className="custom-select custom-select-sm" >
                                <option value="None" selected>Escoge la categoria</option>
                                <option value="Ejecutivas">Ejecutivas y Camisas</option>
                                <option value="Gerenciales">Gerenciales</option>
                                <option value="Gamers">Gamers</option>
                                <option value="Taburetes">Taburetes</option>
                                <option value="Espera">Sillas de espera</option>
                            </select>   
                        </div>
                    })

                ----------------Hasta aqui vale tranquilamente!-------------
                } */
                if(this.state.valor==='Papeleria'){
                    this.setState({
                        valor2: <div>
                            <select name="valor3" value={this.state.valor3} onChange={this.onActionChangeD} className="custom-select custom-select-sm" >
                                <option value="None" selected>Escoge la categoria</option>
                                <option value="Papeleria">Papeleria</option>
                                <option value="SuministrosOficina">Suministros de oficina</option>
                            </select>   
                        </div>
                    })
                }
                if(this.state.valor==='Otros'){
                    this.setState({
                        valor2: <div>
                            <select name="valor3" value={this.state.valor3} onChange={this.onActionChangeD} className="custom-select custom-select-sm" >
                                <option value="None" selected>Escoge la categoria</option>
                                <option value="Otros1">Otros1</option>
                                <option value="Otros2">otros2</option>
                            </select>   
                        </div>
                    })
                }
            }
            )
    }
    onC=()=>{
        console.log(this.state.valor)
        console.log(this.state.valor3)
    }



    // hasta aqui
    render(){
        return(
            <div>
                <Header />
                <div className="Sellerprincipalbox">
                    <div className="SellerBox1">
                        <ItemSeller />
                    </div>
                    <div className="SellerBox2">
                        <UploadProducts 
                        createProduct={this.action}
                        state={this.state}
                        uploadValue={this.state.uploadValue0}
                        handleUpload={this.handleUpload0}
                        picture = {this.state.picture0}

                        uploadValue_2={this.state.uploadValue2}
                        handleUpload_2={this.handleUpload2}
                        picture_2 = {this.state.picture2}
                        uploadValue_3={this.state.uploadValue3}
                        handleUpload_3={this.handleUpload3}
                        picture_3 = {this.state.picture3}

                        onActionChange = {this.onChange}
                        editReal = {this.state.edit}


                        onC={this.onC}
                        valor={this.state.valor}
                        onActionChangeD={this.onActionChangeD}
                        valor2={this.state.valor2}
                        valor3={this.state.valor3}

                        />
                    </div>
                    <div className="SellerBox3">
                        <OnlyMyProducts 
                        products2={this.state.products}
                        getFile2 ={this.getFile}
                        deleteItem2 = {this.deleteItem}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default withFirebase(Myproducts);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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
            inputValue_name: '',
            inputValue_categories: '',
            inputValue_price: '',
            inputValue_shortdetails: '',
            // title_general_description1: '',
            details_general_description1: '',
            // title_general_description2: '',
            details_general_description2: '',
            // title_general_description3: '',
            // details_general_description3: '',
            // myubication: '',
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
            // console.log(authUser.email)
        })
    }
    componentWillUnmount(){
        this.listener3();
    }
    getFile=(id)=>{
        let docRef = this.props.firebase.dothisdb().collection('products').doc(id)
        docRef.get()
            .then((doc)=>{
                console.log('documento tomado')
                if(doc.exists){
                    this.setState({
                        inputValue_name: doc.data().p_name,
                        inputValue_categories: doc.data().p_categories,
                        inputValue_price: doc.data().p_price,
                        inputValue_shortdetails: doc.data().p_shortdetails,
                        // title_general_description1: doc.data().p_title_general_description1,
                        details_general_description1: doc.data().p_details_general_description1,
                        // title_general_description2: doc.data().p_title_general_description2,
                        details_general_description2: doc.data().p_details_general_description2,
                        // title_general_description3: doc.data().p_title_general_description3,
                        // details_general_description3: doc.data().p_details_general_description3,
                        // myubication: doc.data().p_myubication,
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
        const { inputValue_name, 
                inputValue_categories, 
                inputValue_price,
                inputValue_shortdetails,
                // title_general_description1,
                details_general_description1, 
                // title_general_description2,
                details_general_description2, 
                // title_general_description3,
                // details_general_description3, 
                // myubication,
                logistic_seller,
                picture0,
                picture2,
                picture3,
                edit 
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
                    autor_uid: user.uid,
                    autor_email: user.email,
                    p_name: inputValue_name,
                    p_categories: inputValue_categories,
                    p_price: inputValue_price,
                    p_shortdetails: inputValue_shortdetails,
                    // p_title_general_description1: title_general_description1,
                    p_details_general_description1: details_general_description1,
                    // p_title_general_description2: title_general_description2,
                    p_details_general_description2: details_general_description2,
                    // p_title_general_description3: title_general_description3,
                    // p_details_general_description3: details_general_description3,
                    // p_myubication: myubication,
                    p_logistic_seller: logistic_seller,
                    p_principal_image: picture0,
                    p_secundary_image2: picture2,
                    p_secundary_image3: picture3,
                })
                .then(()=>{
                    console.log(`Producto: ${inputValue_name} de la categoria: ${inputValue_categories} agregado`)
                    this.setState({
                        inputValue_name: '',
                        inputValue_categories: '',
                        inputValue_price: '',
                        inputValue_shortdetails: '',
                        // title_general_description1: '',
                        details_general_description1: '',
                        // title_general_description2: '',
                        details_general_description2: '',
                        // title_general_description3: '',
                        // details_general_description3: '',
                        // myubication: '',
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
                inputValue_categories, 
                inputValue_price,
                inputValue_shortdetails, 
                // title_general_description1,
                details_general_description1,
                // title_general_description2,
                details_general_description2,
                // title_general_description3,
                // details_general_description3,
                // myubication,
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
                p_name: inputValue_name,
                p_categories: inputValue_categories,
                p_price: inputValue_price,
                p_shortdetails: inputValue_shortdetails,
                // p_title_general_description1: title_general_description1,
                p_details_general_description1: details_general_description1,
                // p_title_general_description2: title_general_description2,
                p_details_general_description2: details_general_description2,
                // p_title_general_description3: title_general_description3,
                // p_details_general_description3: details_general_description3,
                // p_myubication: myubication,
                p_logistic_seller: logistic_seller,
                p_principal_image: picture0,
                p_secundary_image2: picture2,
                p_secundary_image3: picture3,
            })
            .then(()=>{
                console.log('actualizado')
                this.setState({
                    inputValue_name: '',
                    inputValue_categories: '',
                    inputValue_price: '',
                    inputValue_shortdetails: '',
                    // title_general_description1: '',
                    details_general_description1: '',
                    // title_general_description2: '',
                    details_general_description2: '',
                    // title_general_description3: '',
                    // details_general_description3: '',
                    // myubication: '',
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
    // deleteItem=(id, p_principal_image)=>{
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
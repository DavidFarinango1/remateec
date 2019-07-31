import React, { Component } from 'react'
// import HomeLayout from '../components/home-layout'
// import Header from '../../header/container/headercontainer'
// import Slides from '../../slides/components/slides'
// import Categories from '../../categories/container/categoriescontainer'
// import Footer from '../../footer/container/footer-container'
import { withFirebase } from '../../../Firebase'
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            query: this.props.id,
            // list: [],
            list: [ {nombre: 'perro', apellido: 'gato'},{nombre: 'perrito', apellido: 'gat'}, {nombre: 'perra', apellido: 'cat'}, {nombre: 'gato', apellido: 'cat'} ],
            result: [],
        }
    }
    componentDidMount(){

        // this.listener0 = 
        //     this.props.firebase
        //         .dothisdb()
        //         .collection('products')
        //         // .where('autor_uid' , '==', authUser.uid)
        //         .onSnapshot((snapShots)=>{
        //             let search = this.state.query
        //             this.setState({
        //                 list: snapShots.docs.map((doc)=>{
        //                     return { 
        //                         // id: doc.id, 
        //                         data: doc.data()}
        //                 })
        //             })
        //             // let list = snapShots.docs.map((doc)=>{
        //             //     return{data:doc.data()}
        //             // })
        //             if(search){
        //                 let result = this.state.list.filter((item)=>{
        //                     let value = item.data.p_name.includes(search)
        //                     return value
        //                 })
        //                 this.setState({
        //                     result,
        //                 })
        //             }else{
        //                 console.log('no hay nada')
        //             }
        //             // this.setState({
        //             //     list: snapShots.docs.map((doc)=>{
        //             //         return { 
        //             //             // id: doc.id, 
        //             //             data: doc.data()}
        //             //     })
        //             // })
        //         },error=>{
        //             console.log(error)
        //         })

        // desde aqui si vale
        let search = this.state.query
        if(search){
            let result = this.state.list.filter((item)=>{
                // const value = item.data.p_name.includes(search)
                const value = item.nombre.includes(search)
                // return this.props.actions.searchProduct(value)
                return value
            })
            this.setState({
                result,
            })
            // this.props.actions.searchProduct(result)    
            // console.log(result)
        }else{
            console.log('no hay nada')
        }
        // hasta aqui si vale
    
    }
    componentWillUnmount(){
        // this.listener0();
        // let search = this.state.query
        // if(search){
        //     let result = this.state.list.filter((item)=>{
        //         // const value = item.data.p_name.includes(search)
        //         const value = item.nombre.includes(search)
        //         // return this.props.actions.searchProduct(value)
        //         return value
        //     })
        //     this.setState({
        //         result,
        //     })
        //     // this.props.actions.searchProduct(result)    
        //     // console.log(result)
        // }else{
        //     console.log('no hay nada')
        // }
        // this.listener2();
        // this.listener3();
    }
    onL=e=>{
        e.preventDefault();
        console.log(this.state.query)
        console.log(this.state.list)
        console.log(this.state.result)
    }
    render(){
        return(
            <div>
                <p onClick={this.onL}>this.state.result</p>
                {
                    this.state.result.map((item)=>(
                        <p>hola</p>
                    ))                 
                    
                }
            </div>
        )
    }
}
export default withFirebase(Search)
import React, { Component } from 'react'
// import HomeLayout from '../../page/components/home-layout'
import Header from '../../header/container/headercontainer'
// import Slides from '../../slides/components/slides'
// import Categories from '../../categories/container/categoriescontainer'
import Footer from '../../footer/container/footer-container'
// import { connect } from 'react-redux'
import Search from '../components/search'

const SearchPageContainer = (props) => {
    const id = props.match.params.id;
    // console.log(props.match.params.id)
    return(
        <div>
            <Header />
            {/* <p>{id}</p> */}
            <Search id={id} />
            <Footer />
        </div>
    )
}
export default SearchPageContainer;

// class SearchPage extends Component{    
//     constructor(props){
//         super(props);
//         this.state ={
//             // query: this.props.searchProduct,
//             result: [],
//         }
//     }
//     onC=e=>{
//         e.preventDefault();
//         // let result2 = this.props.searchProduct[0].value.toString()
//         console.log(this.props.searchProduct)
//     } 
//     render(){
//         return(
//             <HomeLayout>
//                 <Header />
//                 {/* {
//                     this.props.searchProduct.map((item)=>(
                        
//                         <p>holi}</p>
//                     ))
//                 } */}
//                 <p onClick={this.onC}>console.log(this.props.searchProduct)</p>
//                 {/* <Slides /> */}
//                 <Categories />
//                 <Footer />
//             </HomeLayout>
//         )
//     }
// }
// // const mapStateToProps =state=>{
// //     // console.log(state)
// //     // return {state: state.searchProduct}
// //     // const result = state.searchProduct()
// //     // return result
// // }
// function mapStateToProps(state, props){
//     return{
//         searchProduct: state.get('searchProduct')
//     }
// }
// export default connect(mapStateToProps)(SearchPage)
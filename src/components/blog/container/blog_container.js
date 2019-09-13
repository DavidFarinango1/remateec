import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
// import School from '../components/school'
import Blog from '../components/blog'
import Footer from '../../footer/container/footer-container'
class BlogContainer extends Component{
    render(){
        return(        
            <div>
                <Header />
                {/* <Slides /> */}
                <Blog />
                <Footer />
            </div>
        )
    }
}

export default BlogContainer;
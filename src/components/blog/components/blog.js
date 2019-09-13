import React, { Component } from 'react';
import './blog.css'

class Blog extends Component{
    render(){
        return(
            <div>
                <div className="BlogHeader" style={{backgroundImage: `url(./images/others/O7GZJO0.jpg)`}}>
                    <h2 style={{fontFamily: 'auto',fontSize:'2.3em',textAlign: 'center',color:'white', margin:'1.3em',backgroundColor: 'rgba(0,0,0,.6)',width:'max-content', padding: '0 .5em'}}>Acerca de nosotros</h2>
                </div>
                <div className="BlogSB1"> 
                   <div className="BSB1_1">
                       <img className="Blogimg"src="./images/others/OHT3MQ0.jpg" alt="Nuestra historia"/>
                    </div> 
                   <div className="BSB1_2">
                       <h4>Nuestra historia:</h4>
                       <p>
                           Mi nombre es David Farinango
                       </p>
                   </div>
                </div>
                <div className="BlogSB1">
                    <div className="BSB1_2">
                       <h4>Misión:</h4>
                       <p>
                           Mi nombre es David Farinango
                       </p>
                    </div>
                    <div className="BSB1_1">
                       <img className="Blogimg"src="./images/others/OHT3MQ0.jpg" alt="Nuestra historia"/>
                    </div> 
                </div>
                <div className="BlogSB1">
                    <div className="BSB1_1">
                       <img className="Blogimg"src="./images/others/OHT3MQ0.jpg" alt="Nuestra historia"/>
                    </div> 
                    <div className="BSB1_2">
                       <h4>Visión:</h4>
                       <p>
                           Mi nombre es David Farinango
                       </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog
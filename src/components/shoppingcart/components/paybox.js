import React, { Component } from 'react'

class PayBox extends Component{
    render(){
        return(
            <div>
                <div className="form-group form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">Efectivo</label>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                </div>
                <button type="submit">Siguiente</button>
            </div>
        )
    }
}
export default PayBox;
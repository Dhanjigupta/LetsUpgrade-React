import React, { Component } from 'react';
class Product extends Component{
  render(){
      return(
          <>
          <div className="container">
          <div className="row">
          <div className="col-md-4" style={{padding:'5px;'}}>   
           <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add Cart</a>
              </div>
            </div>
            </div>

            <div className="col-md-4" style={{padding:'5px;'}}>    
            <div className="card" >
               <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add Cart</a>
              </div>
            </div>
            </div>

            <div className="col-md-4" style={{padding:'5px;'}}>   
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add Cart</a>
              </div>
            </div>
            </div>


           
            
            </div>
         </div>
        </>
      )
  }
}

export default Product;
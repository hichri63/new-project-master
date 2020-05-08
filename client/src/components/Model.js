import React, { Component } from 'react';
import {Modal} from "react-bootstrap"
import {reserver} from '../actions/transaction';
import { connect } from 'react-redux'


class ResrverModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:false,
            fullname:"",
            email:"",
            téléphone:"",
            colis:"",
           
        }}
        handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        }
    
 
        handleShow=()=>{
            this.setState({show:true})
        }
    //Fermer
        handleClose1=()=>{
this.setState({show:false})
this.setState({
  show:false,
  fullname:"",
  email:"",
  téléphone:"",
  colis:"",
  

})
}
// Reserver
        handleClose=()=>{
        this.props.reserver({
    fullname:this.state.fullname,
    email:this.state.email,
    téléphone:this.state.téléphone,
    colis:this.state.colis,
    id:this.props.info._id,
    image:this.props.info.imagevoiture,
    user:this.props.auth.user._id
            })
this.setState({
    show:false,
    fullname:"",
    email:"",
    téléphone:"",
    colis:"",
    startDate: new Date(),
    endDate: new Date()

})
        }
    render() {
        return (
            <div>
                <button class="btn btn-outline-warning btn-sm" onClick={this.handleShow}>
                Réserver
      </button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Réserver gratuitement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group">
                    <label>Nom/Prénom</label>
                   
                    <input type="text" className="form-control" placeholder="Enter your Name" name="fullname"  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter your Email" name="email"  onChange={this.handleChange}/>
                   
                </div>
                <div className="form-group">
                <label>Télephone</label>
                    <input type="text" className="form-control" placeholder="Enter your téléphone" name="téléphone"  onChange={this.handleChange}/>
                   
                </div>
                <div className="form-group">
                <label>Colis</label>
                    <input type="text" className="form-control" placeholder="Enter your Email" name="colis"  onChange={this.handleChange}/>
                   
                </div>
               
                
     
        </Modal.Body>
        <Modal.Footer>      
          <button class="btn btn-outline-dark btn-sm" onClick={this.handleClose1}>
            Fermer
          </button>
          <button class="btn btn-outline-warning btn-sm" onClick={this.handleClose}>
          Réserver
          </button>
        </Modal.Footer>
      </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      auth: state.auth
  };
};

export default connect(mapStateToProps,{reserver})(ResrverModal);
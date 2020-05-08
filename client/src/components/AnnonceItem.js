import React from 'react';
import { connect } from 'react-redux';
import { deleteannonce,saveAnnonce } from '../actions/transaction';

const AnnonceItem = (props) => {
    return (
        <div className="car fav-item">
            <div className="infos">
                <img className="voit-img" src={props.annonce.imagevoiture} alt="..." />
            </div>
            <div>
                <h1>{props.annonce.Datedep}</h1>
                <h1>{props.annonce.villedep}</h1>
                <h1>{props.annonce.villearr}</h1>
            </div>
            <div className="btns">
                <button className="btn btn-info" onClick={()=>{
                    props.saveAnnonce(props.annonce)
                }} >Edit</button>
                <button className="btn btn-danger" onClick={() => {
                   props.deleteannonce(props.annonce._id)
                }} >Delete</button>
            </div>

        </div>
    );
};

// const mapDispatchToprops = (dispacth) => {
//     return {
//         delete: (id) => dispacth(deleteannonce(id)),
//         save:(newann)=> dispacth(saveAnnonce(newann))
//     }
// }
export default connect(null,{saveAnnonce,deleteannonce})(AnnonceItem);
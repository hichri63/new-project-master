import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allannonce } from '../actions/transaction';
import { loadUser } from '../actions/authActions';
import { Table } from 'react-bootstrap';


class Commande extends Component {

    componentDidMount() {
        this.props.allannonce()
        this.props.loadUser()
    }


    render() {
        return (
            <div>
                <h1>Mes Commande</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            
                            <th>Nom/prénom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Colis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.annonce.annonce.map(el => el.reservation.map(el =>
                            <tr>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.téléphone}</td>
                                <td>{el.colis}</td>
                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        annonce: state.annonce,
        auth: state.auth
    }
}


export default connect(mapStateToProps, { allannonce, loadUser })(Commande);
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { datalist, deletetodo,updatetodo } from '../queries/queries';
import { Button, FormControl, Modal } from 'react-bootstrap';



class Todolist extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            data: [],
            updatevalue:'',
            previousvalue:"",
            perviousid: ""
        }
    }

    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }

    updatedtomlab(){
            if(this.state.updatevalue === "" || this.state.updatevalue === " "){
                alert('Please enter some values');
            }
            else {
                this.props.updatetodomutation({
                    variables:  {
                        id: this.state.perviousid,
                        Name : this.state.updatevalue
                    },
                    refetchQueries: [{ query: datalist }]
    
                })
                this.setState({show:false})
            }
    }
    delete(evt) {
        console.log(evt);
        
        this.props.deletetodoMutation({
            variables: {
                id: evt
            },
            refetchQueries: [{ query: datalist }]
        })
    }

    getupdatevalue(evt) {
       this.setState({previousvalue:evt.Name, perviousid : evt.id.toString()});
       console.log(this.state.perviousid,evt.id);
    }
    renderlist() {
        return (
            <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>

                <li style={{ width: '90%', color: 'white', fontWeight: 'bold', fontSize: 20, paddingTop: 5 }}>
                    {this.props.list.Name}</li>
                <Button bsStyle="primary" bsSize="lg" onClick={(evt) => {this.handleShow(),this.getupdatevalue(this.props.list)} }>
                    Edit
                 </Button>

                <Button bsStyle="danger" bsSize="lg" onClick={(evt) => this.delete(this.props.list.id)}>
                    Delete
                 </Button>

            </div>
        )
    }
    renderupdate() {
    
        return (
            <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>

                <FormControl
                    type="text" defaultValue={this.props.list.Name}
                    style={{ width: '50%', backgroundColor: '#1d2733', height: 45, color: 'white', fontSize: 20 }}
                    placeholder="Update Text"

                />

                <Button bsStyle="primary" bsSize="lg">
                    Update</Button>
                <Button bsStyle="danger" bsSize="lg" onClick={this.setState({ flag: true })} >
                    Cancel</Button>

            </div>
        )
    }
    render() {
        return (
            <div>

                {
                    this.state.show ?
                        <Modal  {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={() => this.handleClose()} >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Update
                        </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <div style={{ justifyContent:'center', display: 'inline-flex',width:'100%',height:45 }}> 
                                
                                    <FormControl
                                        type="text" 
                                        style={{ width: '50%', backgroundColor: '#1d2733', height: 45, color: 'white', fontSize: 20 }}
                                        placeholder="Update Text"
                                        defaultValue={this.state.previousvalue}
                                        onChange={(evt) => this.setState({updatevalue:evt.target.value})}
                                    />

                                    <Button bsStyle="primary" onClick={() => this.updatedtomlab()} >
                                        Update</Button>
                                    
                                    <Button bsStyle="danger" onClick={() => this.handleClose()} >
                                        Cancel</Button>

                                </div>
                            </Modal.Body>
                        </Modal>
                        :
                        this.renderlist()

                }
            </div>
        );
    }
}


export default compose(
    graphql(deletetodo, { name: 'deletetodoMutation' }),
    graphql(updatetodo, { name:'updatetodomutation'}),
)(Todolist)
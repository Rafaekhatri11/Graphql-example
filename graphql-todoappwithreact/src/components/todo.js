import React, { Component } from 'react'
import { FormControl, Button, Image } from 'react-bootstrap';
import { graphql, compose } from 'react-apollo';
import Todolist from '../components/todolist';

import {  addtodo,datalist } from '../queries/queries';



class Todo extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            flag: true,
            update: '',
            detail : []
        }
    }

    delete(evt) {
        console.log(this.props, evt);
        this.props.deletetodoMutation({
            variables: {
                id: evt
            },
            refetchQueries: [{ query: datalist }]
        })
    }


    addtododata() {
        console.log(this.state.text);
        if(this.state.text === ""){
            alert('Please enter text');
        }
        else{
        this.props.addtodomutation({
            variables: {
                Name: this.state.text
            },
            refetchQueries: [{ query: datalist }]
        })
        this.setState({ text: "" });
    }
}

  showtodo() {
        var data = this.props.datalist;
        if (data.loading) {
            console.log("=========", data.loading);
            return (<li>Loading...</li>)
        }

        else{
          return data.listofData.map((text,index) =>{
                console.log(text,index)
                return(
                    <Todolist index={index} key={text.id} list={text} />
                )
            })
        //   return  data.listofData.map((text, index) => {
        //         return (
        //                this.state.flag === true ?

        //                 <div key={index} style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>

        //                     <li   style={{ width: '90%', color: 'white', fontWeight: 'bold', fontSize: 20, paddingTop: 5 }}>
        //                         {text.Name}</li>
        //                     <Button bsStyle="primary" bsSize="lg" onClick={() => this.setState({ flag: false })}>
        //                         Edit
        //                     </Button>

        //                     <Button bsStyle="danger" bsSize="lg" onClick={(evt) => this.delete(text.id)}>
        //                         Delete
        //                    </Button>

        //                 </div>
        //                 :
        //                 <div key={index} style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>

        //                     <FormControl
        //                         type="text" value={this.state.update}
        //                         style={{ width: '50%', backgroundColor: '#1d2733', height: 45, color: 'white', fontSize: 20 }}
        //                         placeholder="Update Text"

        //                     />

        //                     <Button bsStyle="primary" bsSize="lg" >
        //                         Update</Button>
        //                     <Button bsStyle="danger" bsSize="lg" onClick={this.setState({ flag: true })} >
        //                         Cancel</Button>

        //                 </div>
        //         )

        //     }) 
        }


     


    }
  
    render() {
        console.log(this.props)

        return (
            <div>
                <div style={{ display: 'inline-flex', width: '100%', justifyContent: "center" }}>
                    <Image src={require('../graphql.png')} height="100" width="100" />
                    <h1 style={{ color: "#e535ab" }}>GraphQl with React Js</h1>

                </div>
                <div style={{ display: 'inline-flex', width: '100%', justifyContent: "center" }}>
                    <p style={{ color: "#88bce8", fontSize: 50 }}>Todo App</p>

                </div>

                <form style={{ alignItems: 'center', justifyContent: 'center', display: 'inline-flex', width: '100%' }} >
                    <FormControl
                        type="text" value={this.state.text}
                        onChange={(evt) => this.setState({ text: evt.target.value })}
                        style={{ width: '50%', backgroundColor: '#1d2733', height: 45, color: 'white', fontSize: 20 }}
                        placeholder="Enter text"

                    />
                    <Button onClick={() => this.addtododata()} bsStyle="info" bsSize="large">
                        Add
                    </Button>
                </form>
                
                {
                   this.showtodo()
                }
              

            </div>
        );
    }
}

export default compose(
    graphql(addtodo, { name: 'addtodomutation' }),
    graphql(datalist, { name: 'datalist' }),

)(Todo);
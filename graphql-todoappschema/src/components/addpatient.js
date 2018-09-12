// import React, { Component } from 'react';
// import { graphql, compose } from 'react-apollo';

// import { FormControl, Button } from 'react-bootstrap';
// import { listofdoctor, addpatientMutation,getpatient } from '../queries/queries';

// class Addpatient extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             phone: "",
//             gender: "",
//             address: "",
//             pname: "",
//             id: ""
//         }
//     }

//     displaydoctor() {
//         var data = this.props.listofdoctor;
//         console.log(this.props);
//         if (data.loading) {
//             return (<option display> Loading</option>)
//         }
//         else {
//             return data.listofdoctor.map(detail => {
//                 return (<option key={detail.id} value={detail.id}> {detail.name}</option>)
//             })
//         }
//     }

//     submit(evt) {
//         evt.preventDefault();

//         if (this.state.phone === '' || this.state.name === '' || this.state.address === "" || this.state.pname==="" || this.state.gender === "") {
//             alert('Please fill fields');
//         }

//         else {

//             console.log(this.state);
//             this.props.addpatientMutation({
//                 variables: {
//                     Name: this.state.pname,
//                     Address: this.state.address,
//                     Contact: this.state.phone,
//                     Gender: this.state.gender,
//                     Speciality: this.state.speciality,
//                     doctorid: this.state.name
//                 },
//                 refetchQueries : [{query : getpatient }]
//             })
//             alert('Successfully add patient');
//         }
//     }
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <form
//                     onSubmit={(evt) => this.submit(evt)}>


//                     <div style={{ display: 'inline-flex', width: '100%', justifyContent: "center", }}>
//                         <p>Name</p>
//                         <select onChange={(evt) => this.setState({ name: evt.target.value })}>
//                             <option>Select Doctor</option>
//                             {
//                                 this.displaydoctor()
//                             }
//                         </select>
//                     </div>


//                     <div style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
//                         <p>Patient Name</p>
//                         <FormControl
//                             id="formControlsText"
//                             type="text"
//                             label="Text"
//                             bsSize="small"
//                             style={{ width: 200 }}
//                             placeholder="address"
//                             onChange={(evt) => this.setState({ pname: evt.target.value })}
//                         />
//                     </div>

//                     <div style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
//                         <p>Address</p>
//                         <FormControl
//                             id="formControlsText"
//                             type="text"
//                             label="Text"
//                             bsSize="small"
//                             style={{ width: 200 }}
//                             placeholder="address"
//                             onChange={(evt) => this.setState({ address: evt.target.value })}
//                         />
//                     </div>

//                     <div style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
//                         <p>Contact</p>
//                         <FormControl
//                             id="formControlsText"
//                             type="number"
//                             label="Text"
//                             bsSize="small"
//                             style={{ width: 200 }}
//                             placeholder="Contact"
//                             onChange={(evt) => this.setState({ phone: evt.target.value })}

//                         />
//                     </div>

//                     <div style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
//                         <p>Gender</p>
//                         <FormControl
//                             id="formControlsText"
//                             type="text"
//                             label="Text"
//                             bsSize="small"
//                             style={{ width: 200 }}
//                             placeholder="Gender"
//                             onChange={(evt) => this.setState({ gender: evt.target.value })}

//                         />
//                     </div>

                    
//                     <Button style={{ marginLeft: '50%', marginRight: '50%' }} type="submit">Add Data</Button>

//                 </form>
//             </div>
//         );
//     }
// }


// export default compose(
//     graphql(listofdoctor, { name: "listofdoctor" }),
//     graphql(addpatientMutation, { name: "addpatientMutation" })
// )(Addpatient);
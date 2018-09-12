// import React, { Component } from 'react';
// import { graphql } from "react-apollo";
// import { Table } from 'react-bootstrap';

// import {getpatient} from '../queries/queries';


// class Patientlist extends Component {

//     constructor(){
//         super();
//         this.state={
//             selectvalue:"Select"
//         }
//     }


//     renderquery() {
//         var data = this.props.data;
//         if (data.loading) {
//             return (<div>
//                 Loading Books...

//             </div>)
//         }
//         else {
//             return data.listofpatient.map(data => {

//                 return (





//                     <tr key={data.id} style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>

//                         <td style={{ width: '20%', fontWeight: 'bold' }} >Name:       {data.Name}</td>
//                         <td style={{ width: '20%', fontWeight: 'bold' }} >Address:    {data.Address}</td>
//                         <td style={{ width: '20%', fontWeight: 'bold' }} >Contact:   {data.Contact}</td>
//                         <td style={{ width: '20%', fontWeight: 'bold' }}>Gender:    {data.Gender}</td>

//                     </tr>


//                 )

//             })
//         }
//     }
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <div style={{ display: 'inline-flex', width: '100%', justifyContent: "center" }}>
//                     <h3 >Patient List</h3>

//                 </div>
            

//                 <Table responsive={true}>
//                     <tbody>
//                         {this.renderquery()}

//                     </tbody>
//                 </Table>

//             </div>
//         );
//     }
// }

// export default graphql(getpatient)(Patientlist);
// // bind query to component patientlist
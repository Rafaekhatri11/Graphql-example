import { gql } from 'apollo-boost';

const addtodo= gql`
  mutation($Name : String!){
    sendDataToMlab(Name:$Name){
      Name
      id
    }
  }
`

const datalist = gql`
 {
    listofData{
      Name
      id
    }
  }
 `;


const deletetodo = gql`

mutation($id:ID!){
 deletedata(id: $id){
        id
        Name
 }
}
 `;

 const updatetodo = gql`
    mutation($id:ID!,$Name:String!){
      updatedata(id: $id,Name:$Name){
        id
        Name
      }
    }
 `;



export { datalist ,deletetodo,addtodo ,updatetodo};
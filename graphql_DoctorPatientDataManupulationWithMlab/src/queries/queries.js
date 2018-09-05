import {gql} from 'apollo-boost';

const listofdoctor = gql`
{        
    listofdoctor{           
           id
           name
        }
}`;


const getpatient = gql`
    {
        listofpatient{
            id
            Name
            Address
            Contact
            Gender
            doctorid
        }
    }
`;

const addpatientMutation = gql`
mutation($Name :String!,$Address:String!,$Contact:String!,$Gender: String!,$doctorid:ID!) {
    addpatient(Name:$Name,Address:$Address,Contact:$Contact,Gender:$Gender,doctorid:$doctorid){
        id
        Name


    }
  }
`



export{listofdoctor , getpatient,addpatientMutation}
    // addpatientMutation};
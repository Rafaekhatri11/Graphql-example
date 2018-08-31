const graphql= require('graphql');
const load = require('lodash');
// const Author = require('../models/author');
// const Book = require('../models/book');
  const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
// const Appointment = require('../models/appointments');
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList} = graphql;






   const patietntype = new GraphQLObjectType({
    name:'patientslist',
    fields:()=> ({
        id:{type:GraphQLID},
        Name:{type: GraphQLString},
        Address:{type: GraphQLString},
        Contact:{type:GraphQLInt},
        Gender:{type:GraphQLString},
        doctorid:{type: GraphQLString},
        doctor:{
            type : DoctorType,
            resolve(parent,args){
                return Doctor.findById(parent.doctorid)
            }
        }
    })
})

const DoctorType = new GraphQLObjectType({
    name:'doctorlist',
    fields: () => ({
        id: {type: GraphQLID},
        name : {type : GraphQLString},
        phone  : {type : GraphQLString},
        Speciality : {type: GraphQLString},
        patient:{
            type: new GraphQLList (patietntype),
            resolve(parent,args){
                return Patient.find({id:parent.id})
            }
        }
    })
})






const Rootquery = new GraphQLObjectType({
    name:'RootQueryType',
    fields : {
        doctor: {
            type: DoctorType,
            args: {
                id:{type: GraphQLID}
            },
            resolve(parent,args){
            return Doctor.findById(args.id)
        },
        
    },
    patient:{
            type: patietntype,
            args: {
                id : {type :GraphQLID}
            },
            resolve(parent,args){
                return Patient.findById(args.id)
            }
        }
}});

//Mutation means edit ,delete or add the data
const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields: {
        addDoctor: {
            type: DoctorType,
            args:{
                name:{type:GraphQLString},
                phone :{type:GraphQLString},
                Speciality:{type:GraphQLString}
            },
            resolve(parent,args){
                console.log(parent,args)
                let doc = new Doctor({
                    name: args.name,
                    phone: args.phone,
                    Speciality:args.Speciality
                });
               return doc.save();
            }
        },

        addpatient:{
            type: patietntype,
            args:{
                Name:{type:GraphQLString},
                Address:{type:GraphQLString},
                Contact: {type:GraphQLInt},
                Gender:{type:GraphQLString},
                doctorid: {type: GraphQLString}
            },
            resolve(parent,args){
                let patient = new Patient({
                    Name:args.Name,
                    Address:args.Address,
                    Contact: args.Contact,
                    Gender:args.Gender,
                    doctorid:args.doctorid
                })
                return patient.save()
            }
        }

    }
})

module.exports = new GraphQLSchema({
    query: Rootquery,
  mutation : Mutation
})
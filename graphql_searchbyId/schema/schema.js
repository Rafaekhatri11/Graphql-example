const graphql= require('graphql');
const load = require('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID} = graphql;


var books= [
    {name:'book1',genre:'js book ',id:'1'},
    {name:'book2',genre:'react book',id:'2'},
    {name:'book3',genre:'html ',id:'3'},
    {name:'book4',genre:'css',id:'4'},

]
const TypeOfBook = new GraphQLObjectType({
    name : 'book',
    fields: () => ({
        id : {type:GraphQLID},
        name: {type: GraphQLString},
        genre:{type: GraphQLString}
    })
});


const Rootquery = new GraphQLObjectType({
    name:'RootQueryType',
    fields : {
        bookbook: {
            type: TypeOfBook,
            args: {id: {type:GraphQLID}},
            resolve(parent,args){
              return  load.find(books,{id:args.id})
            }
            
        }
    }
});



module.exports = new GraphQLSchema({
    query: Rootquery
})
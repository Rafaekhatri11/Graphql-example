const graphql= require('graphql');
const load = require('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt} = graphql;


var books= [
    {name:'book1',genre:'js book ',id:'1'},
    {name:'book2',genre:'react book',id:'2'},
    {name:'book3',genre:'html ',id:'3'},
    {name:'book4',genre:'css',id:'4'},
]


var author=[
    {name:'william',age:44,id:'1'},
    {name:'john',age:39,id:'2'},
    {name:'Tom',age:50,id:'3'}
]
const TypeOfBook = new GraphQLObjectType({
    name : 'book',
    fields: () => ({
        id : {type:GraphQLID},
        name: {type: GraphQLString},
        genre:{type: GraphQLString},
        author:{
            type: typeofauthor,
            resolve(parent,args){
                console.log(parent)
                return load.find(author,{id:parent.id})
            }
        }
    })
});

const typeofauthor = new GraphQLObjectType({
    name:'author',
    fields:() => ({
        id:{type:GraphQLID},
        age:{type:GraphQLInt},
        name:{type:GraphQLString}
    })
})

const Rootquery = new GraphQLObjectType({
    name:'RootQueryType',
    fields : {
        book: {
            type: TypeOfBook,
            args: {id: {type:GraphQLID}},
            resolve(parent,args){
              return  load.find(books,{id:args.id})
            }
            
        },
        authors:{
            type:typeofauthor,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return load.find(author,{id:args.id})
            }
        }
    }
});



module.exports = new GraphQLSchema({
    query: Rootquery
})
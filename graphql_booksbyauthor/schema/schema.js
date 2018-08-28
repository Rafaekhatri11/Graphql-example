const graphql= require('graphql');
const load = require('lodash');

const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList} = graphql;


var books= [
    {name:'book',genre:'js book ',id:'1',authorid:'1'},
    {name:'book',genre:'react book',id:'2',authorid:'2'},
    {name:'book',genre:'html ',id:'3',authorid:'2'},
    {name:'book',genre:'css',id:'4',authorid:'3'},
    {name:'book',genre:'react native',id:'5',authorid:'3'},
    {name:'book',genre:'anguler ',id:'6',authorid:'1'},
    {name:'book',genre:'python',id:'7',authorid:'2'},
    {name:'book',genre:'firebase',id:'8',authorid:'3'},


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
                return load.find(author,{id:parent.authorid})
            }
        }
    })
});

const typeofauthor = new GraphQLObjectType({
    name:'author',
    fields:() => ({
        id:{type:GraphQLID},
        age:{type:GraphQLInt},
        name:{type:GraphQLString},
        book:{
            type: new GraphQLList(TypeOfBook),
            resolve(parent,args){
                return load.filter(books,{authorid:parent.id})
            }
        }
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
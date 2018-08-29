const graphql= require('graphql');
const load = require('lodash');
const Author = require('../models/author');
const Book = require('../models/book');
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
    fields:()=>({
        id : {type:GraphQLID},
        name: {type: GraphQLString},
        genre:{type: GraphQLString},
        author:{
            type: typeofauthor,
            resolve(parent,args){
                // console.log(parent)
                // return load.find(author,{id:parent.authorid})
                return Author.findById(parent.id)
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
                // return load.filter(books,{authorid:parent.id})
                return Book.find({id:parent.id});
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
             // return  load.find(books,{id:args.id})
             return Book.findById(args.id)
            }
            
        },
        authors:{
            type:typeofauthor,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
               // return load.find(author,{id:args.id})
               return Author.findById(args.id)
            }
        },

        listofbooks:{
            type: new GraphQLList(TypeOfBook),
            resolve(parent,args){
            
              //  return books
              return Book.find({})
            }
        },
        listofauthors:{
            type:new GraphQLList(typeofauthor),
            resolve(parent,args){
               // return author
               return Author.find({})
            }
        }
    }
});

//Mutation means edit ,delete or add the data
const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields: {
        addauthor: {
            type: typeofauthor,
            args:{
                name:{type:GraphQLString},
                age :{type:GraphQLInt}
            },
            resolve(parent,args){
                console.log(parent,args)
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
               return author.save();
            }
        },
        addbook:{
            type: TypeOfBook,
            args:{
                name:{type:GraphQLString},
                genre:{type:GraphQLString},
                id:{type:GraphQLString}
            },
            resolve(parent,args){
                console.log(parent,args)
                let book = new Book({
                    name: args.name,
                    genre:args.genre,
                    id: args.id
                })
                return book.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Rootquery,
    mutation : Mutation
})
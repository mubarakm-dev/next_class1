import { gql } from "@apollo/client";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";


 const typeDefs = gql`
    type Query{
    hello: string
    }
    
    `

const resolvers ={
    Query:{
        hello:()=>"This is what you should return"
    }
}

const apolloServer = new ApolloServer({
   typeDefs
})

const handler = startServerAndCreateNextHandler(apolloServer)
export const GET = async (request:Request)=>{
    return  

}
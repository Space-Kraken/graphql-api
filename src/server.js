import { GraphQLServer } from "graphql-yoga";
import resolvers from "./gql/resolvers/index.js";

// Instancia que crear un servidor de la libreria de graphql-yoga
export const server = new GraphQLServer({
  typeDefs: "./src/gql/schema.graphql", //definiciones de datos (almacenadas en el esquema)
  resolvers, // resoluciones a las querys y mutaciones que posee el esquema
});

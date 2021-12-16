'use strict';

let { Vertex, Edge, Graph } = require('./graphs/graphs');

let myGraph = new Graph();

let vertex3 = new Vertex(3);
let vertex4 = new Vertex(4);
myGraph.addVertex(vertex3); 
myGraph.addVertex(vertex4);
console.log(myGraph.getAll()[0].Vertex);

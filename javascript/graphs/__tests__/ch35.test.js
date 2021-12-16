'use strict';

let { Vertex, Edge, Graph } = require('../graphs');
let myGraph = new Graph();
let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);

describe('testing the graph class', () => {
  test('it can add vertices to a graph', () => {
    expect(myGraph.addVertex(vertex1)).toEqual({'value' : 1});
  });
  test('it can connect vertices through an edge and return the neighbors using the getNeighbors method', () => {
    myGraph.addVertex(vertex2);
    myGraph.addEdge(vertex1, vertex2);
    expect(myGraph.getNeighbors(vertex1)).toEqual([{'value' : 2}]);
  });
  test('it can return the graph entries using the getAll method', () => {
    expect(myGraph.getAll()[0]).toEqual({'value' : 1});
  });
  test('it can return the size of the graph using the size method', () => {
    expect(myGraph.size()).toBe(2);
  });
});

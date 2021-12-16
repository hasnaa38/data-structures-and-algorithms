# Graphs Data Structure

## Introduction

A Graph is a non-linear data structure consisting of a finite set of vertices (nodes) and set of edges which connect a pair of nodes.

### Graph Terminology

* **Vertex** - a node - data object that can have zero or more adjacent vertices.
* **Edge** - a connection between two vertices.
* **Neighbor** - the vertex's adjacent vertices (connected to it by edges).
* **Degree** - the number of edges connected to that vertex.

## Classes

* The `Vertex(value)` class -> to define a vertex
* The `Edge(vertex, weight)` class -> to define an edge and weight for a vertex
* The `Graph()` class -> to define a map as a graph

## The Graph Class Methods

* `addVertex(vertex)`

Adds a vertex to the graph -> Arguments: value, Returns: The added vertex

* `addEdge(startVertex, endVertex, weight=0)`

Adds a new edge between two vertices in the graph, Arguments: 2 nodes to be connected by the edge, weight (optional), Returns: nothing

* `getAll()`

Returns all of the nodes in the graph as an array

* `getNeighbors(vertex)`

Returns an array of edges connected to the given vertex

* `size()`

Returns the total number of vertices in the graph

## Tests

![ch35 tests](graphs/images/ch35test.PNG)
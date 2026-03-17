# notes
I will be writing all the things during these weekly session, which i need to remember or i find them confusing.
- ### connections on mysql
  It is the pipe between the user and the database. One conection can access multiple data base at the same time. At large scale pooling is used to manage connections. Pool is a collection of reuseable conections, when one connection disconnects it returns to pool and ready for other user.
- When we run server.js it made connection with mysql server and when we run scheme and seed in workbench of mysql it also make connection with mysql server. Server.js send query to mysql server where it extract the data or excute the query on the database created in workbench.
- throw err = it doesnt show anything on browser but it can crashes the server, may leak some data and make app unstable.

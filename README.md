# cc-SeanGibat-comment-system

## How to Run

* ```cd comment-system```
* npm install
* bower install
* change mongo and node ports in ```/comment-system/config.js``` if necessary
* start mongo - run ```mongod```
* start the server - run ```npm start```
* browse to localhost:3000 or whatever port you entered

You will randomly be given a user. To choose one of the two users specifically, go to localhost:3000/sean or localhost:3000/kan. This could be useful for testing out voting.

## A Few Notes

*Backend*: Node/Express/Mongo/Mongoose with mongoose-materialized to help represent the tree structure

*Frontend*: Angular and Bootstrap

I made an effort to disallow illegal voting. A user may only upvote or downvote a post by 1, but they should be allowed to change their vote. Both server and client perform this check.

The sorting is done on the server. I experimented with ordering in Angular, but it felt like a UX faux-pas to suddenly move a post after you had voted on it.
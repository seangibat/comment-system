Describe in a high level the solution you have in mind
> A comment thread with nested levels is essentially a tree.

I'm going to use MongoDB and materialized paths (http://docs.mongodb.org/manual/tutorial/model-tree-structures-with-materialized-paths/) to represent the tree. I'm only going to use one model, a post, but will expose an API for creating new "threads" - dummy posts with no parents or content. If you wanted to completely replicate a reddit or HN style forum, these could contain text and would be the "OP" - original post - but the design spec called for a comment thread to be able to be added to some other page.

The front-end is going to be a self-contained module created in jQuery. If you pass in a thread ID and a container element, it will fetch the thread and display it within the container.

I'd also like deep-linking to single comments, but I'm still trying to think about how to do that within the container. It doesn't make sense to display a single comment within a container, so I may just use anchor links.



If you were to design multiple sorting systems for comments, what would those systems be and how would you implement them?
>

--

How long did this assignment take?
>

Did you learn something new?
> 

Do you feel your skills were under tested in some way?
>
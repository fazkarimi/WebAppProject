let comments = require('../models/comments');
let express = require('express');
let router = express.Router();

router.get("/",(req,res)=>res.send("cool"))

router.post("/addComment",(req,res) =>
{

    var commentId = Math.floor((Math.random() * 2000000) + 1); //Randomly generate an id between 1 and 1000000 for the comments
    var currentCommentsSize = comments.length;
    var userCommentingID =  getById(myusers,req.params.Id);
    var  userBeingCommentedId = req.body.userBeingCommentedId;
    var commentContent = req.body.content;
    var commentdate = req.body.commentDate;
    var commentTime = req.body.commentTime;

    if(req.body.content)
    {
        comments.push({  "CommentId" : commentId,
            "userCommentingID": req.body.id,
            "commentContent" : req.body.commentContent,
            "userBeingCommentedId" : req.body.userBeingCommentedId,
            "commentDate" : req.body.commentDate,
            "commentTime" : req.body.commentTime
        });

        if((currentCommentsSize + 1) == comments.length)
            res.json({ message: 'New Commented Posted'});
        else
            res.json({ message: 'Comment Could Not be posted!!'});

    }
    else{
        console.log("Please make sure a Commented is entered before pressing enter")
    }
});

/*
//adding a comment
router.addComment = (req, res_) =>
{
    var commentId = Math.floor((Math.random() * 2000000) + 1); //Randomly generate an id between 1 and 1000000 for the comments
    var currentCommentsSize = comments.length;

    var userCommentingID =  getById(myusers,req.params.Id);

    var  userBeingCommentedId = req.body.userBeingCommentedId;
    var commentContent = req.body.content;
    var commentdate = req.body.commentDate;
    var commentTime = req.body.commentTime;


    if(req.body.content)
    {
        comments.push({  "CommentId" : commentId,
            "userCommentingID": req.body.id,
            "commentContent" : req.body.commentContent,
            "userBeingCommentedId" : req.body.userBeingCommentedId,
            "commentDate" : req.body.commentDate,
            "commentTime" : req.body.commentTime
        });

        if((currentCommentsSize + 1) == comments.length)
            res.json({ message: 'New Commented Posted'});
        else
            res.json({ message: 'Comment Could Not be posted!!'});

    }
    else{
        console.log("Please make sure a Commented is entered before pressing enter")
    }

}*/

module.exports = router;


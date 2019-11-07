const express = require('express');
const routes = express.Router();

const LikeController = require("./controllers/LikeController");
const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const SolvedController = require("./controllers/SolvedController");
const CommentController = require("./controllers/CommentController");
const Post_ImageController = require("./controllers/Post_ImageController");
const Post_ReportController = require("./controllers/Post_ReportController");

//Rotas de Usuário

routes.get("/users", UserController.getallusers);
routes.get("/users/:id", UserController.getuserbyid);
routes.get("/users/:user_email", UserController.getuserbyemail);

routes.post("/users", UserController.createuser);

routes.put("/users/:id", UserController.updateuserbyid);
//routes.put("/users/:user_email", UserController.updateuserbyemail);

routes.delete("/users/:id", UserController.destroyuserbyid);
//routes.delete("/users/:user_email", UserController.destroyuserbyemail);

//Rotas de Post

routes.get("/posts", PostController.getallposts);
routes.get("/posts/:id", PostController.getpostbyid);
routes.get("/posts/:user_id", PostController.getpostbyuserid);
routes.get("/posts/:post_loc", PostController.getpostbylocation);
routes.get("/posts/:post_date", PostController.getpostbydate);

routes.post("/posts", PostController.createpost);

routes.put("/posts/:id", PostController.updatepostbyid);

routes.delete("posts/:id", PostController.deletepostbyid);

//Rotas de Comentários

routes.get("/comments/:post_id", CommentController.getallcommentsbypostid);

routes.post("/comments", CommentController.createcomment);

routes.put("/comments/:id", CommentController.updatecommentbyid);

routes.delete("/comments/:id", CommentController.deletecommentbyid);

//Rotas de Likes

routes.get("/likes/:post_id", LikeController.getalllikesbypostid);

routes.post("/likes", LikeController.createlike);

routes.put("/likes/:id", LikeController.updatelikebyid);

routes.delete("/likes/:id", LikeController.deletelikebyid);

//Rotas de Solveds

routes.get("/solveds/:post_id", SolvedController.getallsolvedbypostid);

routes.post("/solveds", SolvedController.createsolved);

routes.put("/solveds/:id", SolvedController.updatesolvedbyid);

routes.delete("/solveds/:id", SolvedController.deletesolvedbyid);

//Rotas de Post_Report

routes.get("/posts_reports/:post_id", Post_ReportController.getallpost_reportbypostid);

routes.get("/posts_reports/:user_id", Post_ReportController.getallpost_reportbyuserid);

routes.post("/posts_reports", Post_ReportController.createpost_report);

routes.put("/posts_reports/:id", Post_ReportController.updatepost_reportbyid);

routes.delete("/posts_reports/:id", Post_ReportController.deletepost_reportbyid);

//Rotas de Post_Image

routes.get("/posts_images/:post_id", Post_ImageController.getallpost_imagebypostid);

routes.post("/posts_images", Post_ImageController.createpost_image);

routes.put("/posts_images/:id", Post_ImageController.updatepost_imagebyid);

routes.delete("/posts_images/:id", Post_ImageController.deletepost_imagebyid);

module.exports = routes;
import TypiCode from "../services/typicode.js";
import { APIResponseHandler } from "../utils/errorHandler.js";

const typiCode = new TypiCode();

export const getPosts = async (req, res) => {
  try {
    let post = await typiCode.getPosts();
    if (!post) {
      throw new Error("Could not get the posts");
    }
    return APIResponseHandler(res, true, 200, "Posts fetched", post);
  } catch (err) {
    return APIResponseHandler(res, false, 400, err.message, []);
  }
};

export const createPost = async (req, res) => {
  let data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  let post = await typiCode.createPost(data);
  if (!post) {
    return res.status(400).json({
      status: false,
      message: "Could not get the posts",
      data: [],
    });
  }

  return res.status(201).json({
    status: true,
    message: "Posts created",
    data: post,
  });
};

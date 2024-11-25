import express from "express";
import { contentModel, LinkModel, useModel } from "../modules/db";
import jwt from "jsonwebtoken";
import { isValidMiddleware } from "../middleware/middleware";
import uuid4 from "uuid4";

const router = express.Router();

router.post("/signup", async (req, res) => {
  // zod and try catch block
  const username = req.body.username;
  const password = req.body.password;

  await useModel.create({
    username: username,
    password: password,
  });

  res.status(400).send("User created");
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await useModel.findOne({
    username,
    password,
  });
  // @ts-ignore
  if (existingUser) {
    const token = jwt.sign(
      // @ts-ignore
      { id: existingUser._id },
      process.env.JWT_SECRETE as string
    );

    res.status(200).json({ token });
  } else {
    res.status(403).json({
      message: "incorrect credentials !!!",
    });
  }
});

// @ts-ignore
router.post("/content", isValidMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;

  await contentModel.create({
    link,
    type,
    // @ts-ignore
    userId: req.userId,
    tags: [],
  });

  res.status(200).json({
    message: "content created successfully",
  });
});

// @ts-ignore
router.get("/content", isValidMiddleware, async (req, res) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await contentModel
    .find({
      userId: userId,
    })
    .populate("userId", "username");
  res.json({
    content,
  });
});

// @ts-ignore
router.delete("/content", isValidMiddleware, async (req, res) => {
  // @ts-ignore
  const contentId = req.body.contentId;
  await contentModel.deleteOne({
    contentId,
    // @ts-ignore
    userId: req.userId,
  });
  res.json({
    message: "Deleted",
  });
});

// @ts-ignore
router.post("/brain/share", isValidMiddleware, async (req, res) => {
  const { Share } = req.body;
  if (Share) {
    const existingLink = await LinkModel.findOne({
      userId: req.userId,
    });

    if (existingLink) {
      res.json({
        hash: existingLink.hash,
      });
      return;
    }

    const uniqueId = uuid4();

    LinkModel.create({
      userId: req.userId,
      hash: uniqueId,
    });
    res.json({
      uniqueId: uniqueId,
    });
  } else {
    LinkModel.deleteOne({
      userId: req.userId,
    });

    res.json({
      message: "Link removed!",
    });
  }
});

router.get("/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;
  const link = await LinkModel.findOne({
    hash,
  });
  // @ts-ignore
  if (!link) {
    res.status(411).json({
      message: "Sorry invalid shareLink!",
    });
    return;
  }

  const content = await contentModel.findOne({
    // @ts-ignore
    userId: link.userId,
  });
  const user = await useModel.findOne({
    // @ts-ignore
    _id: link.userId,
  });
  if (!user) {
    res.status(411).json({
      message: "User not found!",
    });
    return;
  }

  res.json({
    username: user.username,
    content: content,
  });
});

export default router;

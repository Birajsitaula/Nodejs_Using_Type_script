import userModel from "../models/userModel";
import { Router, Request, Response } from "express";
// import { hash } from "bcrypt";
import * as bcrypt from "bcrypt";

// import { where } from "sequelize";

const router = Router();

router.post("/add", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res
        .status(501)
        .json({ message: "Please enter the email and the password " });
      return;
    }

    const saltRounds = 10;
    const hashPassword = (await hash(password, saltRounds)) as any;
    const newUser = await userModel.create({ email, password: hashPassword });
    res.status(200).json({ message: "user update successfully", newUser });
  } catch (err) {
    console.error("There is an error while add the user in the database ", err);
    res.status(500).json({
      message: "There is an error while add the user in the database ",
    });
  }
});

// READ , UPDATE , AND DELETE SOON...

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userModel.findByPk(id);
    if (!user) {
      res
        .status(404)
        .json({ message: "Error!, User not found in the database " });
      return;
    }
    res.status(200).json({ message: "User Fetching successfully", user });
  } catch (err) {
    console.error(
      "There is an error while fetching the data from the database ",
      err
    );
    res.status(500).json({
      message: "There is an error while fetching the data from the database ",
    });
  }
});

// Update the data from the database
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    if (!id) {
      res.status(500).json({ message: "Error user not found " });
      return;
    }

    const findUser = await userModel.findOne({ where: { id } });
    if (!findUser) {
      res
        .status(404)
        .json({ message: "Unable to find the user from the database " });
      return;
    }

    const saltRounds = 10;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      await userModel.update(
        { email, password: hashedPassword },
        { where: { id } }
      );
    }
    res
      .status(200)
      .json({ message: "User update successfully ", id, password });
  } catch (error) {
    console.log(
      "There is an error while updating the data from the database ",
      error
    );
    res.status(500).json({
      message: "There is an error while updating the data from the database",
    });
  }
});

// Delete the user from the database
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({ message: "Error! unable to delete the data " });
      return;
    }
    const user = await userModel.destroy({
      where: { id },
    });
    res.status(201).json({ message: "User Deleted successfully", user });
  } catch (err) {
    console.error(
      "There is an error while Delete the data from the database ",
      err
    );
    res.status(500).json({
      message: "There is an error while Delete the data from the database ",
    });
  }
});
export default router;

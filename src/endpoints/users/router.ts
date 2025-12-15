import { Hono } from "hono";
import { fromHono } from "chanfana";
import { UserList } from "./userList";
import { UserCreate } from "./userCreate";
import { UserRead } from "./userRead";
import { UserUpdate } from "./userUpdate";
import { UserDelete } from "./userDelete";

export const usersRouter = fromHono(new Hono());

usersRouter.get("/", UserList);
usersRouter.post("/", UserCreate);
usersRouter.get("/:user_id", UserRead);
usersRouter.put("/:user_id", UserUpdate);
usersRouter.delete("/:user_id", UserDelete);

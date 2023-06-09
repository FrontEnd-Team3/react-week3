import { todoMock } from "__mock__/datas/todo.data";
import { rest } from "msw";

export const getTodo = rest.get("/api/todo", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoMock));
});

export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
  let title;
  let content;

  await req.json().then((data) => {
    title = data.title;
    content = data.content;
  });

  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 100000),
      title,
      content,
      state: false,
    })
  );
});

export const deleteTodo = rest.delete(
  "/api/todo/:id",
  async (req, res, ctx) => {
    const { id } = req.params;
    const filteredArr = todoMock.filter((todo) => todo.id !== id);
    return res(ctx.status(200), ctx.json(filteredArr));
  }
);

// export const updateTodoContent = rest.post(
//   "/api/todo/:id",
//   async (req, res, ctx) => {
//     const { id } = req.params;
//     let content;

//     await req.json().then((data) => {
//       content = data.content;
//     });

//     return res(ctx.status(200), ctx.json({id, content}));
//   }
// );

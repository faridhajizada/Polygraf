"use server";

import ky from "ky";

export async function getData(id) {
  const api = ky.extend({
    hooks: {
      beforeRequest: [
        (request) => {
          request.headers.set("X-Requested-With", "ky");
        },
      ],
    },
  });

  const res = await api
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .json();

  console.log("🚀 ~ getData ~ res:", res);

  return res;
}

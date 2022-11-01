export default {
  name: "pins",
  title: "Pins",
  type: "document",
  fields: [
    {
      name: "categoria",
      title: "Categoria",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

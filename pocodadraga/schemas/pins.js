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

//nome - foto - celular - rede social - endereço - chave pix - titular pix - qr code pix - (agencia, banco, conta)

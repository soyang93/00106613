export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required().error("Campo obrigatório."),
    },
    {
      name: "fotoPerfil",
      title: "FotoPerfil",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Campo obrigatório."),
    },
    {
      name: "celular",
      title: "Celular",
      type: "string",
    },
    {
      name: "redeSocial",
      title: "RedeSocial",
      type: "string",
    },
    {
      name: "endereco",
      title: "Endereco",
      type: "string",
    },
    {
      name: "chavePix",
      title: "ChavePix",
      type: "string",
    },
    {
      name: "titularPix",
      title: "TitularPix",
      type: "string",
    },
    {
      name: "qrCodePix",
      title: "QrCodePix",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "agencia",
      title: "Agencia",
      type: "string",
    },
    {
      name: "banco",
      title: "Banco",
      type: "string",
    },
    {
      name: "conta",
      title: "Conta",
      type: "string",
    },
    {
      name: "historia",
      title: "Historia",
      type: "string",
      validation: (Rule) => Rule.required().error("Campo obrigatório."),
    },
  ],
};

//nome - foto - celular - rede social - endereço - chave pix - titular pix - qr code pix - (agencia, banco, conta) - bio

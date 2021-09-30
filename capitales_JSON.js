var jsonTexto = [
  {
    Capital: "leticia",
    Conexion: [],
  },
  {
    Capital: "medellin",
    Conexion: [
      {
        capital: "tunja",
      },
      {
        capital: "manizales",
      },
      {
        capital: "quibdo",
      },
      {
        capital: "monteria",
      },
    ],
  },
  {
    Capital: "arauca",
    Conexion: [
      {
        capital: "yopal",
      },
      {
        capital: "bucaramanga",
      },
    ],
  },
  {
    Capital: "barranquilla",
    Conexion: [
      {
        capital: "cartagena_de_indias",
      },
      {
        capital: "valledupar",
      },
    ],
  },
  {
    Capital: "cartagena_de_indias",
    Conexion: [
      { capital: "barranquilla" },
      {
        capital: "bucaramanga",
      },
      {
        capital: "sincelejo",
      },
    ],
  },
  {
    Capital: "tunja",
    Conexion: [
      {
        capital: "medellin",
      },
      {
        capital: "yopal",
      },
      {
        capital: "bogota",
      },
      {
        capital: "bucaramanga",
      },
    ],
  },
  {
    Capital: "manizales",
    Conexion: [
      {
        capital: "medellin",
      },
      {
        capital: "bogota",
      },
      {
        capital: "pereira",
      },
      {
        capital: "ibague",
      },
    ],
  },
  {
    Capital: "florencia",
    Conexion: [
      {
        capital: "popayan",
      },
      {
        capital: "mocoa",
      },
    ],
  },
  {
    Capital: "yopal",
    Conexion: [
      {
        capital: "arauca",
      },
      {
        capital: "tunja",
      },
      {
        capital: "puerto_carreno",
      },
    ],
  },
  {
    Capital: "popayan",
    Conexion: [
      {
        capital: "florencia",
      },
      {
        capital: "neiva",
      },
      {
        capital: "pasto",
      },
      {
        capital: "cali",
      },
    ],
  },
  {
    Capital: "valledupar",
    Conexion: [
      {
        capital: "barranquilla",
      },
      {
        capital: "riohacha",
      },
      {
        capital: "santa_marta",
      },
      {
        capital: "san_jose_de_cucuta",
      },
    ],
  },
  {
    Capital: "quibdo",
    Conexion: [
      {
        capital: "medellin",
      },
    ],
  },
  {
    Capital: "monteria",
    Conexion: [
      {
        capital: "medellin",
      },
      {
        capital: "sincelejo",
      },
    ],
  },
  {
    Capital: "bogota",
    Conexion: [
      {
        capital: "tunja",
      },
      {
        capital: "manizales",
      },
      {
        capital: "villavicencio",
      },
      {
        capital: "ibague",
      },
    ],
  },
  {
    Capital: "inirida",
    Conexion: [
      {
        capital: "puerto_carreno",
      },
    ],
  },
  {
    Capital: "san_jose_del_guaviare",
    Conexion: [
      {
        capital: "villavicencio",
      },
    ],
  },
  {
    Capital: "neiva",
    Conexion: [
      {
        capital: "popayan",
      },
      {
        capital: "ibague",
      },
    ],
  },

  {
    Capital: "riohacha",
    Conexion: [
      {
        capital: "valledupar",
      },
    ],
  },
  {
    Capital: "santa_marta",
    Conexion: [
      {
        capital: "valledupar",
      },
    ],
  },
  {
    Capital: "villavicencio",
    Conexion: [
      {
        capital: "bogota",
      },
      {
        capital: "san_jose_del_guaviare",
      },
    ],
  },
  {
    Capital: "pasto",
    Conexion: [
      {
        capital: "popayan",
      },
      {
        capital: "mocoa",
      },
    ],
  },
  {
    Capital: "san_jose_de_cucuta",
    Conexion: [
      {
        capital: "valledupar",
      },
      {
        capital: "bucaramanga",
      },
    ],
  },
  {
    Capital: "mocoa",
    Conexion: [
      {
        capital: "florencia",
      },
      {
        capital: "pasto",
      },
    ],
  },
  {
    Capital: "armenia",
    Conexion: [
      {
        capital: "pereira",
      },
      {
        capital: "ibague",
      },
      {
        capital: "cali",
      },
    ],
  },
  {
    Capital: "pereira",
    Conexion: [
      {
        capital: "manizales",
      },
      {
        capital: "armenia",
      },
    ],
  },

  {
    Capital: "san_andres",
    Conexion: [],
  },

  {
    Capital: "bucaramanga",
    Conexion: [
      {
        capital: "arauca",
      },
      {
        capital: "cartagena_de_indias",
      },
      {
        capital: "tunja",
      },
      {
        capital: "san_jose_de_cucuta",
      },
      {
        capital: "sincelejo",
      },
    ],
  },

  {
    Capital: "sincelejo",
    Conexion: [
      {
        capital: "cartagena_de_indias",
      },
      {
        capital: "monteria",
      },
      {
        capital: "bucaramanga",
      },
    ],
  },

  {
    Capital: "ibague",
    Conexion: [
      {
        capital: "manizales",
      },
      {
        capital: "bogota",
      },
      {
        capital: "neiva",
      },
      {
        capital: "armenia",
      },
    ],
  },

  {
    Capital: "cali",
    Conexion: [
      {
        capital: "popayan",
      },
      {
        capital: "armenia",
      },
    ],
  },

  {
    Capital: "mitu",
    Conexion: [],
  },

  {
    Capital: "puerto_carreno",
    Conexion: [
      {
        capital: "yopal",
      },
      {
        capital: "inirida",
      },
    ],
  },
];
export let red = JSON.parse(JSON.stringify(jsonTexto));

var jsonTexto = [
  {
    Capital: "leticia",
    Conexion: [],
  },
  {
    Capital: "medellin",
    Conexion: [
      {
        tunja: "1",
      },
      {
        manizales: "1",
      },
      {
        quibdo: "1",
      },
      {
        monteria: "1",
      },
    ],
  },
  {
    Capital: "arauca",
    Conexion: [
      {
        yopal: "1",
      },
      {
        bucaramanga: "1",
      },
    ],
  },
  {
    Capital: "barranquilla",
    Conexion: [
      {
        cartagena_de_indias: "1",
      },
      {
        valledupar: "1",
      },
    ],
  },
  {
    Capital: "cartagena_de_indias",
    Conexion: [
      { barranquilla: "1" },
      {
        bucaramanga: "1",
      },
      {
        sincelejo: "1",
      },
    ],
  },
  {
    Capital: "tunja",
    Conexion: [
      {
        medellin: "1",
      },
      {
        yopal: "1",
      },
      {
        bogota: "1",
      },
      {
        bucaramanga: "1",
      },
    ],
  },
  {
    Capital: "manizales",
    Conexion: [
      {
        medellin: "1",
      },
      {
        bogota: "1",
      },
      {
        pereira: "1",
      },
      {
        ibague: "1",
      },
    ],
  },
  {
    Capital: "florencia",
    Conexion: [
      {
        popayan: "1",
      },
      {
        mocoa: "1",
      },
    ],
  },
  {
    Capital: "yopal",
    Conexion: [{ arauca: "1" }, { tunja: "1" }, { puerto_carreno: "1" }],
  },
  {
    Capital: "popayan",
    Conexion: [
      {
        florencia: "1",
      },
      {
        neiva: "1",
      },
      {
        pasto: "1",
      },
      {
        cali: "1",
      },
    ],
  },
  {
    Capital: "valledupar",
    Conexion: [
      {
        barranquilla: "1",
      },
      {
        riohacha: "1",
      },
      {
        santa_marta: "1",
      },
      {
        san_jose_de_cucuta: "1",
      },
    ],
  },
  {
    Capital: "quibdo",
    Conexion: [
      {
        medellin: "1",
      },
    ],
  },
  {
    Capital: "monteria",
    Conexion: [{ medellin: "1" }, { sincelejo: "1" }],
  },
  {
    Capital: "bogota",
    Conexion: [
      {
        tunja: "1",
      },
      {
        manizales: "1",
      },
      {
        villavicencio: "1",
      },
      {
        ibague: "1",
      },
    ],
  },
  {
    Capital: "inirida",
    Conexion: [
      {
        puerto_carreno: "1",
      },
    ],
  },
  {
    Capital: "san_jose_del_guaviare",
    Conexion: [
      {
        villavicencio: "1",
      },
    ],
  },
  {
    Capital: "neiva",
    Conexion: [
      {
        popayan: "1",
      },
      {
        ibague: "1",
      },
    ],
  },

  {
    Capital: "riohacha",
    Conexion: [{ valledupar: "1" }],
  },
  {
    Capital: "santa_marta",
    Conexion: [{ valledupar: "1" }],
  },
  {
    Capital: "villavicencio",
    Conexion: [{ bogota: "1" }, { san_jose_del_guaviare: "1" }],
  },
  {
    Capital: "pasto",
    Conexion: [{ popayan: "1" }, { mocoa: "1" }],
  },
  {
    Capital: "san_jose_de_cucuta",
    Conexion: [{ valledupar: "1" }, { bucaramanga: "1" }],
  },
  {
    Capital: "mocoa",
    Conexion: [{ florencia: "1" }, { pasto: "1" }],
  },
  {
    Capital: "armenia",
    Conexion: [{ pereira: "1" }, { ibague: "1" }, { cali: "1" }],
  },
  {
    Capital: "pereira",
    Conexion: [
      {
        manizales: "1",
      },
      {
        armenia: "1",
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
        arauca: "1",
      },
      {
        cartagena_de_indias: "1",
      },
      {
        tunja: "1",
      },
      {
        san_jose_de_cucuta: "1",
      },
      {
        sincelejo: "1",
      },
    ],
  },

  {
    Capital: "sincelejo",
    Conexion: [
      {
        cartagena_de_indias: "1",
      },
      {
        monteria: "1",
      },
      {
        bucaramanga: "1",
      },
    ],
  },

  {
    Capital: "ibague",
    Conexion: [
      {
        manizales: "1",
      },
      {
        bogota: "1",
      },
      {
        neiva: "1",
      },
      {
        armenia: "1",
      },
    ],
  },

  {
    Capital: "cali",
    Conexion: [
      {
        popayan: "1",
      },
      {
        armenia: "1",
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
        yopal: "1",
      },
      {
        inirida: "1",
      },
    ],
  },
];
export let red = JSON.parse(JSON.stringify(jsonTexto));

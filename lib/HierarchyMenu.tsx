export const HierarchyMenu = [
  {
    id: Math.floor(Math.random() * 9999),
    text: "Dashboard",
    path: "/inapp/dashboard",
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "Master Data",
    path: "",
    items: [
      {
        id: Math.floor(Math.random() * 9999),
        text: "PT",
        path: "/inapp/pt",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Unit Usaha",
        path: "/inapp/unitusaha",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Afdeling",
        path: "/inapp/afdeling",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Blok",
        path: "/inapp/blok",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Kegiatan",
        path: "/inapp/kegiatan",
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Users Menu dan Roles",
        items: [
          {
            id: Math.floor(Math.random() * 9999),
            text: "User Scope",
            path: "/inapp/userscope",
          },
          {
            id: Math.floor(Math.random() * 9999),
            text: "Role Permission",
            path: "/inapp/rolepermission",
          },
          {
            id: Math.floor(Math.random() * 9999),
            text: "Users",
            path: "/inapp/user",
          },
        ],
      },
      {
        id: Math.floor(Math.random() * 9999),
        text: "Kendaraan dan Mesin",
        path: "/inapp/kendaraandanmesin",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "Kongsi Kerja",
    path: "/inapp/kongsikerja",
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "Premi Lainnya",
    path: "/inapp/premilain",
  },
  {
    id: Math.floor(Math.random() * 9999),
    text: "X",
    items: [
      {
        id: Math.floor(Math.random() * 9999),
        text: "Blok",
      },
    ],
  },
];

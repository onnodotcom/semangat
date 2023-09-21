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
        text: "Users dan Roles",
        items: [
          {
            id: Math.floor(Math.random() * 9999),
            text: "Role Permission",
            path: "/inapp/rolepermission",
          },
        ],
      },
    ],
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

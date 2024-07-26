import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Earth,
  SquareStack,
  ArrowBigUp,
  ShieldMinus,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Configurações",
      menus: [
        {
          href: "/settings/tipos",
          label: "Tipos",
          active: pathname.includes("/settings/tipos"),
          icon: SquareStack,
          submenus: [],
        },
        {
          href: "/settings/status",
          label: "Status",
          active: pathname.includes("/settings/status"),
          icon: ShieldMinus,
          submenus: [],
        },
        {
          href: "/settings/pais",
          label: "Pais",
          active: pathname.includes("/settings/pais"),
          icon: Earth,
          submenus: [],
        },
        {
          href: "/settings/apiconsumida",
          label: "Api Consumida",
          active: pathname.includes("/settings/apiconsumida"),
          icon: ArrowBigUp,
          submenus: [],
        },
      ],
    },
  ];
}

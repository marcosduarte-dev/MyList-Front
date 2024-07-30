import { LucideIcon } from "lucide-react";

//=======================================SideBar
declare type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

declare type CollapseMenuButtonProps = {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen: boolean | undefined;
};

declare type ContentLayoutProps = {
  title: string;
  children: React.ReactNode;
};

declare type MenuProps = {
  isOpen: boolean | undefined;
};

declare type NavbarProps = {
  title: string;
};

declare type SidebarToggleProps = {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
};

// ===================================== Geral

declare type Collumns = {
  title: string;
  dataIndex: string;
  key: string;
};

declare type DataTableProps = {
  columns: Collumns[];
  data: any[];
  onEdit: Function;
  onDelete: Function;
};

declare type HomePageProps = {
  status: StatusModel[];
  data: RegistroModel[];
};

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// ===================================== Models API MyList

declare type TiposModel = {
  id: string;
  tipo: string;
  ativo?: string;
  color: string;
};

declare type StatusModel = {
  id: string;
  status: string;
  ativo?: string;
  color: string;
};

declare type PaisModel = {
  id: string;
  nome: string;
  sigla: string;
  ativo: string;
  color: string;
};

declare type RegistroModel = {
  id: string;
  lista: object;
  poster: string;
  nome: string;
  sinopse: string;
  tipo: TiposModel;
  apiConsumida: object;
  pais: PaisModel;
  status: StatusModel;
  temporadas: number;
  totalEpisodios: number;
  episodiosAssistidos: number;
  rating: number;
  comentarios: string;
  dataComeco: Date;
  dataFinal: Date;
  dataRegistro: Date;
  ativo: boolean;
};

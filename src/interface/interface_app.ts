import { statusCode } from "../utils/constant";

export interface IAppStatus {
  status: number;
}

export interface MenuAppItem {
  id: number;
  page: string;
  href: string;
}
export const MENU_PAGES: MenuAppItem[] = [
  { id: 1, page: "Home", href: "/" },
  { id: 2, page: "Resume", href: "/resume" },
  { id: 3, page: "Contact", href: "/contact" },
];
export class InterfaceApp {
  constructor(private status: number = statusCode.OK) {}

  setStatus(status: number): void {
    this.status = status;
  }

  getMenuApp(): MenuAppItem[] {
    return [...MENU_PAGES];
  }

  getStatus(): IAppStatus {
    return { status: this.status };
  }
}

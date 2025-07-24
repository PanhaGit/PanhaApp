import { IAppStatus, InterfaceApp } from "../interface/interface_app";
export class Helper {
  private interface = new InterfaceApp();

  getStatus(): IAppStatus {
    return this.interface.getStatus();
  }
}

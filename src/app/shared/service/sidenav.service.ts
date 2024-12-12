import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenavStatus = new BehaviorSubject<boolean>(false);
  sidenavStatus$ = this.sidenavStatus.asObservable();

  toggleSidenav():void {
    this.sidenavStatus.next(!this.sidenavStatus.value);
  }

}

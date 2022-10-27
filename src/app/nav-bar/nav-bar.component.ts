import { Component, OnInit } from '@angular/core';
import{Overlay} from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog, public overlay:Overlay) { }

  ngOnInit(): void {
  }

openDialog(): void {
  if(this.dialog.openDialogs.length==0){  
  const dialogRef = this.dialog.open(CartComponent, {
    hasBackdrop: false,
    scrollStrategy: this.overlay.scrollStrategies.noop(),    
    position: {
      top: '30px',
      right: '80px'}
  });

  dialogRef.afterClosed().subscribe(result => {
   
  });
}
}

}

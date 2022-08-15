import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() error='';
  @Output() onClose  = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit()
  }

}

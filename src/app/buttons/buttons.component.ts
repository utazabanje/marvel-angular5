import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() backUrl = '';
  @Output() edit = new EventEmitter();
  @Output() save = new EventEmitter();
  @Input() showEdit = true;
  @Input() showSave = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl(this.backUrl);
  }

  onEdit() {
    this.edit.emit();
  }

  onSave() {
    this.save.emit();
  }

}

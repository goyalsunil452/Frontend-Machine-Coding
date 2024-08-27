import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {
  @Input() explorer: any;
  expand = false;
  showInput = {
    visible: false,
    isFolder: false,
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.explorer)
  }

  setExpand() {
    this.expand = !this.expand;
  }

  handleNewFolder(event: any, type: any) {
    event.stopPropagation();
    this.showInput.visible = true
    this.showInput.isFolder = type == 'folder' ? true : false;
    this.expand = true;
  }
  onAddFolder(event: any) {
    if (event.keyCode == 13 && event.target.value) {
      this.showInput.visible = false;
      const data = {
        id: "3",
        name: event.target.value,
        isFolder: this.showInput.isFolder,
        items: [],
      }
      this.showInput.isFolder ? this.explorer.items.unshift(data) : this.explorer.items.push(data)
    }
  }
  addFile(event: any) {
    event.stopPropagation();
  }
  removeInputBox(event: any) {
    // event.stopPropagation();
    this.showInput.visible = false;
  }
}

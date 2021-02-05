import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GithubSearchOptions } from '../../models/github-search-options.model';

@Component({
  selector: 'github-search-options',
  templateUrl: './github-search-options.component.html',
  styleUrls: ['./github-search-options.component.scss']
})
export class GithubSearchOptionsComponent implements OnInit {
  readonly textMaxLength = 100; 
  seachOptionsForm: FormGroup = new FormGroup({
    username : new FormControl('amalasquezm', [Validators.required, Validators.maxLength(this.textMaxLength)]),    
    repository : new FormControl('fulltimeforce-test', [Validators.required, Validators.maxLength(this.textMaxLength)])
  });
  @Output() search = new EventEmitter<GithubSearchOptions>();

  constructor() { }

  ngOnInit() {
  }

  performSearch() {
    const { username, repository } = this.seachOptionsForm.value;

    this.search.emit({ username,  repository})
  }
}

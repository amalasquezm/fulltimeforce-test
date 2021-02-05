/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubCommitHistoryComponent } from './github-commit-history.component';
import { TestingModule } from '../testing/testing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('GithubCommitHistoryComponent', () => {
  let component: GithubCommitHistoryComponent;
  let fixture: ComponentFixture<GithubCommitHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ GithubCommitHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubCommitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

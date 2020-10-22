import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileComponentComponent } from './author-profile-component.component';

describe('AuthorProfileComponentComponent', () => {
  let component: AuthorProfileComponentComponent;
  let fixture: ComponentFixture<AuthorProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorProfileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

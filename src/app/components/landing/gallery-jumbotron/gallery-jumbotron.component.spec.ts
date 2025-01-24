import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryJumbotronComponent } from './gallery-jumbotron.component';

describe('GalleryJumbotronComponent', () => {
  let component: GalleryJumbotronComponent;
  let fixture: ComponentFixture<GalleryJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryJumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

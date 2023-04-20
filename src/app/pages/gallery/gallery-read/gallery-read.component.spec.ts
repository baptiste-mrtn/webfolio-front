import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryReadComponent } from './gallery-read.component';

describe('GalleryReadComponent', () => {
  let component: GalleryReadComponent;
  let fixture: ComponentFixture<GalleryReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

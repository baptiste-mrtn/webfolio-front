import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesReadComponent } from './sites-read.component';

describe('SitesReadComponent', () => {
  let component: SitesReadComponent;
  let fixture: ComponentFixture<SitesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

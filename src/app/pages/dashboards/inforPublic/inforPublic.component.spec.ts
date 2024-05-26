import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforPublicComponent } from './inforPublic.component';

describe('BlogComponent', () => {
  let component: InforPublicComponent;
  let fixture: ComponentFixture<InforPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

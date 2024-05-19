import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebpublicComponent } from './webpublic.component';

describe('WebpublicComponent', () => {
  let component: WebpublicComponent;
  let fixture: ComponentFixture<WebpublicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

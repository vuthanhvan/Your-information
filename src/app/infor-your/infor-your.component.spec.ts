import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InforYourComponent } from './infor-your.component';



describe('BlogComponent', () => {
  let component: InforYourComponent;
  let fixture: ComponentFixture<InforYourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforYourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforYourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

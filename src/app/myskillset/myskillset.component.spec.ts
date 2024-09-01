import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskillsetComponent } from './myskillset.component';

describe('MyskillsetComponent', () => {
  let component: MyskillsetComponent;
  let fixture: ComponentFixture<MyskillsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyskillsetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyskillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

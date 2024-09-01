import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentrowComponent } from './contentrow.component';

describe('ContentrowComponent', () => {
  let component: ContentrowComponent;
  let fixture: ComponentFixture<ContentrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

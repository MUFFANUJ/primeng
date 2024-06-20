import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperHeaderComponent } from './upper-header.component';

describe('UpperHeaderComponent', () => {
  let component: UpperHeaderComponent;
  let fixture: ComponentFixture<UpperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

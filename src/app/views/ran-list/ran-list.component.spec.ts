import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanListComponent } from './ran-list.component';

describe('RanListComponent', () => {
  let component: RanListComponent;
  let fixture: ComponentFixture<RanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedicineComponent } from './search-medicine.component';

describe('SearchMedicineComponent', () => {
  let component: SearchMedicineComponent;
  let fixture: ComponentFixture<SearchMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

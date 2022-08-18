import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndReorderingComponent } from './dnd-reordering.component';

describe('DndReorderingComponent', () => {
  let component: DndReorderingComponent;
  let fixture: ComponentFixture<DndReorderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndReorderingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndReorderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

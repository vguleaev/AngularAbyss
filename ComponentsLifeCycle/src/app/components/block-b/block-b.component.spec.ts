import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBComponent } from './block-b.component';

describe('BlockBComponent', () => {
  let component: BlockBComponent;
  let fixture: ComponentFixture<BlockBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAComponent } from './block-a.component';

describe('BlockAComponent', () => {
  let component: BlockAComponent;
  let fixture: ComponentFixture<BlockAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCComponent } from './block-c.component';

describe('BlockCComponent', () => {
  let component: BlockCComponent;
  let fixture: ComponentFixture<BlockCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

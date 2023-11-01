import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThumbnailInfoComponent } from './get-thumbnail-info.component';

describe('GetThumbnailInfoComponent', () => {
  let component: GetThumbnailInfoComponent;
  let fixture: ComponentFixture<GetThumbnailInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetThumbnailInfoComponent]
    });
    fixture = TestBed.createComponent(GetThumbnailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

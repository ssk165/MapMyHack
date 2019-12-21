import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaptestPage } from './maptest.page';

describe('MaptestPage', () => {
  let component: MaptestPage;
  let fixture: ComponentFixture<MaptestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaptestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

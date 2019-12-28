import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppConfigService } from '../../services/app-config-service.service';

describe('AppComponent', () => {
  const mockedAppConfigService: any = jasmine.createSpyObj('AppConfigService', ['init']);

  let appConfigService: AppConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: AppConfigService,
          useValue: mockedAppConfigService
        }
      ]
    }).compileComponents();

    appConfigService = TestBed.get(AppConfigService);
    // MOCK APP INITIALIZER loading settings
    AppConfigService.settings = {
      title: 'kargonaut'
    };
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kargonaut'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kargonaut');
  });
});

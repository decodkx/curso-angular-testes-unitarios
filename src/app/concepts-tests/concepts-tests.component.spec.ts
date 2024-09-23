import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConceptsTestsComponent } from "./concepts-tests.component";

describe('ConceptTestsComponent', () => {

  let name: string;
  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>

  beforeEach(() => {
    name = 'Dan'

    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ConceptsTestsComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  it('Deve renderizar texto na página', () => {
    expect(name).toContain('Dan')
  })
})

import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { beforeEach, describe, vi, it } from "vitest";
import { DialogRef, DIALOG_DATA } from "@angular/cdk/dialog";
import { CoursesDialog } from "./courses-dialog";
import { CoursesService } from "../services/courses.service";
import { MOCK_COURSES } from "../testing/testing-data";


describe('CoursesDialog', async () => {
    let component: CoursesDialog;
    let fixture: ComponentFixture<CoursesDialog>;
    let de: DebugElement;
    let mockCoursesService: any;
    let mockDialogRef: any;

    beforeEach(async () => {
        mockCoursesService = {
            saveCourse: vi.fn().mockResolvedValue({})
        }
    mockDialogRef = {
        close: vi.fn()
    }
})

    await TestBed.configureTestingModule({
        imports: [CoursesDialog],
        providers:[
            {provide: CoursesService, useValue: mockCoursesService},
            {provide: DialogRef, useValue: mockDialogRef},
            {provide: DIALOG_DATA, useValue: {course: MOCK_COURSES[0]}}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesDialog);
        de = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();

    it('should initialize the form with course data', () =>{
    })

    it('should call saveCourse and close dialog', () =>{
    })

    it('should handle all from field errors', () => {
    })


})


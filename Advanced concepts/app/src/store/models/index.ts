export interface CourseItem{
    id:string;
    department:string;
    name:string
}

export interface IState {
    readonly courses: Array<CourseItem>
}
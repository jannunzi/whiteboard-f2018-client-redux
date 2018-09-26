const courses = [
    {
        id: '123',
        title: 'CS5200'
    },
    {
        id: '234',
        title: 'CS5610'
    }
]

export default class CourseService {
    findAllCourses = () =>
        courses
}
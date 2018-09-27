let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1'
            },
            {
                title: 'Week 2'
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610'
    }
]

export default class CourseService {
    findAllCourses = () =>
        courses
    createCourse = course =>
        courses.push(course)
    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        )
}
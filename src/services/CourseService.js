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
            },
            {
                title: 'Week 3'
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: []
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
    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }
}
let courses = [
    {
        id: '321',
        title: 'CS1800'
    },
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics: [
                            {
                                title: 'topic 1',
                                widgets: [
                                    {title: 'AAA'},
                                    {title: 'BBB'}
                                ]
                            },
                            {
                                title: 'topic 2',
                                widgets: [
                                    {title: 'CCC'},
                                    {title: 'DDD'}
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics: [
                            {
                                title: 'topic a'
                            },
                            {
                                title: 'topic b'
                            },
                            {
                                title: 'topic c'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A'
                    },
                    {
                        title: 'Lesson B'
                    },
                    {
                        title: 'Lesson C'
                    }
                ]
            },
            {
                title: 'Week 3',
                lessons: []
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
    findCourseById = courseId =>
        fetch("http://localhost:8080/api/course/" + courseId)
            .then(response => response.json())
    findAllCourses = () =>
        fetch("http://localhost:8080/api/course")
            .then(response => response.json())
    createCourse = course =>
        fetch("http://localhost:8080/api/course", {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    deleteCourse = courseId =>
      fetch("http://localhost:8080/api/course/" + courseId, {
        method: 'delete',
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json())
    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }
}
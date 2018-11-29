public void testFindCourseAuthor() {
    Course course = courseRepository.findById(1).get();
    Faculty faculty = course.getAuthor();
    System.out.println(faculty.getFirstName());
}

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const { courseId } = params;
  return <div>CourseIdPage {courseId}</div>;
};

export default CourseIdPage;

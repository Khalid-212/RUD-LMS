import { createClient, SupabaseClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yowdzcszgmmoftgqtahz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvd2R6Y3N6Z21tb2Z0Z3F0YWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzNjUzMjEsImV4cCI6MTk3OTk0MTMyMX0.OcQcwv8GeT4IuzUMXjtjhzy1Nu7sShbcjXtfJdmpV6Y";
const supabase = createClient(supabaseUrl, supabaseKey);

function errorGuard(error) {
  if (error) {
    console.log(error);
  }
  return [];
}

export async function getStudentlist() {
  let { data, error } = await supabase.from("Student").select("*");
  errorGuard(error);
  return data;
}

export async function getStudent(id) {
  const { data, error } = await supabase
    .from("Student")
    .select("*")
    .eq("id", id);
  errorGuard(error);
  return data;
}
// get student by id
export async function getStudentById(id) {
  const { data, error } = await supabase
    .from("Student")
    .select("*")
    .eq("id", id);
  errorGuard(error);
  return data[0];
}

// a function to get student id from usernmae and password
export async function getStudentByCredentials(username, password) {
  const { data, error } = await supabase
    .from("Student")
    .select("*")
    .eq("userName", username)
    .eq("password", password);
  errorGuard(error);
  return data[0];
}

export async function getAdminByCredentials(username, password) {
  const { data, error } = await supabase
    .from("Admin")
    .select("*")
    .eq("username", username)
    .eq("password", password);
  errorGuard(error);

  return data[0];
}

export async function addStudent(student) {
  const { data, error } = await supabase.from("Student").insert(student);
  errorGuard(error);
  return data;
}

// export async function getCourses() {
//   const { data, error } = await supabase.from("Courses").select("*");
//   errorGuard(error);
//   return data;
// }

// a finction to get all courses
export async function getallCourses() {
  const { data, error } = await supabase.from("Course").select("*");
  errorGuard(error);
  return data;
}

export async function getCourse(id) {
  const { data, error } = await supabase
    .from("Course")
    .select("*")
    .eq("id", id);
  errorGuard(error);
  return data;
}
// create a function to add a new Course to the database
export async function addCourse(course) {
  const { data, error } = await supabase.from("Course").insert(course);
  errorGuard(error);
  return data;
}

export async function assignCourseToStudent(courseId, studentId) {
  const student = await getStudent(studentId);
  if (!student) {
    throw new Error("Student not found");
  }
  const course = await getCourse(courseId);
  if (!course) {
    throw new Error("Course not found");
  }
  const { data, error } = await supabase
    .from("CourseToStudent")
    .insert([{ courseId, studentId }]);
  errorGuard(error);
  return data[0];
}
export async function getimagesinDB() {
  const { data, error } = await supabase.storage.getBucket("profilepictures");
  errorGuard(error);
  return data;
}
// a function to assign courses to all students

export async function getCourseForStudent(StudentId) {
  const { data, error } = await supabase
    .from("CourseToStudent")
    .select("*")
    .eq("StudentId", StudentId);
  errorGuard(error);
  return data;
}

export async function submitAnswer(answer) {
  const { data, error } = await supabase.from("Assignment").insert(answer);
  errorGuard(error);
  return data;
}

export async function getAllAssignmentsListing() {
  const { data, error } = await supabase.from("Assignment").select("*");
  errorGuard(error);
  return data;
}

export async function addQuestion(question) {
  const { data, error } = await supabase
    .from("QuestionDefinition")
    .insert(question);
  errorGuard(error);
  return data;
}

// get assignment by id
export async function getAssignmentById(id) {
  const { data, error } = await supabase
    .from("Assignment")
    .select("*")
    .eq("StudentId", id);
  errorGuard(error);
  return data;
}

// rebaniya form data
export async function getTilawa() {
  let { data, error } = await supabase.from("RebaiyaForm").select("tilawa");
  errorGuard(error);
  return data;
}

export async function getRewatibData() {
  let { data, error } = await supabase.from("RebaiyaForm").select("*");
  errorGuard(error);
  return data;
}
// get students from course

export async function getAdmin() {
  const { data, error } = await supabase.from("Admin").select("*");
  errorGuard(error);
  return data;
}

export async function getQuestions() {
  const { data, error } = await supabase.from("QuestionDefinition").select("*");
  errorGuard(error);
  return data;
}

export async function getQuestionById(id) {
  const { data, error } = await supabase
    .from("QuestionDefinition")
    .select("*")
    .eq("id", id);
  errorGuard(error);
  return data;
}

export async function addAdmin(admin) {
  const { data, error } = await supabase.from("Admin").insert(admin);
  errorGuard(error);
  return data[0];
}

// update correct answer
export async function updateCorrectAnswer(id, Correct, QuestionId) {
  const { data, error } = await supabase
    .from("Assignment")
    .update({ Correct: "Correct" })
    .eq("Question", QuestionId);
  errorGuard(error);
  return data;
}

// let { data: Assignment, error } = await supabase
//   .from("Assignment")
//   .select("Correct");

// creat add rebaniya
export async function submitRebaniyaform(rebaniya) {
  const { data, error } = await supabase.from("RebaiyaForm").insert(rebaniya);
  // const { data, error } = await supabase.from("Course").insert(course);
  errorGuard(error);
  return data;
}

// creat add session
export async function addSession(studentId) {
  const { data, error } = await supabase
    .from("studentSession")
    .insert(studentId);
  errorGuard(error);
  return data;
}
// get all images from supabase
export async function getImages() {
  const { data, error } = await supabase.storage.getBucket("profilepictures");
  errorGuard(error);
  return data;
}

export async function allBuckets() {
  const { data, error } = await supabase.storage.listBuckets();
  errorGuard(error);
  return data;
}

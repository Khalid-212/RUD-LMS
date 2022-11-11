import { createClient } from "@supabase/supabase-js";
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

export async function getCourses() {
  const { data, error } = await supabase.from("Courses").select("*");
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
  return data[0];
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

export async function getCourseForStudent(StudentId) {
  const { data, error } = await supabase
  .from("CourseToStudent")
  .select("*")
  .eq("StudentId", StudentId);
  errorGuard(error);
  return data;
}
// rebaniya form data
export async function getTilawa() {
  let { data, error } = await supabase
  .from('RebaiyaForm')
  .select('tilawa')
  errorGuard(error);
  return data;
}


export async function getRewatibData() {
  let { data, error } = await supabase
  .from('RebaiyaForm')
  .select('*')
  errorGuard(error);
  return data;
}
// get students from course

export async function getAdmin() {
  const { data, error } = await supabase.from("Admin").select("*");
  errorGuard(error);
  return data;
}

export async function addAdmin(admin) {
  const { data, error } = await supabase.from("Admin").insert(admin);
  errorGuard(error);
  return data[0];
}

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

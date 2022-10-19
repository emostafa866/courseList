import React,{useState} from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


function App() {
let [courses,setCourses]=useState([
  {name:'html'},
  {name:'css'},
 { name:'jquery'}
])

const addCourse=(newCourse)=>{
  const newCourses=[...courses];
  newCourses.push(newCourse)
  setCourses(newCourses)
}

const deleteCourse=(index)=>{
  let ncourses=[...courses]
  ncourses.splice(index,1)
  setCourses(ncourses)
  
}

const editCourse=(index,value)=>{
let updatedCourses=[...courses];
let updatedCourse=updatedCourses[index]
updatedCourse.name=value
setCourses(updatedCourses)
}

let newCourses=courses.map((course,index)=>{
  return(
    
       <CourseList  index={index} course={course} deleteCourse={deleteCourse} editCourse={editCourse} />
   
 
  )
})

  return (
    <div className='App'>
      <h1>Course List</h1>
      <CourseForm addCourse={addCourse}/>
      <ul>{ newCourses }</ul> 
    </div>
  );
}

export default App;

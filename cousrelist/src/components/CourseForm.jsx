import React,{useState} from 'react';

const CourseForm = (props) => {
const[course,setCourse]=useState({
    name:''
})
   const handlechange=(e)=>{
        const newCourse={...course};
        newCourse.name=e.target.value;
        setCourse(newCourse)
    }

    const handlesubmit=(e)=>{
        if(course.name===''){
            e.preventDefault();
            return false
        } else{
            e.preventDefault();
            props.addCourse(course)
           setCourse(({name:''}))
        }

    }
    return ( <div>
        <form  onSubmit={handlesubmit}>
            <input type='text' onChange={handlechange} value={course.name}/>
            <button type='submit'>Add Course</button>

        </form>
    </div> );
}
 
export default CourseForm;
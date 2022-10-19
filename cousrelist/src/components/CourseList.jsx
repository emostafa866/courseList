import React,{useState,useRef} from 'react';

const CourseList = (props) => {

  const input=useRef()

let[edit,setEDIT]=useState(false);

const toggle=()=>{
  setEDIT(!edit)
}
let {course,index}=props

    const listRender=()=>{
        return  <li key={index}>
          <span>{course.name}</span>
          <button onClick={()=>props.deleteCourse(index)}>Delete Course</button>
          <button onClick={toggle}>Edit</button>
        </li>
    }

    const handleForm=(e)=>{
      e.preventDefault();
      let value=input.current.value;
      props.editCourse(index,value)
      toggle();

    }

    const editForm=()=>{
      return(
        
          <form onSubmit={handleForm}>
          <input ref={input} type='text' defaultValue={course.name}></input>
          <button>Update course</button>
          </form>
       
      )
    }



    return ( <div>
      {edit?editForm() : listRender()}
    </div> );
}
 
export default CourseList;
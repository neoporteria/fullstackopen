
const Header = (props) => {
  // console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <div>{props.name} {props.exercises}</div>
  )
}

const Content = (props) => {
    return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const totalnumber = (
    props.parts[0].exercises + 
    props.parts[1].exercises + 
    props.parts[2].exercises
  )
  return (
    <div>Number of exercises {totalnumber}</div>
  )
}

const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of react', exercises: 10},
      {name: 'Using prompts to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14},
    ]
  } 

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} /> 
      <Total parts={course.parts} />
    </div>
  )
}

export default App

import React, {useState} from "react";
import Info from "./Info";
import RegisterForm from "./RegisterForm";
import Select from "./Select";
import Container from "../../components/Container";

const Register = () => {
  const [content, setContent] = useState('Select');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [belong, setBelong] = useState('');
  const [major, setMajor] = useState('');
  let values = [];

  const buttonValueSetting = (e) => {
    let { name } = e.target;
    const belong = e.target.id;
    const value = e.target.value;

    if(!(belong === '')){
      setBelong(belong);
    }
    if(!(value === '')){
      console.log(value)
      values = value.split('&')
      setName(values[0])
      setAge(values[1])
      setNumber(values[2])
      setMajor(values[3])
    }

    setContent(name);
  };

  const selectComponent = {
    Select: <Select click={buttonValueSetting}/>,
    Info: <Info click={buttonValueSetting}/>,
    Form: <RegisterForm Belong={belong} Age={age} Name={name} Number={number} Major={major}/>,
  };
  
  console.log(content);

  return(
    <Container Type={false}>
      {selectComponent[content]}
    </Container> 
  )
}

export default Register;
const BioData = (props) => {
  const { name, phone, skills, address } = props;
    return (
    <>
      <h2>Bio Data</h2>
      <p>name : {name}</p>
      <p>phone : {phone}</p>
      {address && <p>Address : {address}</p>}
      <div className="skill">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)} 
        </ul>
      </div>
    </>
    )
}

export default BioData;
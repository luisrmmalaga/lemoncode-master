import React from "react";

interface Person {
  name: string;
  surname: string;
}

export const Demo: React.FC = () => {
  // const [person, setPerson] = React.useState<Person>({
  //   name: "John",
  //   surname: "Doe",
  // });

  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("Me ejecuto por el toggle button");
  }, []);

  return (
    <>
      {/* <h4>
        {person.name} {person.surname}
      </h4> */}
      <h4>Toggle visibility child component</h4>
      <input
        type="checkbox"
        checked={visible}
        onChange={(e) => {
          setVisible(e.target.checked);
        }}
      />
      {visible && <ChildComponent />}
      {/* <input
        type="text"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      ></input>
      <input
        type="text"
        value={person.surname}
        onChange={(e) => setPerson({ ...person, surname: e.target.value })}
      ></input> */}
    </>
  );
};

const ChildComponent: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    console.log("Me monto por el count");

    return () => {
      console.log("Me desmonto por el count");
    };
  }, [count]);

  return (
    <>
      <h2>Child Component</h2>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <h1>{count}</h1>
    </>
  );
};

import React from "react";
import { Actions, userReducer } from "./user.reducer";

export const App = () => {
  // --------------useRef example-----------------------
  // const [count, setCount] = React.useState(0);
  // const render = React.useRef(0);

  // render.current = render.current + 1;

  // React.useEffect(() => {
  //   setInterval(() => {
  //     console.log("interval tick");
  //     render.current = render.current + 1;
  //   }, 3000);
  // }, []);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // console.log("Rerender");
  //-----------------------------------------------------

  // -------------useRef con elementos del DOM -------------
  // const divRef = React.useRef<HTMLDivElement>();
  // const [width, setWidth] = React.useState<number>(undefined);

  // React.useEffect(() => {
  //   setWidth(divRef.current.clientWidth)
  // }, []);
  //---------------------------------------------------------

  // const [count, setCount] = React.useState<number>(0);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCount((currentValue) => currentValue + 1);
  //   }, 4000);

  //   setCount(100);
  // }, []);

  // ----------------------------------------------------------

  const [user, dispatch] = React.useReducer(userReducer, {
    username: "John",
    lastname: "Doe",
    fullname: "John Doe",
  });

  const childrenUser = React.useMemo(
    () => ({ ...user }),
    [user.username, user.lastname]
  );

  const [count, setCount] = React.useState(0);

  const handleUserReset = React.useCallback(() => {
    dispatch({ type: Actions.RESET, payload: null });
  }, []);

  return (
    // <> ------------  useRef example -----------
    //   <button onClick={handleClick}>Clicked {count} times</button>
    //   <p>Renders: {render.current}</p>
    // </>
    // <> ------------- useRef con elementos del DOM ------
    // <div ref={divRef} style={{backgroundColor: "blue"}}>
    //   <h1>Hello Lemoncoders!!!</h1>
    //   <p>Box width: {width}</p>
    // </div>
    // </>
    // <>Count: {count}</>
    <>
      <p>{user.fullname}</p>
      <input
        type="text"
        value={user.username}
        onChange={(e) =>
          dispatch({ type: Actions.SET_USERNAME, payload: e.target.value })
        }
      />
      <input
        type="text"
        value={user.lastname}
        onChange={(e) =>
          dispatch({ type: Actions.SET_LASTNAME, payload: e.target.value })
        }
      />
      <button onClick={() => setCount(count + 1)}>Click me! {count}</button>
      <Demo user={childrenUser} onReset={handleUserReset} />
    </>
  );
};

interface Props {
  user: {
    username: string;
    lastname: string;
  };
  onReset: () => void;
}

const Demo: React.FC<Props> = React.memo((props) => {
  console.log("Me ejecuto");
  const { user, onReset } = props;

  return (
    <>
      <h2>
        Soy {user.username} {user.lastname}
      </h2>
      <button onClick={() => onReset()}>Reset!</button>
    </>
  );
});

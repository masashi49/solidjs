import { Component, createEffect, createSignal } from 'solid-js';


export const Button: Component = (props) => {
  const [count, setCount] = createSignal(0)
  createEffect(() => {
    console.log(count())
  })

  return (
    <>
      <div>
        ボタンです
        <button {...props} onClick={() => setCount(() => count() + 1)} /> ::{count()}
      </div>
    </>
  );
};

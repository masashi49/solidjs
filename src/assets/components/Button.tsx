import { Component, createEffect, createSignal, createMemo } from 'solid-js';


export const Button: Component = (props) => {
  const [count, setCount] = createSignal(0)
  const [width, setWidth] = createSignal(0)
  createEffect(() => {
    // countに依存する反応センサー。useEffectに近い。
    // widthは含まれていないので反応しない
    console.log(count())
    //  console.log(width()) 含むと自動で反応する
  })

  // countに反応する式。リアクティブに関数が動く。
  const doubleCount = () => count() * 2
  const fibonacci = createMemo(() => count() + 100)

  const fib = createMemo(() => {
    console.log("test")
    return fibonacci(count)
  })

  return (
    <>
      <div>
        ボタンです
        <div>
          <button {...props} onClick={() => setCount(() => count() + 1)}>
            数字が増える</button> ::{count()}
          <div>
            ダブルカウント{doubleCount()}<br />
            10足す{fibonacci()}<br/>
            fib{fib}
          </div>
        </div>
        <br />
        <br />

        <div>
          <button {...props} onClick={() => setWidth(() => width() + 1)}>
            数字が増える</button> ::{width()}
        </div>


      </div>
    </>
  );
};

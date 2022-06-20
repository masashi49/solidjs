import { Component, createSignal, Show } from 'solid-js';


export const ShowItem: Component = () => {
  const [login, setLogin] = createSignal(false)
  console.log(login())
  return (
    <div>
      <Show
        when={login()}
        fallback={() => "ログアウト中"}
      >
        ログイン中
      </Show>

      <button onClick={() => setLogin(!login())}>
        <Show
          when={login()}
          fallback={() => "ログインする"}
        >
          ログアウトする
        </Show>
      </button>

    </div>
  );
};

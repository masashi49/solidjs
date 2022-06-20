import { Component, createSignal, For } from 'solid-js';


export const ForEach: Component = () => {

  const mapIems = [
    { id: 1, name: "たかな" },
    { id: 2, name: "やまだ" },
    { id: 3, name: "なかむら" },
  ]

  const [forItem, setForItem] = createSignal(mapIems)
  return (
    <div>
      <For each={forItem()}>{(item, index) =>
        <li>
          {item.id} :
          {item.name}
        </li>
      }</For>
    </div>
  );
};

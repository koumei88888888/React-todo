import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  /* onChangeTodoTextでevent.target.value(入力された文字)を
     todoTextにセットする。そしてinputエリアのvalueをtodoTextにすることで
     入力に応じて入力フォームの値を更新することができる。 */
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

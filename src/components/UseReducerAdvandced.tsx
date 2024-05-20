import React, { useReducer } from 'react'
interface Todo{
    id:number;
    name:string;
    status:boolean;
}
export default function UseReducerAdvandced() {
    // khởi tạo state
    const initial = {
        todos:[],
        isloading:false,
        todo:{
            id:0,
            name:"",
            status:false,
        },
        isEditing:false,
        editingId:null
    }
    //khởi tạo hàm tạo action
    const action = (type:string,payload:any)=>{
        return {
            type,payload
        }
    }
    // khởi tạo hàm reducer
    const reducer = (state:any =initial,action:any)=>{
        switch (action.type) {
            case "CHANG_INPUT":
                return {
                    ...state,
                    todo:{...state.todo,name:action.payload}
                }
            case "ADD_TODO":
                return {
                    ...state,
                    todos:[...state.todos,{...action.payload,id:Math.floor(Math.random()*1000000000)}],
                    todo:{...initial.todo}
                }
            case "START_EDITING":
                const todoToEdit = state.todos.find((todo:Todo)=> todo.id === action.payload)
                return {
                    ...state,
                    todo:{...todoToEdit},
                    isEditing: true,
                    editingId: action.payload
                }
            case "SAVE_EDIT":
                const updatedTodos = state.todos.map((todo: Todo) => 
                    todo.id === state.editingId ? { ...todo, name: state.todo.name } : todo
                );
                return { 
                    ...state, 
                    todos: updatedTodos,
                    todo: { ...initial.todo }, // Đặt lại ô nhập liệu
                    isEditing: false,
                    editingId: null
                };
            case "DELETE_TODO":
                const filteredTodos = state.todos.filter((todo: Todo) => todo.id !== action.payload);
                return { 
                    ...state, 
                    todos: filteredTodos 
                };
            default:
                return state
        }
    }
    const [state,dispatch] =useReducer(reducer,initial)
    // lay gia tri trong o input
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let inputValue =e.target.value
        dispatch(action("CHANG_INPUT",inputValue))
    }
    const addTodo = () => {
            dispatch(action("ADD_TODO", state.todo));
    };
      // Bắt đầu chỉnh sửa công việc
      const startEditing = (id: number) => {
        dispatch(action("START_EDITING", id));
    };

    // Lưu công việc đã chỉnh sửa
    const saveEdit = () => {
        dispatch(action("SAVE_EDIT", null));
    };
    const deleteTodo = (id: number) => {
        dispatch(action("DELETE_TODO", id));    
    };
    
  return (
    <div>UseReducerAdvandced
        <input 
            type="text"
             value={state.todo.name} 
            onChange={handleChange}
             />
        <button onClick={state.isEditing ? saveEdit : addTodo}>{state.isEditing ? "Lưu công việc" : "Thêm công việc"}</button>
        <p>danh sach cong viec</p>
        <ul>    
        {
                state.todos.map((todo:Todo)=>{
                    return <li key={todo.id}>{todo.name} 
                                 <button onClick={() => startEditing(todo.id)}>Sửa</button>
                                <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
                           </li>
                })
            }
        </ul>
    </div>
  )
}

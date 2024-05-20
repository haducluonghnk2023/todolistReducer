import React, { useReducer } from 'react'

export default function UseReducer() {
    // di khai báo giá tri khởi tạo 
    const initial:number = 0;
    // khởi tạo hàm reducer
    const reducer = (state=initial,action:any)=>{
        switch (action.type) {
            case "INCREASE":
                return state + action.payload 
            case "DECREASE":
                return state - action.payload 
            default:
                return state;
        }
    }
    // đối với những action có dữ liệu phức tạp thì nên tạo ra 1 function
    const action = (type:string,payload:number)=>{
        return {
            type,payload
        }
    }
    // dùng detructuring để hứng kết quả
    const [count,dispatch] = useReducer(reducer,initial)
    // hàm xử lý tăng count
    const increase = ()=>{
        dispatch(action("INCREASE",1))
    }
    // hàm xử lý giảm count
    const decrease = ()=>{
        dispatch(action("DECREASE",1))
    }
    
  return (
    <div>UseReducer
        {/* 
            là 1 hook
            sinh ra để làm gì?
              1. Sinh ra để quản lí những state phức tạp
               + khi muốn quản lí state phức tạp thì thường các em dùng useState  ( quản lí những State đơn giản thôi - )
               + về bản chất những gì useState làm được thì useReducer cũng làm được những nó sẽ đi làm những state phức tạp hơn
              2. tiền đề sau này học redux ( thư viện giúp tạo ra 1 kho chứa dữ liệu)
               

            cách dùng?
             - nó là 1 hook
             B1 : import nó vào
             B2 : useReducer();
              nhận vào 2 tham số 
              1. hàm rudecer
              2. giá trị khởi tạo
         */}
        <p>giá trị của count :{count}</p>
        <button onClick={increase}>tăng</button>
        <button onClick={decrease}>giảm</button>
    </div>
  )
}

// import React from 'react';


import React, {Component} from 'react';
//定义一个组件
class App extends Component {
  render() {
    //jsx语法  表达式  三元表达式
    const  name ="你好"
    const isLogin = true
    return (
        <div>
          Hello React {1+2} {name}
          {isLogin ? <h2>已登录</h2>:<h2>未登录</h2>}
        </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div >
//       Hello React
//     </div>
//   );
// }
//
// export default App;

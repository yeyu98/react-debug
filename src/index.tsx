import {StrictMode} from 'react'
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import BBB from './BBB';
import reportWebVitals from './reportWebVitals';

// NOTE 调试fiber构建 classComponent
// const App = BBB

// NOTE legacy 模式下不会涉及Scheduler、时间切片、中断渲染以及恢复
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// NOTE concurrent 模式下涉及Scheduler、时间切片、中断渲染以及恢复，以此作为调试demo
ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <App />
 </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

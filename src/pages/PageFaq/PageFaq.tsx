import { CpnCrumb } from 'components/CpnCrumb'
import CpnNavBar from 'components/CpnNavBar'
import { Question } from './Question'
import './style.less'
import '../../assets/css/commonl.css'

const PageFaq: React.FC = () => {
  return (
    <div>
      <CpnNavBar />
      <main>
        <CpnCrumb value='常见问题'/>
        <div className='maincontent'>
          <ul>
          {questions.map((que) => (
            <li key={que.question} ><Question question={que.question} answer={que.answer} /></li>
          ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default PageFaq

const questions = [
  {
    question: '如何在 React 中发起 AJAX 请求？',
    answer: '在 React 开发中，你能使用任何你喜欢的 AJAX 库，比如社区比较流行的 Axios，jQuery AJAX，或者是浏览器内置的 window.fetcch'
  },
  {
    question: '应该在 React 组件的哪个生命周期函数中发起 AJAX 请求？',
    answer: '我们推荐你在 componentDidMount 这个生命周期函数中发起 AJAX 请求。这样做你可以拿到 AJAX 请求返回的数据并通过 setState 来更新组件.'
  },
  {
    question: 'state 和 props 之间的区别是什么？',
    answer: 'props（“properties” 的缩写）和 state 都是普通的 JavaScript 对象。它们都是用来保存信息的，这些信息可以控制组件的渲染输出，而它们的一个重要的不同点就是：props 是传递给组件的（类似于函数的形参），而 state 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。'
  }
]

import styles from './PageFaq.module.less'
import { Divider } from 'antd'
interface Props {
  question: string
  answer: string
  isclosed?: boolean
}

const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
  const target = e.target as HTMLElement
  const btn = (
    target.tagName === 'H1' ? target.nextElementSibling : target
  ) as HTMLElement
  const content = btn.parentElement?.nextElementSibling as HTMLElement
  if (content.style.display === 'block') {
    content.style.display = 'none'
    btn.style.transform = 'rotate(0)'
  } else {
    content.style.display = 'block'
    btn.style.transform = 'rotate(90deg)'
  }
}

export const Question: React.FC<Props> = ({ question, answer }) => {
  return (
    <div className={styles['question']}>
      <div onClick={handleClick}>
        <h1>{question}</h1>
        <img src="/img/right.svg" alt="" />
      </div>
      <p>{answer}</p>
      <Divider />
    </div>
  )
}

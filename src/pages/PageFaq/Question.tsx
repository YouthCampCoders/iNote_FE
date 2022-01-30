import styles from './PageFaq.module.less'
import { Divider } from 'antd';
interface Props {
  question: string
  answer: string
  isclosed?: boolean
}

const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
  const btn = e.target as HTMLElement
  const content = btn.nextElementSibling as HTMLElement
  if (content.style.display === 'block') {
    content.style.display = 'none'
    btn.style.transform = 'rotate(0)';
    console.log(btn.style.rotate)
  } else {
    content.style.display = 'block'
    btn.style.transform = 'rotate(90deg)';
  }
}

export const Question: React.FC<Props> = ({ question, answer }) => {
  return (
    <div className={styles['question']}>
      <h1>{question}</h1>
      <img src="/img/right.svg" onClick={handleClick} />
      <p>{answer}</p>
      <Divider />
    </div>
  )
}

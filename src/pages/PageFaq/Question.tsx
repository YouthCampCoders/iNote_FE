import './style.less'

interface Props {
  question: string
  answer: string
}

const handleClick:React.MouseEventHandler<HTMLHeadingElement>=(e)=>{
    const btn=e.target as HTMLElement;
    const content=btn.nextElementSibling as  HTMLElement
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

export const Question: React.FC<Props> = ({ question, answer }) => {
  return (
    <div className="question">
        <h1  onClick={handleClick}>
          {question}
        </h1>
      <p>{answer}</p>
    </div>
  )
}
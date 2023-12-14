interface Props {
  content: string;
}

export function Task(props:Props) {
  return <p>{props.content}</p>
}


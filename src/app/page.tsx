import { FC } from "react"

export default function Home() {
  return (
    <div className="grid">
      {Array.from({ length: 100000 }).map((_, i, array) => (
        <Item key={i} i={i} top={i === array.length - 1} />
      ))}
    </div>
  )
}

const Item: FC<{ i: number; top: boolean }> = ({ i, top }) =>
  top ? <div className="text-red row-start-1">top:{i}</div> : <div>{i}</div>

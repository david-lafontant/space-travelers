import { Button } from 'react-bootstrap'

type ButtonPropsType = {
  text: string
  booked: boolean
  id: number | string
  onClick: React.MouseEventHandler<HTMLButtonElement> | any
  style: string
}

const ButtonComponent = ({ text, id, onClick, style }: ButtonPropsType) => (
  <Button
    variant={style}
    onClick={() => {
      onClick(id)
    }}
  >
    {text}
  </Button>
)

export default ButtonComponent

import { Button } from 'react-bootstrap'

type ButtonPropsType = {
  text: string
  booked: boolean
  id: number | string
  onClick: React.MouseEventHandler<HTMLButtonElement> | any
}

const ButtonComponent = ({ text, booked, id, onClick }: ButtonPropsType) => (
  <Button
    className="btn btn-primary"
    onClick={() => {
      onClick(id)
    }}
  >
    {text}
  </Button>
)

export default ButtonComponent

type AlertProps = {
  message: string
}

const Alert = ({ message }: AlertProps) => {
  return (
    <tr>
      <td>{`no ${message} booked. Please book a ${message}`}</td>{' '}
    </tr>
  )
}

export default Alert

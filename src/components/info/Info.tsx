type InfoProps = {
  name: string
}

const Info = ({ name }: InfoProps) => (
  <tr>
    <td>{name}</td>
  </tr>
);

export default Info;

import React from 'react';
import ButtonComponent from '../button/ButtonComponent';
import { AMission } from '../../types/types';

const Mission = ({ mission_name, description }: AMission) => (
  <tr>
    <th scope="row">{mission_name}</th>
    <td>
      {description}
    </td>
    <td>
      <p className="badge bg-info text-dark">
        Status badge
      </p>
    </td>
    <td>
      <ButtonComponent />
    </td>
  </tr>
);

export default Mission;

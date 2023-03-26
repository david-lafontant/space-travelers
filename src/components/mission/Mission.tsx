import React from 'react';
import ButtonComponent from '../button/ButtonComponent';

const Mission = () => (
  <tr>
    <th scope="row">MIssion</th>
    <td>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Autem aliquam architecto consequuntur aliquid porro dolorem
      molestias temporibus, dolorum laborum vitae libero iusto facilis
      incidunt sapiente repellendus odio inventore ullam perspiciatis!
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

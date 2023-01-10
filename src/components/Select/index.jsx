import { Container } from './styles';
import { useSelect } from './useSelect';

export function Select({ order_id, status, disabled }) {
  const { currentStatus, handleChangeStatus } = useSelect({
    order_id,
    status,
  });

  return (
    <Container disabled={disabled}>
      <div className="circles">
        <div className={currentStatus === 'pending' ? 'red' : 'hidden'}></div>
        <div
          className={currentStatus === 'preparing' ? 'orange' : 'hidden'}
        ></div>
        <div
          className={currentStatus === 'delivered' ? 'green' : 'hidden'}
        ></div>
      </div>
      <select
        onChange={handleChangeStatus}
        value={currentStatus}
        disabled={disabled}
      >
        <option value="pending">Pendente</option>
        <option value="preparing">Preparando</option>
        <option value="delivered">Entregue</option>
      </select>
    </Container>
  );
}

import { FiLogOut, FiPlus, FiUser } from 'react-icons/fi';
import { TfiReceipt } from 'react-icons/tfi';

export const adminLinks = [
  {
    name: 'Adicionar',
    icon: <FiPlus />,
    url: '/new',
  },
  {
    name: 'Pedidos',
    icon: <TfiReceipt />,
    url: '/all-orders',
  },
  {
    name: 'Perfil',
    icon: <FiUser />,
    url: '/profile',
  },
  {
    name: 'Entrar/Sair',
    icon: <FiLogOut />,
    url: '/login',
  },
];

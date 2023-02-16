import { FiHeart, FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi';
import { TfiReceipt } from 'react-icons/tfi';

export const clientLinks = [
  {
    name: 'Favoritos',
    icon: <FiHeart />,
    url: '/favorites',
    isRestrict: true,
  },
  {
    name: 'Carinho',
    icon: <FiShoppingCart />,
    url: '/cart',
    isRestrict: false,
  },
  {
    name: 'Pedidos',
    icon: <TfiReceipt />,
    url: '/all-orders',
    isRestrict: true,
  },
  {
    name: 'Perfil',
    icon: <FiUser />,
    url: '/profile',
    isRestrict: true,
  },
  {
    name: 'Entrar/Sair',
    icon: <FiLogOut />,
    url: '/login',
    isRestrict: false,
  },
];

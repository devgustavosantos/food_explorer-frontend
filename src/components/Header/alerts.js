import Swal from 'sweetalert2';

import theme from '../../styles/theme';

export async function alertRestrictedArea() {
  const userChoice = await Swal.fire({
    title: 'Para utilizar esse recurso você precisa estar logado!',
    text: 'Deseja se logar agora?',
    icon: 'warning',
    background: theme.COLORS.BLUE_700,
    color: theme.COLORS.WHITE,

    showCancelButton: true,
    cancelButtonColor: theme.COLORS.RED_900,
    cancelButtonText: 'Talvez mais tarde.',
    confirmButtonColor: '#ffffff33',
    confirmButtonText: 'Sim, logar agora!',
  });

  return userChoice.isConfirmed;
}

export async function confirmLogout() {
  const userChoice = await Swal.fire({
    title: 'Tem certeza que deseja sair?',
    icon: 'question',
    background: theme.COLORS.BLUE_700,
    color: theme.COLORS.WHITE,
    showCancelButton: true,
    cancelButtonColor: theme.COLORS.RED_900,
    cancelButtonText: 'Não, quero ficar!',
    confirmButtonColor: '#ffffff33',
    confirmButtonText: 'Sim, quero sair!',
  });

  return userChoice.isConfirmed;
}

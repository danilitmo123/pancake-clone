import { Button, useWalletModal, ButtonProps } from '@pancakeswap/uikit'
import styled from 'styled-components'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import Trans from './Trans'

const ButtonWrapper = styled.button<{isActiveAccount: boolean}>`
  display: inline-block;
  background: #33cc66;
  color: rgb(255,255,255);
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  width: auto;
  border: none;
  font-weight: 400;
  cursor: pointer;
  transition: all ease 0.15s;
  outline: none;
`;

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {children || <Trans>Connect Wallet</Trans>}
    </Button>
  )
}

export default ConnectWalletButton

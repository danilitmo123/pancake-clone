import { useState } from 'react'
import styled from 'styled-components'
import { Text, PancakeToggle, Toggle, Flex, Modal, InjectedModalProps, ThemeSwitcher } from '@pancakeswap/uikit'
import {
  useAudioModeManager,
  useExpertModeManager,
  useSubgraphHealthIndicatorManager,
  useUserExpertModeAcknowledgementShow,
  useUserSingleHopOnly,
} from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'
import { useSwapActionHandlers } from 'state/swap/hooks'
import useTheme from 'hooks/useTheme'
import QuestionHelper from '../../QuestionHelper'
import TransactionSettings from './TransactionSettings'
import ExpertModal from './ExpertModal'
import GasSettings from './GasSettings'

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgementShow()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const { onChangeRecipient } = useSwapActionHandlers()

  const { t } = useTranslation()
  const { theme } = useTheme()

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        onDismiss={onDismiss}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    )
  }

  return (
    <Modal
      title={t('Settings')}
      onDismiss={onDismiss}
      style={{ maxWidth: '420px', backgroundColor: '#171731'}}
    >
      <ScrollableContainer>
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" style={{ color: '#B8ADD2' }} mb="24px">
            {t('Global')}
          </Text>
          <GasSettings />
        </Flex>
        <Flex pt="24px" flexDirection="column" borderTop={`1px ${theme.colors.cardBorder} solid`}>
          <Text bold textTransform="uppercase" fontSize="12px" style={{ color: '#B8ADD2' }} mb="24px">
            {t('Swaps & Liquidity')}
          </Text>
          <TransactionSettings />
        </Flex>
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal

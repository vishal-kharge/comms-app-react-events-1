import Rejoin from '@components/Rejoin';
import ReturnToHome from '@components/ReturnToHome';
import Text from '@components/Text';
import { Layout, Space, useTheme } from '@dolbyio/comms-uikit-react';
import useConferenceCleanup from '@hooks/useConferenceCleanup';
import cx from 'classnames';

import styles from './EventRejoin.module.scss';

export const EventRejoin = () => {
  useConferenceCleanup();
  const { isMobile, isMobileSmall, isLandscape } = useTheme();
  const isSmartphone = isMobile || isMobileSmall;

  return (
    <Layout testID="ConferenceLeftRoute">
      <Space fw className={styles.wrapper}>
        <Space className={cx(styles.textContainer, isSmartphone && styles.smartphone, isLandscape && styles.landscape)}>
          <Text
            testID="ConferenceLeftPageHeading"
            type={isSmartphone ? 'H1' : 'H0'}
            align="center"
            labelKey="conferenceLeft"
          />
        </Space>
        <ReturnToHome />
        <Rejoin />
      </Space>
    </Layout>
  );
};

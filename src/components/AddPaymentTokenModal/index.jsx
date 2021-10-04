import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

import toast from 'utils/toast';
import { useApi } from 'api';
import { getSigner } from 'contracts';

import Modal from '../Modal';
import styles from '../Modal/common.module.scss';

const AddPaymentTokenModal = ({ visible, onClose }) => {
  const { getNonce, addPaymentToken } = useApi();
  const { account } = useWeb3React();

  const { authToken } = useSelector(state => state.ConnectWallet);

  const [adding, setAdding] = useState(false);
  const [address, setAddress] = useState('');
  const [chainLinkProxyAddress, setChainLinkProxyAddress] = useState('');
  const [decimals, setDecimals] = useState('');

  useEffect(() => {
    if (visible) {
      setAdding(false);
    }
  }, [visible]);

  const handleAddToken = async () => {
    if (adding) return;

    try {
      setAdding(true);

      const { data: nonce } = await getNonce(account, authToken);

      let signature;
      let addr;
      try {
        const signer = await getSigner();
        const msg = `Approve Signature on Promenade.art with nonce ${nonce}`;
        signature = await signer.signMessage(msg);
        addr = ethers.utils.verifyMessage(msg, signature);
      } catch (err) {
        toast(
          'error',
          'You need to sign the message to be able to add payment token.'
        );
        setAdding(false);
        return;
      }

      await addPaymentToken(
        {
          payToken: address,
          chainlinkProxy: chainLinkProxyAddress,
          decimals,
        },
        authToken,
        signature,
        addr
      );
      toast('success', 'Success!');
    } catch (e) {
      console.log(e);
    }
    setAdding(false);
  };

  return (
    <Modal
      visible={visible}
      title={'Add payment token'}
      onClose={onClose}
      submitDisabled={adding}
      submitLabel={adding ? <ClipLoader color="#FFF" size={16} /> : 'Add Token'}
      onSubmit={!adding ? () => handleAddToken() : null}
    >
      <div className={styles.formGroup}>
        <div className={styles.formLabel}>PayToken Address</div>
        <div className={styles.formInputCont}>
          <input
            className={styles.formInput}
            placeholder="0x0000"
            value={address}
            onChange={e => setAddress(e.target.value)}
            disabled={adding}
          />
        </div>
        <div className={styles.formLabel}>Chainlink Proxy</div>
        <div className={styles.formInputCont}>
          <input
            className={styles.formInput}
            placeholder="0x0000"
            value={chainLinkProxyAddress}
            onChange={e => setChainLinkProxyAddress(e.target.value)}
            disabled={adding}
          />
        </div>
        <div className={styles.formLabel}>Decimals</div>
        <div className={styles.formInputCont}>
          <input
            className={styles.formInput}
            placeholder="18"
            value={decimals}
            onChange={e => setDecimals(e.target.value)}
            disabled={adding}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddPaymentTokenModal;

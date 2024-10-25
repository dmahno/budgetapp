import {observer} from 'mobx-react-lite';
import {useState} from 'react';
import {Modal, Button, Input, message} from 'antd';

import {TapButton} from 'shared/ui';

import {financeStore} from '../../model/store/FinanceStore';
import styles from './MoneyManagement.module.scss';

export const MoneyManagement = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'extract' | null>(null);
  const [sum, setSum] = useState<number>(0);

  const showAddModal = () => {
    setModalType('add');
    setIsModalVisible(true);
    setSum(0);
  };

  const showExtractModal = () => {
    setModalType('extract');
    setIsModalVisible(true);
    setSum(0);
  };

  const handleOk = () => {
    if (sum > 0) {
      if (modalType === 'add') {
        financeStore.addOperation(sum, 'Пополнение', 'add');
        message.success(`Сумма ${formatSum(sum)} добавлена`);
      } else if (modalType === 'extract') {
        financeStore.addOperation(sum, 'Списание', 'exclude');
        message.success(`Сумма ${formatSum(sum)} списана`);
      }
      setIsModalVisible(false);
      setSum(0);
    } else {
      message.error('Пожалуйста, введите корректную сумму');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSum(0);
  };

  const formatSum = (value: number) => {
    return value.toLocaleString('ru-RU');
  };

  const incrementSum = () => setSum((prevSum) => prevSum + 1000);
  const decrementSum = () => setSum((prevSum) => Math.max(0, prevSum - 1000));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value.replace(/\D/g, ''));
    setSum(inputValue);
  };

  return (
    <div className={styles.buttons}>
      <TapButton text="Пополнить" onClick={showAddModal} />
      <TapButton
        text="Списать"
        appearance="secondary"
        onClick={showExtractModal}
      />

      <Modal
        title={modalType === 'add' ? 'Пополнить счет' : 'Списать средства'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.amountDisplay}>
          <span className={styles.amount}>{formatSum(sum)} ₽</span>
        </div>

        <Input
          type="text"
          value={sum > 0 ? formatSum(sum) : ''}
          placeholder="Введите сумму"
          onChange={handleInputChange}
          className={styles.inputField}
        />

        <div className={styles.controls}>
          <Button onClick={decrementSum} disabled={sum <= 0}>
            -
          </Button>
          <Button onClick={incrementSum}>+</Button>
        </div>
      </Modal>
    </div>
  );
});

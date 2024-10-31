import {observer} from 'mobx-react-lite';
import {useEffect, useRef, useState} from 'react';
import {message, Select, Input, InputNumber} from 'antd';

import {Modal, TapButton} from 'shared/ui';
import DropdowmIcon from 'shared/assets/icons/down.svg';

import {categories} from '../../model/constants/categories';
import {financeStore, TTransaction} from '../../model/store/FinanceStore';
import styles from './MoneyManagement.module.scss';

interface IModalStateProps {
  visible: boolean;
  type: TTransaction | null;
  sum: number;
  category: string;
  description: string;
}

const modalInitialState = {
  visible: false,
  type: null,
  sum: 0,
  category: 'other',
  description: '',
};

export const MoneyManagement = observer(() => {
  const [modalState, setModalState] =
    useState<IModalStateProps>(modalInitialState);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (modalState.visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalState.visible]);

  const openModal = (type: TTransaction) => {
    setModalState({
      visible: true,
      type,
      sum: 0,
      category: 'other',
      description: '',
    });
  };

  const handleOk = async () => {
    const {sum, type, category, description} = modalState;
    if (sum > 0 && type) {
      const amountOperation = type === 'add' ? 'Пополнение' : 'Списание';
      try {
        await financeStore.addOperation(
          sum,
          amountOperation,
          type,
          category,
          description,
        );
        message.success(
          `Сумма ${sum.toLocaleString('ru-RU')} ${
            type === 'add' ? 'добавлена' : 'списана'
          }`,
        );
        handleCancel();
      } catch (error) {
        if (error instanceof Error) {
          console.error('Failed to add operation:', error);
          message.error(
            error.message || 'Произошла ошибка при добавлении операции.',
          );
        }
      }
    } else {
      message.error('Пожалуйста, введите корректную сумму.');
    }
  };

  const handleCancel = () => {
    setModalState((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  const handleInputChange = (value: number | null) => {
    setModalState((prevState) => ({...prevState, sum: value || 0}));
  };

  const handleCategoryChange = (value: string) => {
    setModalState((prevState) => ({...prevState, category: value}));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setModalState((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  return (
    <>
      <div className={styles.buttons}>
        <TapButton text="Пополнить" onClick={() => openModal('add')} />
        {financeStore.totalSum > 0 && (
          <TapButton
            text="Списать"
            appearance="secondary"
            onClick={() => openModal('exclude')}
          />
        )}
      </div>
      <Modal
        disabled={modalState.sum === 0}
        title={
          modalState.type === 'add' ? 'Пополнить счет' : 'Списать средства'
        }
        isOpen={modalState.visible}
        onAdd={handleOk}
        addButtonText={modalState.type === 'add' ? 'Пополнить' : 'Списать'}
        onClose={handleCancel}
        footer
      >
        <div className={styles.amountDisplay}>
          <span className={styles.amount}>
            {modalState.sum.toLocaleString('ru-RU')} ₽
          </span>
        </div>

        <InputNumber
          ref={inputRef}
          placeholder="Введите сумму"
          value={modalState.sum}
          onChange={handleInputChange}
        />

        <Select
          suffixIcon={<DropdowmIcon />}
          value={modalState.category}
          onChange={handleCategoryChange}
          className={styles.selectCategory}
        >
          {categories.map((cat) => (
            <Select.Option key={cat.value} value={cat.value}>
              {cat.label}
            </Select.Option>
          ))}
        </Select>

        <Input.TextArea
          placeholder="Введите описание"
          value={modalState.description}
          onChange={handleDescriptionChange}
        />
      </Modal>
    </>
  );
});

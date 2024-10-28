import {observer} from 'mobx-react-lite';
import {useState} from 'react';
import {Modal, Button, Input, message, Select} from 'antd';

import {TapButton} from 'shared/ui';

import {categories} from '../../model/constants/categories';
import {financeStore} from '../../model/store/FinanceStore';
import styles from './MoneyManagement.module.scss';

const {Option} = Select;

export const MoneyManagement = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'extract' | null>(null);
  const [sum, setSum] = useState<number>(0);
  const [category, setCategory] = useState<string>('other');
  const [description, setDescription] = useState<string>('');

  const showAddModal = () => {
    setModalType('add');
    setIsModalVisible(true);
    setSum(0);
    setCategory('other');
    setDescription('');
  };

  const showExtractModal = () => {
    setModalType('extract');
    setIsModalVisible(true);
    setSum(0);
    setCategory('other');
    setDescription('');
  };

  const handleOk = async () => {
    if (sum > 0) {
      if (modalType === 'add') {
        await financeStore.addOperation(
          sum,
          'Пополнение',
          'add',
          category,
          description,
        );
        message.success(`Сумма ${formatSum(sum)} добавлена`);
      } else if (modalType === 'extract') {
        await financeStore.addOperation(
          sum,
          'Списание',
          'exclude',
          category,
          description,
        );
        message.success(`Сумма ${formatSum(sum)} списана`);
      }
      setIsModalVisible(false);
      setSum(0);
      setCategory('other');
      setDescription('');
    } else {
      message.error('Пожалуйста, введите корректную сумму');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSum(0);
    setCategory('other');
    setDescription('');
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

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className={styles.buttons}>
        <TapButton text="Пополнить" onClick={showAddModal} />
        <TapButton
          text="Списать"
          appearance="secondary"
          onClick={showExtractModal}
        />
      </div>
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

        <Select
          value={category}
          onChange={handleCategoryChange}
          className={styles.selectCategory}
          style={{width: '100%', marginTop: '16px'}}
        >
          {categories.map((cat) => (
            <Option key={cat.value} value={cat.value}>
              {cat.label}
            </Option>
          ))}
        </Select>

        <Input.TextArea
          value={description}
          placeholder="Введите описание"
          onChange={handleDescriptionChange}
          className={styles.textareaField}
          style={{marginTop: '16px'}}
        />

        <div className={styles.controls}>
          <Button onClick={decrementSum} disabled={sum <= 0}>
            -
          </Button>
          <Button onClick={incrementSum}>+</Button>
        </div>
      </Modal>
    </>
  );
});

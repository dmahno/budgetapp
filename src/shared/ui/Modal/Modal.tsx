import {FC, MouseEvent, ReactNode, useEffect} from 'react';

import {Button} from 'shared/ui';
import CloseIcon from 'shared/assets/icons/close.svg';

import styles from './Modal.module.scss';

interface IModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  onAdd?: () => void;
  addButtonText?: string;
  closeButtonText?: string;
  footer?: boolean;
  disabled?: boolean;
}

export const Modal: FC<IModalComponentProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  onAdd,
  addButtonText = 'Добавить',
  closeButtonText = 'Закрыть',
  disabled,
  footer,
}) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && onAdd && !disabled) {
        e.preventDefault();
        onAdd();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onAdd, disabled]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleOverlayClick}>
        <div className={styles.header}>
          {!!title && <h1 className={styles.title}>{title}</h1>}
          <button className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        {!!description && <p className={styles.description}>{description}</p>}
        <div className={styles.content}>{children}</div>
        {footer && (
          <div className={styles.footer}>
            <Button appearance="thirdly" onClick={onClose}>
              {closeButtonText}
            </Button>
            {onAdd && (
              <Button disabled={disabled} onClick={onAdd}>
                {addButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// modules
import React, { useRef } from 'react';

// images
import { FiCheckSquare } from 'react-icons/fi';

// styles
import { Form } from './styles';

// components
import { Modal } from '../Modal';
import Input from '../Input';

// types
import { IFood } from 'src/types/foodTypes';
import { FormHandles } from '@unform/core';

interface IModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editingFood: IFood;
  handleUpdateFood: (food: IFood) => void;
}

export const ModalEditFood: React.FC<IModalEditFoodProps> = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IFood) => {
    handleUpdateFood(data);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" icon={""} placeholder="Cole o link aqui" />

        <Input name="name" icon={""} placeholder="Ex: Moda Italiana" />
        <Input name="price" icon={""} placeholder="Ex: 19.90" />

        <Input name="description" icon={""} placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
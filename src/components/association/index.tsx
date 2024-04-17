import { Dispatch, SetStateAction, useEffect } from "react";
import { Button, Col, Row } from "antd";
import {
  ForwardFilled,
  BackwardFilled,
  CheckCircleFilled,
  PlusCircleFilled,
  MinusCircleFilled
} from '@ant-design/icons';

import type { IdNumber } from "../../types/basic.d";

import styles from './styles.module.css';
import { sortableName } from "../../helpers/sortable";

type AssociationProps = {
  associationItems: Array<IdNumber>,
  setAssociationItems: Dispatch<SetStateAction<Array<IdNumber>>>,
  nonAssociationItems: Array<IdNumber>,
  setNonAssociationItems: Dispatch<SetStateAction<Array<IdNumber>>>,
}

const AssociationComponent = (props: AssociationProps) => {
  const {
    associationItems,
    setAssociationItems,
    nonAssociationItems,
    setNonAssociationItems
  } = props;  

  const handleRemoveItem = (user: IdNumber) => {
    const updateAssociationList = associationItems.filter((item) => item.id !== user.id);

    setAssociationItems(updateAssociationList);
    setNonAssociationItems((prev) => [...prev, user]);
  }
  
  const handleAddItem = (user: IdNumber) => {
    const updateNonAssociationList = nonAssociationItems.filter((item) => item.id !== user.id);

    setNonAssociationItems(updateNonAssociationList);
    setAssociationItems((prev) => [...prev, user]);
  }

  const allItems = [...associationItems, ...nonAssociationItems];

  const handleRemoveAllItems = () => {     
    setAssociationItems([]);
    setNonAssociationItems(allItems);
  }

  const handleAddAllItems = () => {
    setNonAssociationItems([]);
    setAssociationItems(allItems);
  }

  const filteredAssociationList = sortableName(associationItems);
  const filteredNonAssociationList = sortableName(nonAssociationItems);

  useEffect(() => {
    const filteredList = nonAssociationItems.filter(item1 => !associationItems.some(item2 => item2.id === item1.id));
    setNonAssociationItems(filteredList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row justify="space-between">
      <Col xs={24} md={11}>
        <Row justify="space-between" gutter={15}>
          <Col>
            <h3 className={styles.text_center}>Usuários selecionados</h3>
          </Col>
          <Col>
            <Button
              type="text"
              className={styles.button_primary}
              onClick={() => handleRemoveAllItems()}
            >
              <MinusCircleFilled className={styles.icon_del} />
              Remover todos             
            </Button>
          </Col>
        </Row>        
        <div className={styles.card}>
          {filteredAssociationList.map((item) => (
            <Button
              key={item.id}
              type="text"
              className={styles.button_remove}
              onClick={() => handleRemoveItem(item)}
            >
              <CheckCircleFilled className={styles.icon_plus} />
              {item.name}
            </Button>
          ))}          
        </div>
      </Col>
      <Col xs={24} md={2} className={styles.flex_center}>
        <BackwardFilled className={styles.icon} />
        <ForwardFilled className={styles.icon} />        
      </Col>
      <Col xs={24} md={11}>
        <Row justify="space-between" gutter={15}>
          <Col>
            <h3 className={styles.text_center}>Lista de usuários</h3>
          </Col>
          <Col>
            <Button
              type="text"
              className={styles.button_primary}
              onClick={() => handleAddAllItems()}
            > 
              <PlusCircleFilled className={styles.icon_plus} />
              Adicionar todos             
            </Button>
          </Col>
        </Row>        
        <div className={styles.card}>
          {filteredNonAssociationList.map((item) => (
            <Button
              key={item.id}
              type="text"
              className={styles.button_add}
              onClick={() => handleAddItem(item)}
            >
              <CheckCircleFilled className={styles.icon_del} />
              {item.name}
            </Button>
          ))}          
        </div>
      </Col>
    </Row>
  )
}

export default AssociationComponent;
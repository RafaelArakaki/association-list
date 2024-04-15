import { Button, Col, Row } from "antd";
import {
  ForwardFilled,
  BackwardFilled,
  CheckCircleFilled,
  PlusCircleFilled,
  MinusCircleFilled
} from '@ant-design/icons';

import styles from './styles.module.css';

type IdNumber = {
  id: number,
  name: string,
}

type AssociationProps = {
  associationItems: IdNumber[],
  nonAssociationItems: IdNumber[],
}

const AssociationComponent = (props: AssociationProps) => {
  const {
    associationItems,
    nonAssociationItems
  } = props;

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
            >
              <MinusCircleFilled className={styles.icon_del} />
              Remover todos             
            </Button>
          </Col>
        </Row>        
        <div className={styles.card}>
          {associationItems.map((item) => (
            <Button
              key={item.id}
              type="text"
              className={styles.button_remove}
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
            > 
              <PlusCircleFilled className={styles.icon_plus} />
              Adicionar todos             
            </Button>
          </Col>
        </Row>        
        <div className={styles.card}>
          {nonAssociationItems.map((item) => (
            <Button
              key={item.id}
              type="text"
              className={styles.button_add}
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
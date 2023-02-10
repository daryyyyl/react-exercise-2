import React, { Component } from "react";
import { Button, Space, Card, Input } from "antd";

export default class Cart extends Component {
  render() {
    const { product } = this.props;
    const { Meta } = Card;
    return (
      <Card
        className="mb-3"
        cover={<img alt={product.name} src={product.image} />}
      >
        <Meta
          title={product.name}
          description={product.description}
          className="mb-2"
        />
        <div className="site-input-group-wrapper mb-2">
          <Input.Group compact>
            <Button type="primary">+</Button>
            <Input
              style={{ width: "calc(100% - 78px)" }}
              value={product.quantity}
              className="text-center"
              readOnly
            />
            <Button type="primary">-</Button>
          </Input.Group>
        </div>
        {product.quantity > 0 && (
          <Space>
            <Button
              type="primary"
              size="middle"
              onClick={() => this.props.onDelete(product.id)}
              danger
            >
              Remove<i className="fa-solid fa-trash ms-2"></i>
            </Button>
          </Space>
        )}
      </Card>
    );
  }
}

import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true,
})
export class MyOtherComponent {
  @Prop() color: string = 'undefined';
  render() {
    return (
      <Host>
        <h3>My Color is {this.color}</h3>
        <slot></slot>
      </Host>
    );
  }

}

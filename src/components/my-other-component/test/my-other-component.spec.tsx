import { newSpecPage } from '@stencil/core/testing';
import { MyOtherComponent } from '../my-other-component';

describe('my-other-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyOtherComponent],
      html: `<my-other-component></my-other-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-other-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-other-component>
    `);
  });
});

import { fixture, oneEvent, expect } from '@open-wc/testing';

/**
 * <hx-alert> component tests
 *
 * @type HXAlertElement
 *
 */
describe('<hx-alert> component tests', () => {
    const template = '<hx-alert>';

    describe('test instantiate element', () => {
        it('should be instantiated with hx-defined attribute', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            const attr = component.hasAttribute('hx-defined');

            expect(attr).to.be.true;
        });

        it('should not be hidden', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            const prop = component.hidden;

            expect(prop).to.be.false;
        });

        it(`the rendered Light DOM should NOT equal simple template ${template}`, async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);

            expect(component).lightDom.to.not.equal(template);
        });

    });

    describe('test Shadow DOM', () => {
        describe('verify render', () => {
            it('should have a static Shadow DOM', async function () {
                const component = /** @type { HXAlertElement } */ await fixture(template);

                // FIXME: temp fix issue submitted https://github.com/open-wc/open-wc/issues/1540
                const shadow = component.shadowRoot.innerHTML;

                expect(component).shadowDom.to.equal(shadow);
            });

            it('should render the Shadow Root mode open', async () => {
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const mode = component.shadowRoot.mode;

                expect(mode).to.equal("open");
            });

            it('should have a single <slot>', async () => {
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelectorAll('slot');
                const len = query.length;

                expect(len).to.be.equal(1);
            });

            it('should have an unnamed <slot>', async () => {
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const name = component.slot;

                if ( name !== null ) {
                    expect(name).to.be.equal('');
                } else {
                    expect(name).to.be.null;  // IE11, Legacy Edge, and older browsers
                }
            });
        });

        describe('verify Shadow DOM markup', () => {
            it('markup should contain a #hxIconWrapper <span>', async () => {
                const elSelector = 'span#hxIconWrapper';
                const id = 'hxIconWrapper';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.id;

                expect(queryId).to.equal(id);
            });

            it('markup should contain a #hxIconWrapper <span> with an info-circle type <hx-icon>', async () => {
                const elSelector = 'span#hxIconWrapper > hx-icon';
                const iconType = 'info-circle';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.type;

                expect(queryId).to.equal(iconType);
            });

            it('markup should contain a #hxContent <span>', async () => {
                const elSelector = 'span#hxContent';
                const id = 'hxContent';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.id;

                expect(queryId).to.equal(id);
            });

            it('markup should contain a #hxContent <span> with #hxStatus <span>', async () => {
                const elSelector = 'span#hxContent > span#hxStatus';
                const id = 'hxStatus';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.id;

                expect(queryId).to.equal(id);
            });

            it('markup should contain a #hxContent <span>', async () => {
                const elSelector = 'span#hxContent';
                const id = 'hxContent';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.id;

                expect(queryId).to.equal(id);
            });

            it('markup should contain a #hxCta button', async () => {
                const elSelector = 'button#hxCta';
                const id = 'hxCta';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.id;

                expect(queryId).to.equal(id);
            });

            it('markup should contain a #hxDismiss button', async () => {
                const elSelector = 'button#hxDismiss';
                const id = 'hxDismiss';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.id;

                expect(queryId).to.equal(id);
            });

            it('markup should contain a #hxDismiss button with a times type <hx-icon>', async () => {
                const elSelector = 'button#hxDismiss > hx-icon';
                const iconType = 'times';
                const component = /** @type { HXAlertElement } */ await fixture(template);
                const shadow = component.shadowRoot;
                const query = shadow.querySelector(elSelector);
                const queryId = query.type;

                expect(queryId).to.equal(iconType);
            });
        });
    });

    describe('test getters and setters', () => {
        it('should be able to persist', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            component.persist = true;
            const attr = component.hasAttribute('persist');

            expect(attr).to.be.true;
        });

        it('should be able to set a status message', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            const msg = 'alert me!';

            component.status = msg;
            const attr = component.hasAttribute('status');
            const statusMsg = component.getAttribute('status');

            expect(attr).to.be.true;
            expect(statusMsg).to.equal(msg);
        });

        it('should be able to set a call to action message', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            const msg = 'click me now!';

            component.cta = msg;
            const attr = component.hasAttribute('cta');
            const statusMsg = component.getAttribute('cta');

            expect(attr).to.be.true;
            expect(statusMsg).to.equal(msg);
        });

        it('should be able to set alert [type="success"]', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            const attrType = 'success';

            component.type = attrType;
            const attr = component.hasAttribute('type');
            const alertType = component.getAttribute('type');

            expect(attr).to.be.true;
            expect(alertType).to.equal(attrType);
        });
    });

    describe('test adding content and click event listener', () => {
        it('should be able to add miscellaneous Light DOM content', async () => {
            const component = /** @type {HXAlertElement} */ await fixture(template);
            const content = 'add misc content to Light DOM';

            expect(component.textContent).to.equal('');

            component.textContent = content;

            expect(component.textContent).to.equal(content);
        });

        it('should fire a click event', async () => {
            const component = /** @type { HXAlertElement } */ await fixture(template);
            const detail = { evt: 'clicked!'};
            const customEvent = new CustomEvent('click', { detail });

            setTimeout(() => component.dispatchEvent(customEvent));
            const evt = await oneEvent(component, 'click');

            expect(evt).to.equal(customEvent);
            expect(evt.detail).to.equal(detail);
        });
    });
});

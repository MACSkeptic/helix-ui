import Util from '../../_util';

if (document.getElementById('vue-secNavDemo')) {
    new Vue({
        el: '#vue-secNavDemo',
        data: {
            isDisabled: true,
            notifications: 'Notifications',
            tickets: 'Tickets',
            support: 'Support',
            billing: 'Billing',
            account: 'Account',
            user: 'User',
            currentTab: 0,
        },
        methods: {
            selectedTag (selectedTag) {
                alert('selected icon');
                this.a.forEach(tab => {
                    alert('selected icon');
                    tab.isActive = (tab === selectedTag);
                });
            },
        },
        computed: {
            attrDisabled: function () {
                return (this.isDisabled ? 'disabled' : '');
            },
            snippet: function () {
                return Util.snippet(`
                <div id="vue-secNavDemo">
                <nav id="hxTopNav">
                  <a class="hxTopNavLogo" href="#">
                    <img src="images/helix-logo.svg" alt="Brand Logo" />
                  </a>
                  <div class="hxTopNavMenu hxTopNavOptionMenu">
                    <hx-disclosure aria-controls="topnav-menu-options" role="button" aria-expanded="true">
                      <span>Select an option</span>
                      <hx-icon class="hxPrimary" type="angle-down"></hx-icon>
                    </hx-disclosure>
                    <hx-menu id="topnav-menu-options">
                      <section>
                        <hx-menuitem role="menuitem">Option Alpha</hx-menuitem>
                        <hx-menuitem role="menuitem">Option Beta Services</hx-menuitem>
                        <hx-menuitem role="menuitem">Option Gamma</hx-menuitem>
                      </section>
                    </hx-menu>
                  </div>
                  <div class="hxTopNavIconMenu">
                    <div>
                      <a href="#" @click="notify()">
                        <hx-icon type="bell"></hx-icon>
                        <p>Notifications</p>
                      </a>
            
                      <a href="#" class="selected">
                        <hx-icon type="ticketing"></hx-icon>
                        <p>Tickets</p>
                      </a>
            
                      <a href="#">
                        <hx-icon type="support"></hx-icon>
                        <p>Support</p>
                      </a>
            
                      <a href="#" class="hxDisabled" id="billing">
                        <hx-icon type="billing"></hx-icon>
                        <p>Billing</p>
                        <hx-tooltip for="billing" position="bottom-center">
                          You do not have access to this area. Contact an account admin
                          in your organization to request access to this item.
                        </hx-tooltip>
                      </a>
            
                      <a href="#">
                        <hx-icon type="account"></hx-icon>
                        <p>Account</p>
                      </a>
                    </div>
                    <div class="hxSpacer"></div>
                    <div class="hxTopNavMenu">
                      <hx-disclosure aria-controls="demo-user-menu" role="button" aria-expanded="true">
                        <span>Jane User</span>
                        <hx-icon class="hxPrimary" type="angle-down"></hx-icon>
                      </hx-disclosure>
                      <hx-menu id="demo-user-menu" position="bottom-end">
                        <section>
                          <header>
                            <hx-menuitem role="menuitem" class="hxMenuKey">Account Number:</hx-menuitem>
                            <hx-menuitem role="menuitem" class="hxMenuValue">12345678</hx-menuitem>
                          </header>
                          <hr class="hxDivider">
                          <hx-menuitem role="menuitem" class="hxMenuValue">My Profile & Settings</hx-menuitem>
                          <hr class="hxDivider">
                          <footer>
                            <button class="hxBtn">Log Out</button>
                          </footer>
                        </section>
                      </hx-menu>
                    </div>
                  </div>
                </nav>
                <!-- Secondary Navigation -->
                <nav id="hxSecNav">
                  <a href="#" class="navLink"> Nav Item One</a>
                  <div class="hxSecNavMenu">
                    <hx-disclosure aria-controls="secNavProductDropdown" role="button" aria-expanded="false" class="disabled">
                      <span>Nav Item Two</span>
                      <hx-icon class="hxPrimary" type="angle-down"></hx-icon>
                    </hx-disclosure>
                    <hx-menu id="secNavProductDropdown">
                      <section>
                        <header>
                          <hx-menuitem role="menuitem" class="hxMenuKey">L1 Section :</hx-menuitem>
                          <hx-menuitem role="menuitem">Link 1-1</hx-menuitem>
                          <hx-menuitem role="menuitem">Link 1-2</hx-menuitem>
                          <hx-menuitem role="menuitem">Link 1-3</hx-menuitem>
                        </header>
                      </section>
                    </hx-menu>
                    <hx-disclosure aria-controls="secNavProductDropdownTwo" role="button" aria-expanded="false" class="disabled">
                      <span>Nav Item Three</span>
                      <hx-icon class="hxPrimary" type="angle-down"></hx-icon>
                    </hx-disclosure>
                    <hx-menu id="secNavProductDropdownTwo">
                      <section>
                        <header>
                          <hx-menuitem role="menuitem" class="hxMenuKey">L1 Section :</hx-menuitem>
                          <hx-menuitem role="menuitem" class="hxMenuValue">Link 1-1</hx-menuitem>
                          <hx-menuitem role="menuitem" class="hxMenuValue">Link 1-2</hx-menuitem>
                        </header>
                        <hr class="hxDivider">
                        <hx-menuitem role="menuitem" class="hxMenuKey">L2 Section :</hx-menuitem>
                        <hx-menuitem role="menuitem" class="hxMenuValue">Link 2-1</hx-menuitem>
                        <hx-menuitem role="menuitem" class="hxMenuValue">Link 2-2</hx-menuitem>
                      </section>
                    </hx-menu>
                  </div>
                </nav>
                <footer>
                  <pre><code v-text="snippet"></code></pre>
                </footer>
              </div>
            `);
            },
        },
    });
}

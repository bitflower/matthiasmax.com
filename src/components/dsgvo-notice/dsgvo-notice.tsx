import { Component, h, forceUpdate, Fragment } from '@stencil/core';

import i18n from '../../stores/i18n.store';

const KEY = 'matthiasmaxcookie';

function setCookie(name: string, value: string, days: number) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
function getCookie(name: string) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

@Component({
  tag: 'dsgvo-notice',
  styleUrl: 'dsgvo-notice.css',
})
export class DsgvoNotice {
  private onAccept = () => {
    setCookie(KEY, 'true', 30);
    forceUpdate(this);
  };

  render() {
    return !getCookie(KEY) ? (
      <Fragment>
        <div class="backdrop"></div>
        <div class="notice content-card">
          <p>{i18n.global.dsgvo}</p>
          <button class="btn btn--primary btn--small" onClick={this.onAccept}>
            {i18n.global.dsgvoOk}
          </button>
        </div>
      </Fragment>
    ) : null;
  }
}

/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Mission extends PageViewElement {
	render() {
		return html`
			${SharedStyles}
			<section class="min-height-fix">
				<h2 class="text-left">My Mission</h2>
				<p>My mission is enjoy my life and help others enjoy theirs. Also, be as kind to other people as possible.</p>
			</section>
		`;
	}
}

window.customElements.define('my-mission', Mission);
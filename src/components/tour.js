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
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Tour extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Tour`,
			description:
				'I am spending this year walking across America :).  That’s right, I’m walking…like with my feet…all the way across. It will take me about a year. While I walk, I will be playing free surprise concerts for people. Follow me on instagram to keep up. @mikeposner',
		});

		return html`
			${SharedStyles}
			<style>
				@media (max-width: 600px) {
					.heading {
						font-size: 42px;
						line-height: 42px;
					}
				}
			</style>
			<section class="container">
				<h2 class="heading">Tour</h2>
				<p class="jumbo">
					I am spending this year walking across America :). That’s right, I’m walking…like with my feet…all the way across. It will take me
					about a year. While I walk, I will be playing free surprise concerts for people. Follow me on instagram to keep up.
					<a class="text-link text-white" href="http://mikeposner.co/instagram" target="_blank" rel="noreferrer">@mikeposner</a>
				</p>
			</section>
		`;
	}
}

window.customElements.define('my-tour', Tour);

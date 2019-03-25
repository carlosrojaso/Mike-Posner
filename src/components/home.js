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
import { SharedStyles } from './shared-styles.js';

class Home extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Home`,
			description: 'Official Website for Mike Posner. A Real Good Kid Available Jan. 18th.',
		});

		return html`
			${SharedStyles}
			<style>
				#home {
					background: white;
				}
				.state-map {
					margin-top: 4rem;
					margin-bottom: 4rem;
				}

				p.text-center {
					margin-top: 4rem !important;
					margin-bottom: 4rem !important;
				}

				@media (max-width: 1600px) {
					#home {
						margin-top: 30px;
					}

					#home > .logo > img {
						width: 80%;
					}
				}
			</style>
			<section id="home" class="container">
				<div class="logo text-center"><img width="100%" src="images/posner-walk.svg" alt="Logo" /></div>
				<p class="text-center">
					In 2019, I will be walking from the Atlantic Ocean to the Pacific Ocean. The journey will take me most of my 31st year. You are
					welcome to join. I'll be announcing details soon 😊🦁✨🌼🌳🤴.
				</p>
				<div class="container state-map"><img width="100%" src="images/state-map.svg" alt="Logo" /></div>
			</section>
		`;
	}
}

window.customElements.define('my-home', Home);
